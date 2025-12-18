import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Trophy, Users, Shield, BookOpen, Target, Award } from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              SKILL-BASED CRICKET GAMING
              <span className="block text-accent mt-2">100% FREE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
              Learn Cricket, Play Smart - Free Fantasy Cricket for Everyone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold">
                      Register Now
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 font-bold">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
            
            {/* Badges */}
            <div className="flex justify-center gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                <span className="text-3xl font-black">18+</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span className="font-bold">Fair Play</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2">
                <Award className="w-6 h-6" />
                <span className="font-bold">No Money</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Dhammanjali?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience fantasy cricket the right way - educational, entertaining, and completely free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Free to Play</CardTitle>
                <CardDescription className="text-base">
                  No deposits, no payments, no hidden costs. Completely free fantasy cricket platform for everyone.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Learn & Improve</CardTitle>
                <CardDescription className="text-base">
                  Educational platform designed to help you understand cricket strategy and player performance analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Community & Leaderboard</CardTitle>
                <CardDescription className="text-base">
                  Compete with friends and cricket enthusiasts. See your name on the leaderboard and earn recognition.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Safe & Secure</CardTitle>
                <CardDescription className="text-base">
                  Fair play guaranteed. Age verification (18+) and state compliance ensure a responsible gaming environment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Skill-Based Gaming</CardTitle>
                <CardDescription className="text-base">
                  Test your cricket knowledge and strategic thinking. Build winning teams based on player form and match conditions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Entertainment Only</CardTitle>
                <CardDescription className="text-base">
                  No real money, no financial pressure. Play for fun, learning, and the love of cricket.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Get started in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Register", desc: "Create your free account with email verification" },
              { step: "2", title: "Select Match", desc: "Choose from upcoming cricket matches" },
              { step: "3", title: "Build Team", desc: "Pick your players within the budget" },
              { step: "4", title: "Compete", desc: "Watch live and climb the leaderboard" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-black">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-to-play">
              <Button size="lg" variant="outline" className="font-semibold">
                Learn More About How To Play
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Cricket Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of cricket enthusiasts learning and playing fantasy cricket for free
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 text-lg px-10 py-6 font-bold">
                Create Free Account
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
