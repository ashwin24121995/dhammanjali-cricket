import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Trophy, Users, TrendingUp, Shield, Heart, Award, Target, BookOpen, Zap, CheckCircle, Star, Brain, Calendar, MapPin, Clock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { PROMO_WIDGET_ENABLED } from "@/components/PromoWidget";

export default function Home() {
  const { isAuthenticated } = useAuth();
  
  // Ensure PromoWidget is not tree-shaken
  if (PROMO_WIDGET_ENABLED) {
    // Silent check
  }

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
                  <span className="block transform skew-x-6">KEMETION</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                SKILL-BASED<br />
                CRICKET GAMING
                <span className="block text-yellow-400 mt-2">— 100% FREE</span>
              </h1>

              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                Master the art of cricket strategy without spending a single rupee. Build your dream team, compete with thousands of players, and climb the leaderboard through pure skill and cricket knowledge.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                  <div className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-none transform hover:scale-105 transition-transform cursor-pointer shadow-lg">
                    {isAuthenticated ? "GO TO DASHBOARD" : "START PLAYING FREE"}
                  </div>
                </Link>
                <Link href="/how-to-play">
                  <div className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white border-2 border-white font-bold px-8 py-6 text-lg rounded-none transform hover:scale-105 transition-transform cursor-pointer">
                    LEARN HOW TO PLAY
                  </div>
                </Link>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-red-600">18+</span>
                  </div>
                  <span className="text-sm font-bold">ADULTS ONLY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <span className="text-sm font-bold">FAIR PLAY<br />CERTIFIED</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-8 h-8 text-yellow-400" />
                  <span className="text-sm font-bold">NO MONEY<br />INVOLVED</span>
                </div>
              </div>
            </div>

            {/* Right: Cricket Player Image with Diagonal Cut */}
            <div className="relative">
              {/* Shadow layers for depth */}
              <div className="absolute inset-0 bg-black/40 blur-3xl transform translate-x-8 translate-y-8"></div>
              <div className="relative overflow-hidden shadow-2xl" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}>
                <img 
                  src="/cricket-hero-1.jpg" 
                  alt="Cricket Player Batting" 
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-red-600/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Diagonal Cut */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white transform skew-y-2 origin-bottom-left"></div>
      </section>

      {/* Upcoming Matches Section */}
      <UpcomingMatchesSection />

      {/* Feature Highlights */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              FEATURE <span className="text-red-600">HIGHLIGHTS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to become a fantasy cricket champion, completely free and designed for pure skill-based competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Daily Contests */}
            <Card className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black overflow-hidden group hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-black mb-4">DAILY CONTESTS</h3>
                <p className="text-black/90 font-semibold leading-relaxed">
                  Participate in multiple contests every day across all cricket formats - T20, ODI, and Test matches. New challenges await you with every sunrise, giving you unlimited opportunities to showcase your cricket knowledge and strategic thinking.
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
                <p className="text-white/90 font-semibold leading-relaxed">
                  Build your dream cricket team from real international and domestic players. Manage a virtual budget, balance your squad with batsmen, bowlers, all-rounders, and wicket-keepers. Every selection matters - choose wisely based on form, pitch conditions, and match-ups.
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
                <p className="text-white/90 font-semibold leading-relaxed">
                  Watch your points accumulate in real-time as the match progresses. Every run, wicket, catch, and milestone by your selected players directly impacts your score. Experience the thrill of live cricket with instant feedback on your strategic decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-100 to-yellow-100 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-red-100 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              HOW IT <span className="text-red-600">WORKS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes and begin your journey to becoming a fantasy cricket master
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-black mb-3">REGISTER FREE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create your account in seconds. No credit card required, no hidden fees, no subscriptions. Just your email, age verification (18+), and you're ready to play.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-black mb-3">SELECT MATCH</h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse upcoming cricket matches from international tournaments, IPL, domestic leagues, and more. Choose the match you want to create your fantasy team for.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-black text-black">3</span>
              </div>
              <h3 className="text-2xl font-black mb-3">BUILD TEAM</h3>
              <p className="text-muted-foreground leading-relaxed">
                Select 11 players within your virtual budget. Pick a captain (2x points) and vice-captain (1.5x points). Balance your team across batting, bowling, and fielding skills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl font-black text-white">4</span>
              </div>
              <h3 className="text-2xl font-black mb-3">COMPETE & WIN</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch the match live and track your points in real-time. Climb the leaderboard and earn bragging rights. No money prizes - just pure glory and recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">
                WHY CHOOSE<br />
                <span className="text-yellow-400">KEMETION?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm border-l-4 border-yellow-400 rounded">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">100% Free to Play Forever</h3>
                    <p className="text-white/80 leading-relaxed">
                      We believe fantasy cricket should be accessible to everyone. No entry fees, no premium memberships, no in-app purchases. Our platform is backed by investors who share our vision of cricket education and entertainment without financial barriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm border-l-4 border-blue-600 rounded">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pure Skill-Based Competition</h3>
                    <p className="text-white/80 leading-relaxed">
                      Success on KEMETION comes from cricket knowledge, strategic thinking, and analytical skills. Study player form, understand pitch conditions, analyze team compositions, and make informed decisions to climb the leaderboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm border-l-4 border-red-600 rounded">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safe & Responsible Gaming</h3>
                    <p className="text-white/80 leading-relaxed">
                      Strictly for users 18 years and above. We promote responsible gaming with no real money involved. Unavailable in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim due to government compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm border-l-4 border-green-600 rounded">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Learn & Improve</h3>
                    <p className="text-white/80 leading-relaxed">
                      Access detailed guides, player statistics, match analysis, and expert tips. Our platform is designed to help you understand cricket better, improve your strategic thinking, and become a more knowledgeable cricket fan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-yellow-400 to-yellow-500 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="w-12 h-12 text-black" />
                    <h3 className="text-2xl font-black text-black">OUR MISSION</h3>
                  </div>
                  <p className="text-black/90 text-lg leading-relaxed">
                    To democratize fantasy cricket and make it accessible to every cricket enthusiast in India, regardless of their financial situation. We aim to create a platform where skill, knowledge, and passion for cricket are the only currencies that matter.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Star className="w-12 h-12 text-yellow-400" />
                    <h3 className="text-2xl font-black text-white">EDUCATIONAL FOCUS</h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    KEMETION is more than just a game - it's a learning platform. Understand cricket strategies, player roles, match dynamics, and decision-making under pressure. Apply these skills to become a more informed cricket fan and analyst.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-12 h-12 text-yellow-400" />
                    <h3 className="text-2xl font-black text-white">RECOGNITION & GLORY</h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    While we don't offer cash prizes, we celebrate our top performers with leaderboard rankings, achievement badges, and community recognition. Build your reputation as a skilled fantasy cricket strategist and earn respect from fellow cricket enthusiasts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            READY TO START YOUR<br />CRICKET JOURNEY?
          </h2>
          <p className="text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of cricket enthusiasts who are learning, competing, and having fun without spending a single rupee
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            No credit card required • No hidden fees • No money involved • Just pure cricket strategy
          </p>
          <Link href="/register">
            <div className="inline-flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 font-black px-12 py-8 text-2xl rounded-none transform hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              REGISTER NOW - IT'S FREE FOREVER!
            </div>
          </Link>
          <p className="mt-6 text-sm text-white/70">
            By registering, you confirm you are 18+ years old and agree to our Terms & Conditions
          </p>
        </div>
      </section>
    </div>
  );
}

/**
 * Upcoming Matches Section Component
 * Displays live cricket matches with automatic refresh
 */
function UpcomingMatchesSection() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = trpc.cricket.getCurrentMatches.useQuery(
    { status: "all", limit: 20 }, // Fetch more to ensure we have enough after filtering
    { refetchInterval: 30000 } // Refresh every 30 seconds
  );

  // Show live and upcoming matches first, but if none available, show recent completed matches
  const liveAndUpcoming = data?.matches?.filter(match => match.status !== 'completed') || [];
  
  // If no live/upcoming matches, show recent completed matches (last 48 hours)
  const recentCompleted = data?.matches?.filter((match) => {
    if (match.status !== 'completed') return false;
    const matchDate = new Date(match.matchDate);
    const now = new Date();
    const hoursDiff = (now.getTime() - matchDate.getTime()) / (1000 * 60 * 60);
    return hoursDiff <= 48; // Show matches from last 48 hours
  }) || [];
  
  const activeMatches = (liveAndUpcoming.length > 0 ? liveAndUpcoming : recentCompleted).slice(0, 6);

  // Manual refresh every 30 seconds for live matches
  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: [['cricket', 'getCurrentMatches']] });
    }, 30000);

    return () => clearInterval(interval);
  }, [queryClient]);

  const formatMatchDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('en-IN', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatMatchTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-600 text-white';
      case 'upcoming':
        return 'bg-blue-600 text-white';
      case 'completed':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return '🔴 LIVE';
      case 'upcoming':
        return 'UPCOMING';
      case 'completed':
        return 'COMPLETED';
      default:
        return status.toUpperCase();
    }
  };

  // Determine section title based on what we're showing
  const sectionTitle = liveAndUpcoming.length > 0 ? "UPCOMING" : "LIVE & RECENT";
  const sectionSubtitle = liveAndUpcoming.length > 0 
    ? "Join live matches and build your dream team to compete with thousands of cricket fans"
    : "Recent matches from the last 48 hours - New matches coming soon!";

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-400/20 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-white mb-4">
            {sectionTitle} <span className="text-yellow-400">MATCHES</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {isLoading && (
          <div className="text-center text-white text-xl">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="mt-4">Loading matches...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-white bg-red-600/50 p-6 rounded-lg">
            <p className="text-xl font-bold">Failed to load matches</p>
            <p className="mt-2">Please try again later</p>
          </div>
        )}

        {activeMatches.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeMatches.map((match) => (
              <Card key={match.id} className="bg-white hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Match Status Badge */}
                  <div className={`${getStatusColor(match.status)} px-6 py-3 text-base font-black text-center tracking-wide`}>
                    {getStatusText(match.status)}
                  </div>

                  <div className="p-6">
                    {/* Match Type */}
                    <div className="inline-block bg-yellow-400 text-black px-3 py-1 text-xs font-bold mb-4">
                      {match.matchType}
                    </div>

                    {/* Teams with Live Scores */}
                    <div className="space-y-3 mb-4">
                      {match.status === 'live' && match.score ? (
                        <>
                          {/* Live Score Display */}
                          <div className="bg-red-50 border-2 border-red-600 rounded p-3 mb-2">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-base font-bold text-gray-900">{match.team1}</span>
                              <span className="text-lg font-black text-red-600">
                                {match.score[0]?.r}/{match.score[0]?.w} ({match.score[0]?.o})
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-base font-bold text-gray-900">{match.team2}</span>
                              <span className="text-lg font-black text-red-600">
                                {match.score[1]?.r}/{match.score[1]?.w} ({match.score[1]?.o})
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Upcoming/Completed Match - No Scores */}
                          <div className="text-center space-y-2">
                            <div className="text-xl font-black text-gray-900">{match.team1}</div>
                            <div className="text-lg font-bold text-blue-600">VS</div>
                            <div className="text-xl font-black text-gray-900">{match.team2}</div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Match Details */}
                    <div className="space-y-2 text-sm text-gray-600 border-t pt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span className="truncate">{match.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-red-600" />
                        <span>{formatMatchDate(match.matchDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span>{match.matchTime}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/matches/${match.id}`}>
                      <div className="mt-4 w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-4 text-center cursor-pointer transition-all">
                        {match.status === 'live' ? 'VIEW LIVE MATCH' : 'CREATE TEAM'}
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeMatches.length === 0 && !isLoading && (
          <div className="text-center text-white bg-white/10 p-12 rounded-lg">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <p className="text-2xl font-bold mb-2">No Matches Available</p>
            <p className="text-lg">Check back soon for upcoming cricket matches!</p>
          </div>
        )}

        {/* View All Matches Link */}
        {activeMatches.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/matches">
              <div className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg cursor-pointer transition-colors">
                VIEW ALL MATCHES
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
