import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Calendar, Trophy, TrendingUp, Award } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function Profile() {
  const { user } = useAuth();
  const { data: stats } = trpc.fantasy.getMyStats.useQuery();
  const { data: teams } = trpc.fantasy.getMyTeams.useQuery();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4">Please Login</h2>
          <p className="text-gray-400 mb-6">You need to be logged in to view your profile.</p>
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
              GO TO LOGIN
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 py-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="container relative">
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-black px-6 py-2 font-black text-sm mb-4">
              YOUR PROFILE
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              {user.name}
            </h1>
            <p className="text-xl text-white/90">
              Fantasy Cricket Enthusiast
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - User Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-black text-white">{user.name.charAt(0)}</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-1">{user.name}</h2>
                <p className="text-gray-400 text-sm">Fantasy Cricket Player</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">{user.email}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="text-sm">{user.state}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">
                    {new Date(user.dateOfBirth).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="bg-gradient-to-br from-yellow-600 to-yellow-700 border-0 p-6">
              <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Your Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Total Points</span>
                  <span className="text-2xl font-black text-white">{stats?.totalPoints || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Teams Created</span>
                  <span className="text-2xl font-black text-white">{stats?.teamsCreated || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Contests Joined</span>
                  <span className="text-2xl font-black text-white">{stats?.contestsJoined || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Contests Won</span>
                  <span className="text-2xl font-black text-white">{stats?.contestsWon || 0}</span>
                </div>
                {stats?.bestRank && (
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Best Rank</span>
                    <span className="text-2xl font-black text-white">#{stats.bestRank}</span>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column - Teams */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 p-6">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <Award className="w-7 h-7 text-yellow-400" />
                My Teams
              </h3>

              {teams && teams.length > 0 ? (
                <div className="space-y-4">
                  {teams.map((team) => (
                    <Card 
                      key={team.id}
                      className="bg-gray-700/50 border border-gray-600 p-4 hover:border-yellow-400 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{team.teamName}</h4>
                          <p className="text-sm text-gray-400">Match ID: {team.matchId}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-yellow-400">{team.points}</div>
                          <div className="text-xs text-gray-400">points</div>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Credits Used:</span>
                          <span className="text-white font-bold ml-1">{team.creditsUsed}/100</span>
                        </div>
                        {team.rank && (
                          <div>
                            <span className="text-gray-400">Rank:</span>
                            <span className="text-white font-bold ml-1">#{team.rank}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        Created: {new Date(team.createdAt).toLocaleDateString('en-IN')}
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">No Teams Yet</h4>
                  <p className="text-gray-400 mb-6">
                    Start creating your dream teams and compete in contests!
                  </p>
                  <Link href="/matches">
                    <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black">
                      CREATE YOUR FIRST TEAM
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
