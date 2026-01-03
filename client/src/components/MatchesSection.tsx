import { useState, useEffect } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Radio, Calendar, CheckCircle, MapPin, Clock } from "lucide-react";

type Match = {
  id: number;
  team1: string;
  team2: string;
  team1Logo: string | null;
  team2Logo: string | null;
  venue: string;
  matchDate: Date;
  matchTime: string;
  matchType: string;
  status: "upcoming" | "live" | "completed";
  score: string | null;
};

export default function MatchesSection() {
  const [refreshKey, setRefreshKey] = useState(0);

  const { data: matches, isLoading } = trpc.fantasy.getMatches.useQuery();

  // Auto-refresh every 3 seconds for live matches
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

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  // Separate matches by status
  const liveMatches = matches?.filter((m) => m.status === "live") || [];
  const upcomingMatches = matches?.filter((m) => m.status === "upcoming") || [];
  const completedMatches = matches?.filter((m) => m.status === "completed") || [];

  const parseScore = (scoreStr: string | null) => {
    if (!scoreStr) return null;
    try {
      const scoreArray = JSON.parse(scoreStr);
      if (!Array.isArray(scoreArray) || scoreArray.length === 0) return null;
      
      // Format: [{r: 120, w: 8, o: 20, inning: "Team 1 Inning 1"}, ...]
      const team1 = scoreArray[0];
      const team2 = scoreArray[1];
      
      return {
        team1Score: team1 ? `${team1.r}/${team1.w} (${team1.o})` : "N/A",
        team2Score: team2 ? `${team2.r}/${team2.w} (${team2.o})` : "N/A",
        status: null // Status is in match.status field from API
      };
    } catch {
      return null;
    }
  };

  const formatToIST = (date: Date, time: string) => {
    try {
      const matchDate = new Date(date);
      const istDate = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      }).format(matchDate);
      return `${istDate} IST`;
    } catch {
      return `${new Date(date).toLocaleDateString()} ${time} IST`;
    }
  };

  const MatchCard = ({ match, showLiveBadge = false }: { match: Match; showLiveBadge?: boolean }) => {
    const scoreData = parseScore(match.score);

    return (
      <Card className={showLiveBadge ? "border-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20" : ""}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{match.matchType}</Badge>
            {showLiveBadge && (
              <Badge variant="destructive" className="animate-pulse">
                <Radio className="h-3 w-3 mr-1" />
                LIVE
              </Badge>
            )}
            {match.status === "completed" && (
              <Badge variant="secondary">
                <CheckCircle className="h-3 w-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Team Scores */}
          <div className="space-y-2">
            {match.status === "upcoming" ? (
              <div className="text-center py-4">
                <p className="text-lg font-semibold text-muted-foreground">Match Yet to Start</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    {match.team1Logo && (
                      <img src={match.team1Logo} alt={match.team1} className="w-8 h-8 object-contain" />
                    )}
                    <span className="font-semibold text-lg">{match.team1}</span>
                  </div>
                  <span className="text-muted-foreground">vs</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-lg">{match.team2}</span>
                    {match.team2Logo && (
                      <img src={match.team2Logo} alt={match.team2} className="w-8 h-8 object-contain" />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {match.team1Logo && (
                      <img src={match.team1Logo} alt={match.team1} className="w-8 h-8 object-contain" />
                    )}
                    <span className="font-semibold text-lg">{match.team1}</span>
                  </div>
                  <span className="font-bold text-xl">
                    {scoreData?.team1Score || "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {match.team2Logo && (
                      <img src={match.team2Logo} alt={match.team2} className="w-8 h-8 object-contain" />
                    )}
                    <span className="font-semibold text-lg">{match.team2}</span>
                  </div>
                  <span className="font-bold text-xl">
                    {scoreData?.team2Score || "N/A"}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Match Status - Show API status for completed matches */}
          {match.status === "completed" && scoreData && (
            <div className="pt-3 border-t">
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Match Completed</p>
            </div>
          )}

          {/* Match Details */}
          <div className="space-y-1 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{match.venue}</span>
            </div>
            {match.status === "upcoming" && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{formatToIST(match.matchDate, match.matchTime)}</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          {match.status !== "completed" && (
            <Link href={`/team-builder/${match.id}`}>
              <Button className="w-full mt-4" variant={showLiveBadge ? "destructive" : "default"}>
                {showLiveBadge ? "Join Live Match" : "Create Team"}
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container py-12 space-y-12">
      {/* Live Matches */}
      {liveMatches.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Radio className="h-6 w-6 text-red-500 animate-pulse" />
            <h2 className="text-3xl font-bold">Live Matches</h2>
            <Badge variant="destructive">LIVE</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} showLiveBadge />
            ))}
          </div>
          <div className="text-xs text-center text-muted-foreground mt-4">
            Auto-refreshing every 3 seconds...
          </div>
        </section>
      )}

      {/* Upcoming Matches */}
      {upcomingMatches.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-blue-500" />
            <h2 className="text-3xl font-bold">Upcoming Matches</h2>
            <Badge variant="outline">IST</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      )}

      {/* Completed Matches */}
      {completedMatches.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-3xl font-bold">Completed Matches</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      )}

      {/* No Matches */}
      {!liveMatches.length && !upcomingMatches.length && !completedMatches.length && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No matches available at the moment</p>
        </div>
      )}
    </div>
  );
}
