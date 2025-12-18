import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Trophy, Users, TrendingUp, Shield, Heart, Award } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Diagonal Cuts */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-500">
        {/* Diagonal Yellow Stripe - Top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 transform -skew-y-2 origin-top-left z-10"></div>
        
        {/* Main Hero Content */}
        <div className="container relative z-20 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-6">
              <div className="inline-block">
                <div className="bg-yellow-400 text-black px-6 py-2 font-bold text-lg transform -skew-x-6 inline-block">
                  <span className="block transform skew-x-6">DHAMMANJALI</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                SKILL-BASED<br />
                CRICKET GAMING
                <span className="block text-yellow-400 mt-2">— 100% FREE</span>
              </h1>

              <p className="text-xl text-white/90 max-w-lg">
                Learn Cricket, Play Smart - Free Fantasy Cricket for Everyone
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                  <div className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-none transform hover:scale-105 transition-transform cursor-pointer">
                    {isAuthenticated ? "GO TO DASHBOARD" : "REGISTER NOW"}
                  </div>
                </Link>
                <Link href="/login">
                  <div className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white border-2 border-white font-bold px-8 py-6 text-lg rounded-none transform hover:scale-105 transition-transform cursor-pointer">
                    LOGIN
                  </div>
                </Link>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-red-600">18+</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8" />
                  <span className="font-bold">Fair Play</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8" />
                  <span className="font-bold">No Money</span>
                </div>
              </div>
            </div>

            {/* Right: Cricket Player Image with Diagonal Cut */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/cricket-hero-1.jpg" 
                  alt="Cricket Player Action" 
                  className="w-full h-[500px] object-cover shadow-2xl"
                  style={{
                    clipPath: "polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)"
                  }}
                />
              </div>
              
              {/* Diagonal Red Accent Stripe */}
              <div className="absolute -right-8 top-20 w-32 h-96 bg-red-700 transform rotate-12 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Cut */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white transform -skew-y-2 origin-bottom-left"></div>
      </section>

      {/* Statistics Dashboard Preview */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 py-16 relative -mt-16">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Stats Dashboard */}
            <Card className="bg-white border-4 border-yellow-400 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black">STATISTICS DASHBOARD</h3>
                  <div className="bg-red-600 text-white px-4 py-1 font-bold text-sm">PREVIEW</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Track your performance, analyze your decisions, and improve your cricket knowledge with detailed statistics
                </p>
                <div className="space-y-3">
                  {[
                    { name: "Total Contests", value: "156", trend: "+12%" },
                    { name: "Teams Created", value: "89", trend: "+8%" },
                    { name: "Leaderboard Rank", value: "#42", trend: "↑5" },
                    { name: "Win Rate", value: "67%", trend: "+3%" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 border-l-4 border-blue-600">
                      <span className="font-semibold">{stat.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold">{stat.value}</span>
                        <span className="text-sm text-green-600 font-semibold">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Right: Top Players Today */}
            <Card className="bg-white border-4 border-yellow-400 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black">TOP PLAYERS TODAY</h3>
                  <Link href="/leaderboard">
                    <Button variant="link" className="text-blue-600 font-bold">VIEW ALL →</Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Ashish Rout", score: 3666 },
                    { rank: 2, name: "Mohd Musad", score: 3450 },
                    { rank: 3, name: "Deepak Buddu", score: 3328 },
                    { rank: 4, name: "Nitin Ghan", score: 2286 },
                    { rank: 5, name: "Shantosh Bansal", score: 1956 },
                    { rank: 6, name: "Om Verma", score: 2764 },
                    { rank: 7, name: "Navnit Kale", score: 2500 },
                  ].map((player) => (
                    <div key={player.rank} className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1 ? "bg-yellow-400 text-black" :
                          player.rank === 2 ? "bg-gray-300 text-black" :
                          player.rank === 3 ? "bg-orange-400 text-white" :
                          "bg-gray-200 text-gray-700"
                        }`}>
                          {player.rank}
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {player.name.charAt(0)}
                        </div>
                        <span className="font-semibold">{player.name}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">{player.score}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">FEATURE HIGHLIGHTS</h2>
            <p className="text-xl text-muted-foreground">Everything you need to master fantasy cricket</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Daily Contests */}
            <Card className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black overflow-hidden group hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-black mb-4">DAILY CONTESTS</h3>
                <p className="text-black/80 font-semibold">
                  Start your contest today and enjoy your daily contest for today
                </p>
              </CardContent>
            </Card>

            {/* Create Your Team */}
            <Card className="border-4 border-blue-600 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden group hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-black mb-4">CREATE YOUR TEAM</h3>
                <p className="text-white/90 font-semibold">
                  Create your cricket team and download your team
                </p>
              </CardContent>
            </Card>

            {/* Live Scoring */}
            <Card className="border-4 border-red-600 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden group hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-black mb-4">LIVE SCORING</h3>
                <p className="text-white/90 font-semibold">
                  Live scoring with time, scoring and scoring with your money
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Diagonal Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-red-100 to-yellow-100 transform skew-x-12 -mr-32"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">
                WHY CHOOSE<br />
                <span className="text-red-600">DHAMMANJALI?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-yellow-400">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">100% Free to Play</h3>
                    <p className="text-muted-foreground">
                      No entry fees, no hidden charges, no financial commitments. Just pure cricket strategy and fun.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-blue-600">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Educational Focus</h3>
                    <p className="text-muted-foreground">
                      Learn cricket strategy, player statistics, and match analysis through hands-on experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-red-600">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safe & Responsible</h3>
                    <p className="text-muted-foreground">
                      Strict age verification (18+) and compliance with all state regulations for responsible gaming.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/cricket-hero-2.jpg" 
                alt="Cricket Action" 
                className="w-full h-[600px] object-cover shadow-2xl"
                style={{
                  clipPath: "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            READY TO START YOUR<br />CRICKET JOURNEY?
          </h2>
          <p className="text-2xl mb-8 text-white/90">
            Join thousands of cricket enthusiasts learning and competing for free
          </p>
          <Link href="/register">
            <div className="inline-flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 font-black px-12 py-8 text-2xl rounded-none transform hover:scale-105 transition-transform cursor-pointer">
              REGISTER NOW - IT'S FREE!
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
