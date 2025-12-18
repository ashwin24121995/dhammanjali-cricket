import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Trophy, Users, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

export default function Matches() {
  const { data: matches, isLoading } = trpc.fantasy.getMatches.useQuery();

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
              UPCOMING MATCHES
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              SELECT YOUR
              <span className="block text-yellow-400">MATCH</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose from upcoming IPL matches and create your dream team to compete for the top spot!
            </p>
          </div>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="container py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-yellow-400 animate-spin" />
          </div>
        ) : matches && matches.length > 0 ? (
          <div className="grid gap-6">
            {matches.map((match) => (
              <Card 
                key={match.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Teams */}
                    <div className="flex items-center gap-8 flex-1">
                      {/* Team 1 */}
                      <div className="flex flex-col items-center text-center flex-1">
                        <div className="text-6xl mb-3">🏏</div>
                        <h3 className="text-xl font-bold text-white">{match.team1}</h3>
                      </div>

                      {/* VS Badge */}
                      <div className="flex flex-col items-center">
                        <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white font-black text-2xl px-6 py-3 rounded-lg shadow-lg">
                          VS
                        </div>
                        <div className="mt-2 text-yellow-400 font-bold text-sm">{match.matchType}</div>
                      </div>

                      {/* Team 2 */}
                      <div className="flex flex-col items-center text-center flex-1">
                        <div className="text-6xl mb-3">🏏</div>
                        <h3 className="text-xl font-bold text-white">{match.team2}</h3>
                      </div>
                    </div>

                    {/* Match Details */}
                    <div className="flex flex-col gap-3 min-w-[280px]">
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span className="text-sm">{match.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm">
                          {new Date(match.matchDate).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })} • {match.matchTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Trophy className="w-5 h-5 text-red-400" />
                        <span className="text-sm capitalize">{match.status}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-col gap-2">
                      <Link href={`/team-builder/${match.id}`}>
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black px-8 py-6 text-lg rounded-none shadow-lg">
                          <Users className="w-5 h-5 mr-2" />
                          CREATE TEAM
                        </Button>
                      </Link>
                      <p className="text-xs text-gray-400 text-center">Build your 11-player squad</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 group-hover:h-3 transition-all duration-300" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Trophy className="w-20 h-20 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Upcoming Matches</h3>
            <p className="text-gray-400">Check back soon for new matches!</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 border-t-4 border-yellow-400">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">100</div>
              <div className="text-white font-bold">CREDITS</div>
              <div className="text-gray-400 text-sm mt-1">Build your team within budget</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">11</div>
              <div className="text-white font-bold">PLAYERS</div>
              <div className="text-gray-400 text-sm mt-1">Select your dream squad</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">100%</div>
              <div className="text-white font-bold">FREE</div>
              <div className="text-gray-400 text-sm mt-1">No entry fees, pure skill</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
