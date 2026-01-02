import { Building2, MapPin, Mail, Phone, Shield, Trophy, Users, BookOpen, Heart, Target, Lightbulb, CheckCircle2, AlertCircle, Calendar, TrendingUp, Award, Lock, FileText, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-400/30 to-transparent transform -skew-y-3"></div>
        
        <div className="container relative z-10">
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold text-sm mb-6 transform -rotate-1">
            ABOUT US
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            KEMETION<br />
            <span className="text-yellow-400">PRIVATE LIMITED</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-4xl leading-relaxed">
            Revolutionizing Fantasy Cricket Education in India Through Free-to-Play, Skill-Based Gaming
          </p>
        </div>
      </section>

      {/* Who We Are - Detailed */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">Who We Are</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Kemetion Private Limited is a pioneering force in the Indian fantasy sports industry, dedicated to democratizing cricket knowledge and strategic thinking through our innovative free-to-play platform. Established in <strong>2020</strong> and headquartered in <strong>Ranchi, Jharkhand</strong>, we have embarked on a mission to transform how millions of Indians engage with cricket—not through financial speculation, but through pure skill development and educational entertainment.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Unlike traditional fantasy sports platforms that revolve around real money transactions and monetary rewards, Kemetion operates on a fundamentally different philosophy. We believe that the joy of fantasy cricket should be accessible to everyone, regardless of their financial capacity. Our platform serves as an <strong>educational tool</strong> where cricket enthusiasts can learn team management, player analysis, match strategy, and decision-making skills in a completely risk-free environment.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Backed by forward-thinking investors who share our vision of fantasy sports as an educational medium rather than a gambling alternative, we have built a sustainable business model that prioritizes user learning and engagement over monetization. Our investors believe in the power of skill-based gaming to enhance cricket literacy across India, and their support enables us to offer our platform <strong>completely free of charge</strong> to all users aged 18 and above.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-4 border-red-600 transform hover:scale-105 transition-transform">
                <Target className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-black text-gray-900 mb-3">OUR MISSION</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide every cricket enthusiast in India with a free, accessible platform to develop strategic thinking, analytical skills, and cricket knowledge through skill-based fantasy gaming, without any financial pressure or risk.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-4 border-yellow-600 transform hover:scale-105 transition-transform">
                <Lightbulb className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-2xl font-black text-gray-900 mb-3">OUR VISION</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted educational fantasy cricket platform, recognized for fostering cricket intelligence and responsible gaming practices while maintaining our commitment to being 100% free-to-play forever.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-4 border-blue-600 transform hover:scale-105 transition-transform">
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-black text-gray-900 mb-3">OUR VALUES</h3>
                <p className="text-gray-700 leading-relaxed">
                  Education over profit. Skill over chance. Accessibility over exclusivity. Transparency over ambiguity. Responsible gaming over addictive monetization. Community over competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Detailed Founding History */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">Our Story: How Kemetion Was Born</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The idea for Kemetion Private Limited emerged in <strong>2019</strong> when our founder, <strong>Vinay Nagvanshi</strong>, witnessed the growing popularity of fantasy sports in India—but also noticed a troubling trend. Most platforms were built around real money gaming, creating financial stress, addiction concerns, and legal complications for millions of users. Many cricket fans who simply wanted to test their knowledge and strategic thinking were being pushed into a monetized ecosystem that prioritized profit over education.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Vinay, a lifelong cricket enthusiast and advocate for responsible gaming, asked a simple question: <em>"Why can't fantasy cricket be purely educational and accessible to everyone, regardless of their financial situation?"</em> This question became the foundation of Kemetion.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              In <strong>2020</strong>, after months of research, planning, and securing investor backing from individuals who believed in the educational potential of fantasy sports, Kemetion Private Limited was officially incorporated. The company was registered in <strong>Ranchi, Jharkhand</strong>, with a clear mission: to build India's first completely free-to-play fantasy cricket platform focused on skill development and cricket education.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-red-600 my-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-red-600" />
                Company Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-32 font-bold text-red-600">2019</div>
                  <div className="text-gray-700">Concept development and market research phase. Vinay Nagvanshi identifies the need for a free-to-play educational fantasy cricket platform.</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-32 font-bold text-yellow-600">2020</div>
                  <div className="text-gray-700">Kemetion Private Limited officially incorporated (CIN: U47594JH2023PTC020234). Secured initial investor backing for free-to-play model.</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-32 font-bold text-blue-600">2021-2023</div>
                  <div className="text-gray-700">Platform development, legal compliance setup, and beta testing with select user groups. Refined educational features and responsible gaming policies.</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-32 font-bold text-green-600">2024-Present</div>
                  <div className="text-gray-700">Public launch and expansion. Continuous improvement of platform features, user experience, and educational content.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Detailed */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">What Makes Kemetion Different</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 flex-shrink-0" />
                <h3 className="text-2xl font-black text-gray-900">100% Free Forever</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>No entry fees, no deposits, no hidden charges, no premium memberships.</strong> Every feature, every contest, every match is completely free. We are funded by investors who believe in fantasy education, not user wallets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike other platforms that offer "free contests" but push users toward paid options, Kemetion has <strong>zero monetization features</strong>. There are no ads, no in-app purchases, no subscription tiers. Every user gets the exact same experience—completely free.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-4 border-blue-600">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <h3 className="text-2xl font-black text-gray-900">No Real Money Involved</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Winners earn recognition and leaderboard glory, not cash prizes.</strong> This eliminates financial stress, gambling concerns, and legal complications. Play for passion, pride, and skill development—not money.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By removing monetary rewards, we create a <strong>pressure-free environment</strong> where users can experiment with strategies, learn from mistakes, and enjoy cricket without the anxiety of losing money or the temptation of chasing winnings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-4 border-purple-600">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-12 h-12 text-purple-600 flex-shrink-0" />
                <h3 className="text-2xl font-black text-gray-900">Educational Focus</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform teaches <strong>player statistics, match conditions, team dynamics, pitch analysis, and strategic decision-making.</strong> Every contest is a learning opportunity to deepen your cricket knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide detailed player profiles, historical performance data, match previews, and post-match analysis to help users understand <strong>why</strong> certain strategies work. Our goal is to make every user a smarter cricket analyst.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-4 border-red-600">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-12 h-12 text-red-600 flex-shrink-0" />
                <h3 className="text-2xl font-black text-gray-900">Responsible Gaming</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Strict age verification (18+), state-based compliance, transparent rules, and zero addictive monetization tactics.</strong> We prioritize user well-being over engagement metrics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not use dark patterns, countdown timers, or psychological tricks to keep users hooked. Our platform is designed for <strong>healthy, balanced engagement</strong> where users can enjoy fantasy cricket without compulsion or addiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Platform Works - Detailed */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">How Our Platform Works</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Kemetion's fantasy cricket platform is designed to be simple, intuitive, and educational. Here's a detailed breakdown of how it works:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-black text-gray-900 mb-3">Step 1: Register for Free</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create your account by providing basic information: name, email, date of birth (must be 18+), phone number, and state of residence. We verify age and location to ensure compliance with Indian gaming laws. Registration takes less than 2 minutes and is <strong>completely free</strong>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
                <h3 className="text-xl font-black text-gray-900 mb-3">Step 2: Browse Upcoming Matches</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once logged in, you'll see a list of upcoming cricket matches across formats: <strong>IPL, T20, ODI, and Test matches</strong>. Each match card displays team names, venue, date, time, and match status. Select any match to create your fantasy team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mb-3">Step 3: Build Your Dream Team</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have a <strong>100-credit budget</strong> to select 11 players from both teams. Players are assigned credit values (7-12 credits) based on their recent form, role, and performance. You must select:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>1-4 Wicket-Keepers</strong></li>
                  <li><strong>3-6 Batsmen</strong></li>
                  <li><strong>1-4 All-Rounders</strong></li>
                  <li><strong>3-6 Bowlers</strong></li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  After selecting your 11 players, choose a <strong>Captain (2x points)</strong> and <strong>Vice-Captain (1.5x points)</strong>. This is where strategy comes in—selecting the right captain can make or break your team's performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-black text-gray-900 mb-3">Step 4: Join Contests</h3>
                <p className="text-gray-700 leading-relaxed">
                  After creating your team, join <strong>free public contests</strong> where you compete with other users. There are no entry fees, no deposits, no payments. Simply submit your team and wait for the match to begin.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-black text-gray-900 mb-3">Step 5: Track Live Scores & Points</h3>
                <p className="text-gray-700 leading-relaxed">
                  As the match progresses, your players earn points based on their real-life performance: runs scored, wickets taken, catches, strike rate, economy rate, and more. Our scoring system is <strong>transparent and detailed</strong>, so you can see exactly how each action contributes to your total score.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                <h3 className="text-xl font-black text-gray-900 mb-3">Step 6: Check Leaderboards & Rankings</h3>
                <p className="text-gray-700 leading-relaxed">
                  After the match ends, check the leaderboard to see your rank. Top performers earn <strong>recognition, badges, and leaderboard glory</strong>—not cash prizes. Climb the ranks, improve your strategy, and become a fantasy cricket expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Benefits - Detailed */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">Educational Benefits of Kemetion</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Kemetion is more than just a fantasy cricket platform—it's an <strong>educational tool</strong> that helps users develop valuable skills and deepen their cricket knowledge. Here's what you'll learn:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Player Analysis Skills
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn to evaluate players based on recent form, historical performance, match conditions, opposition strength, and role-specific metrics. Understand what makes a player valuable in different formats (T20 vs ODI vs Test).
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-600">
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Strategic Decision-Making
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Develop critical thinking by making tough choices: Who should be your captain? Should you pick more batsmen or bowlers? How do pitch conditions affect player selection? Every decision teaches you strategy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-600">
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  Cricket Statistics & Data Literacy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Understand advanced cricket statistics: strike rate, economy rate, batting average, bowling average, recent form trends, and more. Learn to interpret data and make informed decisions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-600">
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  Team Management & Budget Planning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn resource allocation by working within a 100-credit budget. Understand trade-offs: Should you spend more on star players or build a balanced team? This teaches financial planning and prioritization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-2 border-yellow-600">
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-yellow-600" />
                  Match Conditions & Context Awareness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn how pitch type (batting-friendly vs bowling-friendly), weather conditions, venue history, and match format influence player performance. Develop contextual thinking skills.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-600">
                <h3 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-orange-600" />
                  Competitive Analysis & Benchmarking
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Compare your team with top performers on the leaderboard. Analyze what strategies worked for others and refine your approach. Learn from the community and improve continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance - Detailed */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">Legal Compliance & State Restrictions</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Kemetion Private Limited operates in <strong>full compliance</strong> with Indian gaming laws and regulations. We take legal compliance seriously and have implemented strict measures to ensure our platform adheres to all applicable rules.
            </p>

            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-red-600" />
                State-Based Restrictions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to state-specific gaming laws, Kemetion is <strong>NOT available</strong> in the following states:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-lg">
                <li><strong>Andhra Pradesh</strong> - State law prohibits online gaming platforms</li>
                <li><strong>Assam</strong> - Fantasy sports fall under gambling restrictions</li>
                <li><strong>Odisha</strong> - State gaming regulations prohibit fantasy sports</li>
                <li><strong>Telangana</strong> - Online gaming banned under state law</li>
                <li><strong>Nagaland</strong> - State-specific gaming restrictions apply</li>
                <li><strong>Sikkim</strong> - Fantasy sports not permitted under state regulations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We verify user location during registration and <strong>block access</strong> from restricted states. Even though our platform is free-to-play and does not involve real money, we respect state laws and do not operate where fantasy sports are prohibited.
              </p>
            </div>

            <div className="bg-blue-50 border-l-8 border-blue-600 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Age Verification (18+ Only)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Only users aged <strong>18 years and older</strong> are permitted to register and play on Kemetion. We verify age during registration by requiring users to provide their date of birth. Users under 18 are automatically blocked from creating accounts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This age restriction is in place to ensure responsible gaming practices and comply with Indian gaming regulations, even though our platform does not involve real money transactions.
              </p>
            </div>

            <div className="bg-green-50 border-l-8 border-green-600 p-8 rounded-xl">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-600" />
                Skill-Based Gaming Classification
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kemetion is classified as a <strong>skill-based game</strong>, not a game of chance. Fantasy cricket requires knowledge, strategy, and analytical skills to succeed. Players must evaluate statistics, understand match conditions, and make informed decisions—outcomes are not determined by luck or random chance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because our platform is <strong>100% free-to-play</strong> with no monetary rewards, we avoid the legal complexities associated with real money gaming. However, we still maintain strict compliance with all applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Information - Detailed */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">How We Sustain Our Free Model</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Many users wonder: <em>"If everything is free, how does Kemetion operate?"</em> The answer is simple—we are backed by <strong>investors who believe in fantasy sports as an educational tool</strong>, not a revenue stream.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Our investors share our vision of democratizing cricket knowledge and have provided the capital necessary to build and maintain this platform <strong>without charging users</strong>. They understand that the long-term value of building trust and loyalty in the Indian fantasy sports community far exceeds short-term profit maximization.
            </p>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-4 border-yellow-600 my-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Funding Philosophy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike traditional startups that raise funding to scale revenue, Kemetion raised funding to <strong>scale education</strong>. Our investors believe that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Fantasy sports should be accessible to everyone, not just those who can afford to pay</li>
                <li>Skill-based gaming has immense educational value that benefits society</li>
                <li>Building trust and loyalty creates long-term value beyond immediate profits</li>
                <li>A free-to-play model can be sustainable with the right investor support</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              This unique funding model allows us to focus entirely on <strong>user experience, educational value, and responsible gaming practices</strong>. We measure success not by revenue or profit margins, but by the number of users who improve their cricket understanding, develop strategic thinking skills, and enjoy fantasy cricket without financial stress.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              We will <strong>never introduce real money gaming, paid contests, or monetization features</strong> that compromise our educational mission. This is our promise to every user who trusts Kemetion.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership - Detailed */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">Leadership</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-4 border-blue-600">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-black">
                  VN
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-black text-gray-900 mb-2">VINAY NAGVANSHI</h3>
                <p className="text-xl text-blue-600 font-bold mb-6">CEO & Founder</p>
                
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vinay Nagvanshi founded Kemetion Private Limited with a singular vision: to make fantasy cricket accessible to every Indian, free from financial barriers. With a deep passion for cricket and a commitment to responsible gaming, Vinay has built a platform that prioritizes <strong>education and skill development over profit maximization</strong>.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Before founding Kemetion, Vinay spent years studying the Indian fantasy sports industry and identified a critical gap: most platforms were designed to monetize users rather than educate them. He believed that fantasy cricket could be a powerful tool for teaching strategic thinking, data analysis, and cricket knowledge—but only if it was free from financial pressure.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under his leadership, Kemetion has secured investor backing specifically for the purpose of offering <strong>free-to-play fantasy cricket education</strong>. Vinay believes that strategic thinking and cricket analysis should be available to all, and his vision continues to guide every decision the company makes.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Vinay's commitment to transparency, responsible gaming, and user well-being has made Kemetion a trusted name in the Indian fantasy sports community. He remains actively involved in platform development, user feedback, and strategic planning to ensure Kemetion stays true to its mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information - Detailed */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">Company Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-600">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-4">Legal Entity</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Company Name:</strong> Kemetion Private Limited
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Corporate Identification Number (CIN):</strong> U47594JH2023PTC020234
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>PAN Number:</strong> AAKCK1332N
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Year of Incorporation:</strong> 2020
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-600">
              <MapPin className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-4">Head Office</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                TANGAR, CHANHO, RANCHI
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Tangar, Mandar
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Ranchi-835214
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jharkhand, India
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-600">
              <MapPin className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-4">Regional Office</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                18th Cross Rd, 5 Block
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Vidyaranyapura
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Bengaluru, Karnataka 560097
              </p>
              <p className="text-gray-700 leading-relaxed">
                India
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-600">
              <Mail className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Domain:</strong> dhamman.com
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Email:</strong> support@dhammanji.com
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Phone:</strong> +91-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Detailed */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Our Commitment to You</h2>
          
          <div className="prose prose-lg max-w-none text-white">
            <p className="text-xl leading-relaxed mb-6">
              Kemetion Private Limited is committed to maintaining the highest standards of <strong>transparency, fairness, and responsible gaming</strong>. We comply with all applicable laws and regulations, including age restrictions and state-based gaming prohibitions.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-white/30 my-8">
              <h3 className="text-2xl font-black mb-4">Our Promises to You:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We will <strong>never introduce real money gaming</strong> or paid contests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We will <strong>never sell user data</strong> or compromise privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We will <strong>always prioritize education</strong> over profit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We will <strong>maintain transparency</strong> in all operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We will <strong>enforce responsible gaming</strong> practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We will <strong>comply with all laws</strong> and regulations</span>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed">
              This is our promise to every user who trusts Kemetion. We are here to serve the cricket community, not to exploit it.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us - CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Join the Kemetion Community</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Be part of India's most trusted free-to-play fantasy cricket platform. Learn, compete, and grow your cricket knowledge—all without spending a single rupee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-lg"
            >
              REGISTER FOR FREE
            </a>
            <a
              href="/how-to-play"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-lg"
            >
              LEARN HOW TO PLAY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
