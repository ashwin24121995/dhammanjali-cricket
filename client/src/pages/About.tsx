import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-20rem)] py-12">
      <div className="container max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Dhammanjali</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's first completely free fantasy cricket platform dedicated to education, entertainment, and responsible gaming
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 border-2">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              At Dhammanjali India Private Limited, we believe that fantasy cricket should be accessible to everyone without financial barriers. Our mission is to provide a platform where cricket enthusiasts can learn, compete, and enjoy the strategic aspects of the game without any monetary involvement.
            </p>
            <p className="text-lg leading-relaxed">
              We are backed by investors who share our vision of fantasy education - creating an environment where users can develop their cricket knowledge, analytical skills, and strategic thinking without the pressure of real money transactions.
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Free for Everyone</h3>
                    <p className="text-muted-foreground">
                      We believe in democratizing fantasy cricket. No entry fees, no hidden charges, no financial commitments - just pure cricket strategy and fun.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Educational Focus</h3>
                    <p className="text-muted-foreground">
                      Our platform is designed to help users understand cricket better - from player statistics to match conditions, team composition to strategic decision-making.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Responsible Gaming</h3>
                    <p className="text-muted-foreground">
                      We enforce strict age verification (18+) and comply with all state regulations. Our platform promotes healthy competition without financial risk.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Building</h3>
                    <p className="text-muted-foreground">
                      We foster a community of cricket lovers who can compete, learn from each other, and celebrate the sport together through our leaderboard system.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Information */}
        <Card className="border-2 mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Company Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company Name</p>
                  <p className="font-semibold">DHAMMANJALI INDIA PRIVATE LIMITED</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">CEO & Founder</p>
                  <p className="font-semibold">Vinay Nagvanshi</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">CIN</p>
                  <p className="font-semibold">U15490UP2020PTC135324</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">PAN</p>
                  <p className="font-semibold">AANCM8535G</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-1">Head Office</p>
                <p className="font-semibold">
                  1ST FLOOR, 154 KATKA JHUNSI, THANA- JHUNSI DISTRICT PRAYAGRAJ, NA, JHUNSI, Allahabad- 211019, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Free to Play */}
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Why Free to Play?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Unlike traditional fantasy cricket platforms that involve real money transactions, Dhammanjali is built on the principle that learning and entertainment should not come with financial pressure. We are pre-backed by investors who believe in fantasy education and want users to experience the thrill of cricket strategy without any monetary risk.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our platform offers all the features of a premium fantasy cricket experience - team building, live match tracking, leaderboards, and competition - but without entry fees or cash prizes. Winners are recognized on our leaderboard, earning respect and recognition from the community rather than money.
            </p>
            <p className="text-lg leading-relaxed">
              This approach allows us to focus on what matters most: helping cricket fans develop their analytical skills, understand player performance metrics, and enjoy the strategic depth of the sport in a safe, responsible, and completely free environment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
