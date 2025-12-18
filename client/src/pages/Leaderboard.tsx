import { Card } from "@/components/ui/card";
import { Trophy, Medal, TrendingUp, Award, Crown, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/hooks/useAuth";

export default function Leaderboard() {
  const { data: leaderboard, isLoading } = trpc.fantasy.getLeaderboard.useQuery({ limit: 10 });
  const { data: myStats } = trpc.fantasy.getMyStats.useQuery();
  const { user } = useAuth();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-8 h-8 text-yellow-400" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Medal className="w-8 h-8 text-amber-700" />;
      default:
        return <div className="w-8 h-8 flex items-center justify-center text-xl font-black text-gray-400">{rank}</div>;
    }
  };

  const calculateWinRate = (won: number, joined: number) => {
    if (joined === 0) return 0;
    return Math.round((won / joined) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 py-12">
        <div className="container">
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-black px-6 py-2 font-black text-sm mb-4">
              TOP PERFORMERS
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              GLOBAL LEADERBOARD
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Compete with the best fantasy cricket players across India
            </p>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="container py-12">
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
          <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 p-4">
            <h2 className="text-2xl font-black text-white text-center">TOP 10 PLAYERS</h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-yellow-400 animate-spin" />
            </div>
          ) : leaderboard && leaderboard.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-4 text-gray-400 font-bold text-sm">RANK</th>
                    <th className="text-left p-4 text-gray-400 font-bold text-sm">PLAYER</th>
                    <th className="text-center p-4 text-gray-400 font-bold text-sm">POINTS</th>
                    <th className="text-center p-4 text-gray-400 font-bold text-sm">TEAMS</th>
                    <th className="text-center p-4 text-gray-400 font-bold text-sm">WIN RATE</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((player, index) => {
                    const rank = index + 1;
                    const winRate = calculateWinRate(player.contestsWon, player.contestsJoined);
                    return (
                      <tr 
                        key={player.id}
                        className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            {getRankIcon(rank)}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                              {player.username.charAt(0)}
                            </div>
                            <span className="text-white font-bold">{player.username}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-yellow-400 font-black text-lg">{player.totalPoints.toLocaleString()}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-white font-bold">{player.teamsCreated}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-green-400 font-bold">{winRate}%</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20">
              <Trophy className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Rankings Yet</h3>
              <p className="text-gray-400">Be the first to create a team!</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
