import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Radio } from "lucide-react";

type Match = {
  id: number;
  team1: string;
  team2: string;
  venue: string;
  matchDate: Date;
  matchTime: string;
  matchType: string;
  status: "upcoming" | "live" | "completed";
  score: string | null;
};

export default function LiveScoreWidget() {
  const [refreshKey, setRefreshKey] = useState(0);

  const { data: matches, isLoading } = trpc.fantasy.getMatches.useQuery(undefined, {
    // Force refetch every time refreshKey changes
    refetchInterval: false,
  });

  // Auto-refresh every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Trigger refetch when refreshKey changes
  const utils = trpc.useUtils();
  useEffect(() => {
    if (refreshKey > 0) {
      utils.fantasy.getMatches.invalidate();
    }
  }, [refreshKey, utils]);

  // Filter only live matches
  const liveMatches = matches?.filter((m) => m.status === "live") || [];

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radio className="h-5 w-5 text-red-500 animate-pulse" />
            Live Matches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (liveMatches.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radio className="h-5 w-5 text-gray-400" />
            Live Matches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            No live matches at the moment
          </p>
        </CardContent>
      </Card>
    );
  }

  const parseScore = (scoreStr: string | null) => {
    if (!scoreStr) return null;
    try {
      return JSON.parse(scoreStr);
    } catch {
      return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Radio className="h-5 w-5 text-red-500 animate-pulse" />
          Live Matches
          <Badge variant="destructive" className="ml-auto">LIVE</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {liveMatches.map((match) => {
          const scoreData = parseScore(match.score);
          
          return (
            <div
              key={match.id}
              className="border rounded-lg p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20"
            >
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {match.matchType}
                </Badge>
                <Badge variant="destructive" className="animate-pulse">
                  <Radio className="h-3 w-3 mr-1" />
                  LIVE
                </Badge>
              </div>

              <div className="space-y-2">
                {/* Team 1 */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">{match.team1}</span>
                  <span className="font-bold text-xl">
                    {scoreData?.team1Score || "0/0"}
                  </span>
                </div>

                {/* Team 2 */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">{match.team2}</span>
                  <span className="font-bold text-xl">
                    {scoreData?.team2Score || "0/0"}
                  </span>
                </div>
              </div>

              {/* Match Status/Commentary */}
              {scoreData?.status && (
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm text-muted-foreground">
                    {scoreData.status}
                  </p>
                </div>
              )}

              {/* Venue */}
              <div className="mt-2 text-xs text-muted-foreground">
                📍 {match.venue}
              </div>
            </div>
          );
        })}

        {/* Auto-refresh indicator */}
        <div className="text-xs text-center text-muted-foreground pt-2">
          Auto-refreshing every 3 seconds... ({refreshKey} updates)
        </div>
      </CardContent>
    </Card>
  );
}
