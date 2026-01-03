import { useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface CommentaryItem {
  o: number; // over number
  b: number; // ball number
  r: number; // runs scored
  w: number; // wickets (0 or 1)
  t: string; // commentary text
  batsmanStriker: {
    id: string;
    name: string;
  };
  bowler: {
    id: string;
    name: string;
  };
}

interface CommentarySectionProps {
  matchId: string;
  isLive?: boolean;
}

export default function CommentarySection({ matchId, isLive = false }: CommentarySectionProps) {
  const { data, isLoading, refetch } = trpc.cricket.getMatchCommentary.useQuery(
    { matchId },
    {
      enabled: !!matchId,
      refetchInterval: isLive ? 30000 : false, // Refetch every 30 seconds for live matches
    }
  );

  // Auto-refresh for live matches
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      refetch();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [isLive, refetch]);

  if (isLoading) {
    return (
      <Card className="p-8">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading commentary...</span>
        </div>
      </Card>
    );
  }

  if (!data || !data.commentary || data.commentary.length === 0) {
    return (
      <Card className="p-8">
        <div className="text-center text-muted-foreground">
          <p>No commentary available for this match yet.</p>
          {isLive && <p className="text-sm mt-2">Commentary will appear once the match starts.</p>}
        </div>
      </Card>
    );
  }

  const commentary = data.commentary as CommentaryItem[];

  // Group commentary by overs
  const groupedByOvers = commentary.reduce((acc, item) => {
    const overKey = `Over ${item.o}`;
    if (!acc[overKey]) {
      acc[overKey] = [];
    }
    acc[overKey].push(item);
    return acc;
  }, {} as Record<string, CommentaryItem[]>);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ball-by-Ball Commentary</h2>
        {isLive && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span>Live • Auto-updating every 30s</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {Object.entries(groupedByOvers)
          .reverse() // Show latest overs first
          .map(([over, balls]) => (
            <Card key={over} className="p-4">
              <h3 className="font-semibold text-lg mb-3 pb-2 border-b">{over}</h3>
              <div className="space-y-3">
                {balls.map((ball, index) => (
                  <div
                    key={`${ball.o}-${ball.b}-${index}`}
                    className="flex gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    {/* Ball number badge */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          ball.w > 0
                            ? "bg-red-500 text-white"
                            : ball.r >= 4
                            ? "bg-green-500 text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {ball.r > 0 ? ball.r : "•"}
                      </div>
                    </div>

                    {/* Commentary text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1">
                        <span className="font-mono text-sm text-muted-foreground">
                          {ball.o}.{ball.b}
                        </span>
                        {ball.w > 0 && (
                          <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                            WICKET
                          </span>
                        )}
                        {ball.r === 4 && (
                          <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded">
                            FOUR
                          </span>
                        )}
                        {ball.r === 6 && (
                          <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded">
                            SIX
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed">{ball.t}</p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span>
                          <span className="font-medium">Batsman:</span> {ball.batsmanStriker.name}
                        </span>
                        <span>
                          <span className="font-medium">Bowler:</span> {ball.bowler.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
