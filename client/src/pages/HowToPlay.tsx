import { Trophy, Users, Target, Award, TrendingUp, Clock, Shield, CheckCircle2 } from "lucide-react";

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-yellow-400/20 to-transparent transform -skew-x-12"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 font-bold text-lg mb-6 transform -skew-x-6">
              TUTORIAL
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              HOW TO PLAY
              <br />
              <span className="text-yellow-400">FANTASY CRICKET</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Master the Art of Cricket Strategy in 5 Simple Steps
            </p>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-8 rounded-xl mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">What is Fantasy Cricket?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Fantasy Cricket is a skill-based online game where you create your own virtual cricket team using real players from upcoming matches. Your team earns points based on how those players perform in actual matches. The better your players perform in real life, the more points your fantasy team scores.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Dhammanjali, you compete against other users on our leaderboard without any money involved. It's completely free to play, and winners earn recognition and glory rather than cash prizes. This makes it the perfect platform to learn cricket strategy, test your analytical skills, and enjoy the thrill of competition without financial risk.
            </p>
          </div>

          {/* 5 Steps to Play */}
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">5 Steps to Get Started</h2>
          
          <div className="space-y-8 mb-16">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black">
                1
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border-2 border-red-200">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Register & Login</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Create your free Dhammanjali account by providing your name, email, date of birth (must be 18+), and state. We verify your age and ensure you're not from a restricted state (Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, or Sikkim). Once registered, log in to access your dashboard.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-800 font-semibold">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Remember: You must be 18 years or older to play. This is a legal requirement for skill-based gaming in India.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-black">
                2
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Select a Match</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Browse through upcoming cricket matches from various formats—T20, ODI, or Test matches. Each match displays the competing teams, match timing, and venue. Choose a match you're familiar with or one where you have strong knowledge of the players and conditions.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Pro Tip: Select matches where you understand player form, pitch conditions, and team strategies. Knowledge is your biggest advantage!
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-black">
                3
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Build Your Dream Team</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This is where strategy comes in! You have a virtual budget (typically 100 credits) to select 11 players from both teams. Each player has a credit value based on their recent performance and reputation. You must choose:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>1-4 Wicketkeepers</strong> - Players who can bat and keep wickets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>3-6 Batsmen</strong> - Top-order and middle-order batsmen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>1-4 All-rounders</strong> - Players who can both bat and bowl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>3-6 Bowlers</strong> - Fast bowlers and spinners</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You can select a maximum of 7 players from any one team to ensure balance. After selecting your 11 players, you must choose a <strong>Captain</strong> (who earns 2x points) and a <strong>Vice-Captain</strong> (who earns 1.5x points). This decision is crucial—choose players you expect to perform exceptionally well.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 font-semibold">
                    <Target className="w-4 h-4 inline mr-2" />
                    Strategy Tip: Balance your team with consistent performers and high-risk, high-reward players. Don't spend all your budget on star players—hidden gems can win you contests!
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-black">
                4
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Watch the Match & Track Points</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Once the real match begins, your fantasy team starts earning points based on your players' actual performance. Watch the live match and track your team's score in real-time on Dhammanjali. Every run, wicket, catch, and milestone contributes to your total points.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You can see how your team is performing compared to other users on the live leaderboard. This is where the excitement builds—will your captain deliver? Did you make the right bowling choices? The match outcome directly impacts your fantasy score.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-black">
                5
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Check Leaderboard & Earn Recognition</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  After the match ends, final points are calculated and the leaderboard is updated. Users with the highest scores are ranked at the top and earn recognition in the Dhammanjali community. While there are no cash prizes, top performers gain bragging rights, leaderboard glory, and the satisfaction of outsmarting thousands of other cricket fans.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800 font-semibold">
                    <Trophy className="w-4 h-4 inline mr-2" />
                    Winning Mindset: Consistency is key! Top players analyze past performance, study player stats, and refine their strategy with every match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring System */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">Understanding the Scoring System</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Batting Points */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-yellow-400">
                <h3 className="text-2xl font-black mb-6 text-yellow-400">BATTING POINTS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Run scored</span>
                    <span className="font-bold text-yellow-400">+1 point per run</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Boundary (4s)</span>
                    <span className="font-bold text-yellow-400">+1 bonus point</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Six (6s)</span>
                    <span className="font-bold text-yellow-400">+2 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Half-century (50 runs)</span>
                    <span className="font-bold text-yellow-400">+8 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Century (100 runs)</span>
                    <span className="font-bold text-yellow-400">+16 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Duck (out for 0)</span>
                    <span className="font-bold text-red-400">-2 points</span>
                  </div>
                </div>
              </div>

              {/* Bowling Points */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-blue-400">
                <h3 className="text-2xl font-black mb-6 text-blue-400">BOWLING POINTS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Wicket taken</span>
                    <span className="font-bold text-blue-400">+25 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">4-wicket haul</span>
                    <span className="font-bold text-blue-400">+8 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">5-wicket haul</span>
                    <span className="font-bold text-blue-400">+16 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Maiden over</span>
                    <span className="font-bold text-blue-400">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">LBW/Bowled bonus</span>
                    <span className="font-bold text-blue-400">+8 points</span>
                  </div>
                </div>
              </div>

              {/* Fielding Points */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-green-400">
                <h3 className="text-2xl font-black mb-6 text-green-400">FIELDING POINTS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Catch taken</span>
                    <span className="font-bold text-green-400">+8 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">3 catches in a match</span>
                    <span className="font-bold text-green-400">+4 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Stumping</span>
                    <span className="font-bold text-green-400">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Run-out (direct hit)</span>
                    <span className="font-bold text-green-400">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Run-out (thrower/catcher)</span>
                    <span className="font-bold text-green-400">+6 points</span>
                  </div>
                </div>
              </div>

              {/* Other Points */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-purple-400">
                <h3 className="text-2xl font-black mb-6 text-purple-400">OTHER POINTS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Playing XI</span>
                    <span className="font-bold text-purple-400">+4 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Captain (2x multiplier)</span>
                    <span className="font-bold text-purple-400">Double points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Vice-Captain (1.5x)</span>
                    <span className="font-bold text-purple-400">1.5x points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Strike Rate bonus (T20)</span>
                    <span className="font-bold text-purple-400">+2 to +6 points</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Economy Rate bonus</span>
                    <span className="font-bold text-purple-400">+4 to +10 points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Tips */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Pro Strategy Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-l-4 border-red-600">
              <TrendingUp className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Analyze Player Form</h3>
              <p className="text-gray-700 leading-relaxed">
                Don't just pick big names—study recent performance. A player in good form (high scores in last 3-5 matches) is more likely to perform well than a star player going through a rough patch. Check batting averages, strike rates, and bowling economy rates before selection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-l-4 border-blue-600">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Understand Match Conditions</h3>
              <p className="text-gray-700 leading-relaxed">
                Pitch conditions matter! A batting-friendly pitch favors batsmen and all-rounders, while a green pitch or turning track benefits bowlers. Consider weather conditions, venue history, and whether it's a day or day-night match. Spinners perform better on dry pitches, while fast bowlers thrive on bouncy wickets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border-l-4 border-yellow-600">
              <Users className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Balance Your Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Don't overload your team with batsmen or bowlers. A balanced team with 3-4 batsmen, 1-2 all-rounders, 3-4 bowlers, and 1 wicketkeeper usually performs best. All-rounders are valuable because they contribute in both batting and bowling, giving you double opportunities to earn points.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-l-4 border-green-600">
              <Award className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Captain & Vice-Captain Selection</h3>
              <p className="text-gray-700 leading-relaxed">
                This is your most important decision! Your captain earns double points, so choose a player who is likely to have a big impact—either a top-order batsman or a strike bowler. Your vice-captain should be your second-best choice. Avoid making both from the same team to hedge your bets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Common Mistakes to Avoid</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">❌ Picking Too Many Players from One Team</h4>
                <p className="text-gray-700">
                  If that team performs poorly, your entire fantasy team suffers. Spread your selections across both teams to balance risk.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">❌ Ignoring Player Roles</h4>
                <p className="text-gray-700">
                  A lower-order batsman who rarely bats won't score many points, even if they're a great bowler. Similarly, a part-time bowler won't take many wickets. Choose players who will actually contribute in their primary role.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">❌ Spending All Budget on Stars</h4>
                <p className="text-gray-700">
                  Expensive players don't always deliver. Budget-friendly players in good form can outperform expensive stars. Use your credits wisely to build a well-rounded team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">❌ Not Checking Playing XI</h4>
                <p className="text-gray-700">
                  Always check the official playing XI announcement before the match starts. If your selected player isn't playing, they score zero points. Replace them if possible before the deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Build Your First Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Now that you understand how fantasy cricket works, it's time to put your knowledge to the test. Register for free, select a match, and start building your dream team today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-black text-lg hover:bg-yellow-500 transition-colors"
            >
              REGISTER NOW
            </a>
            <a
              href="/faq"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-black text-lg hover:bg-blue-700 transition-colors"
            >
              VIEW FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
