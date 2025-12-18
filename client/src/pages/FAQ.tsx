import { useState } from "react";
import { ChevronDown, HelpCircle, Users, Trophy, Shield, Calculator, Gavel, Wrench } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  questions: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: <Users className="w-6 h-6" />,
    color: "blue",
    questions: [
      {
        question: "What is Dhammanjali Fantasy Cricket?",
        answer: "Dhammanjali is a 100% free fantasy cricket platform designed for education and entertainment. You can build virtual cricket teams, compete with other players, and climb leaderboards—all without spending any money. It's a skill-based game where you learn cricket strategy, player analysis, and team management."
      },
      {
        question: "How do I register for an account?",
        answer: "Click the 'REGISTER' button in the top-right corner. Fill in your full name, email, date of birth (you must be 18+), state, and create a password (minimum 8 characters). Select your state carefully—registration is not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to government compliance. Accept the terms and conditions, then click 'CREATE FREE ACCOUNT'."
      },
      {
        question: "Why do I need to verify my age?",
        answer: "Indian law requires fantasy sports platforms to verify that all users are 18 years or older. During registration, you must enter your date of birth, and our system automatically calculates your age. This is a legal requirement to ensure responsible gaming and compliance with regulations."
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Click 'Forgot Password?' on the login page. Enter your registered email address and click 'VERIFY EMAIL'. If your email exists in our system, you'll immediately see a form to create a new password. Enter your new password twice, and you're done! No need to wait for emails—it's instant."
      },
      {
        question: "Is Dhammanjali really 100% free?",
        answer: "Yes! Dhammanjali is completely free—no deposits, no payments, no hidden charges, and no in-app purchases. You'll never be asked for credit card information or payment details. We're backed by investors who believe in fantasy cricket education, so you can play unlimited contests without spending a single rupee."
      }
    ]
  },
  {
    title: "Gameplay & Rules",
    icon: <Trophy className="w-6 h-6" />,
    color: "yellow",
    questions: [
      {
        question: "How do I create a fantasy cricket team?",
        answer: "First, select an upcoming cricket match from the 'Matches' page. Then, you'll enter the team builder where you select 11 players from both teams. Your team must include 1-4 wicket-keepers, 3-6 batsmen, 1-4 all-rounders, and 3-6 bowlers. You have a budget of 100 credits—each player has a credit value based on their recent performance. After selecting players, choose a captain (2x points) and vice-captain (1.5x points). Review your team and submit!"
      },
      {
        question: "What is the team budget and how does it work?",
        answer: "Every team has a budget of 100 credits. Each player is assigned a credit value (ranging from 7 to 12 credits) based on their recent form, popularity, and role. Star players cost more credits, while emerging players cost less. You must build a balanced team of 11 players within this budget. This adds strategic depth—you can't just pick all the expensive players; you need to find value picks and balance your budget."
      },
      {
        question: "What are captain and vice-captain, and why are they important?",
        answer: "After selecting your 11 players, you must choose a captain and vice-captain. Your captain earns 2x points (double points) for every action they perform in the match, while your vice-captain earns 1.5x points. Choosing the right captain is crucial for maximizing your score. Typically, you should captain a player you expect to perform well—like a top-order batsman on a batting-friendly pitch or a strike bowler on a seaming track."
      },
      {
        question: "Can I edit my team after submitting it?",
        answer: "You can edit your team until the match starts. Once the first ball is bowled, your team is locked and cannot be changed. Make sure to check the playing XI announcements (usually 30 minutes before the match) and adjust your team if any of your selected players are not playing. If a player in your team doesn't play, they score 0 points."
      },
      {
        question: "Can I create multiple teams for the same match?",
        answer: "Yes! You can create multiple teams for the same match with different player combinations and strategies. This allows you to experiment with different captaincy choices, player selections, and risk levels. There's no limit to the number of teams you can create—it's all free!"
      },
      {
        question: "What happens if a match is cancelled or abandoned?",
        answer: "If a match is cancelled before it starts, all contests for that match are cancelled and no points are awarded. If a match is abandoned after it starts but before it's completed, points are calculated based on the performance up to the point of abandonment. In case of rain-affected matches with reduced overs, points are calculated normally for the overs played."
      }
    ]
  },
  {
    title: "Scoring System",
    icon: <Calculator className="w-6 h-6" />,
    color: "green",
    questions: [
      {
        question: "How is scoring calculated in fantasy cricket?",
        answer: "Points are awarded based on real match performance. BATTING: +1 point per run, +4 bonus for boundary, +6 bonus for six, +4 for half-century, +8 for century, +2 for 30-run bonus, +4 for 50-run bonus. BOWLING: +25 for wicket, +8 for 3-wicket haul, +16 for 5-wicket haul, +12 for maiden over. FIELDING: +8 for catch, +12 for stumping, +12 for run-out. Strike rate and economy rate bonuses/penalties also apply. Remember: Captain gets 2x points, vice-captain gets 1.5x points!"
      },
      {
        question: "What are strike rate and economy rate bonuses?",
        answer: "STRIKE RATE (Batting): If a batsman scores 20+ runs, they get bonus/penalty based on strike rate. Strike rate 170+: +6 points, 150-170: +4 points, 130-150: +2 points, 60-70: -2 points, 50-60: -4 points, below 50: -6 points. ECONOMY RATE (Bowling): If a bowler bowls 2+ overs, they get bonus/penalty based on economy. Economy below 5: +6 points, 5-6: +4 points, 6-7: +2 points, 10-11: -2 points, 11-12: -4 points, above 12: -6 points. These bonuses reward efficient performance."
      },
      {
        question: "Do players get negative points?",
        answer: "Yes, players can get negative points in certain situations. A batsman dismissed for a duck (0 runs) gets -2 points. Poor strike rates (below 70 for 20+ runs) result in negative points. Bowlers with high economy rates (above 10 for 2+ overs) also get negative points. However, the total score for a player cannot go below 0—it will stop at 0 even if negative points exceed positive points."
      },
      {
        question: "How do all-rounders score points?",
        answer: "All-rounders score points for both batting and bowling performances, making them valuable picks. They get full batting points (runs, boundaries, milestones) and full bowling points (wickets, maidens, economy bonuses). If an all-rounder scores 50 runs AND takes 2 wickets, they get points for both! This is why quality all-rounders are often captaincy choices—they have two ways to score big points."
      },
      {
        question: "What is the 'Playing XI' bonus?",
        answer: "Every player who is part of the playing XI (actually plays in the match) gets +4 points just for being selected. This is why it's crucial to check team announcements before the match starts. If you select a player who doesn't play, they get 0 points total. Always monitor team news and make last-minute changes if needed."
      },
      {
        question: "How are points calculated for substitute fielders?",
        answer: "Substitute fielders (who replace injured players on the field) earn points only for fielding actions—catches, run-outs, and stumpings. They do not earn batting or bowling points since they don't bat or bowl. If you selected a player who later becomes a substitute, they will only score fielding points, which is usually very low. This is a risk factor in fantasy cricket."
      }
    ]
  },
  {
    title: "Legal & Compliance",
    icon: <Gavel className="w-6 h-6" />,
    color: "red",
    questions: [
      {
        question: "Why can't I register from certain states?",
        answer: "Fantasy sports platforms are not permitted in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to state government regulations. These states have specific laws that restrict online fantasy sports, even free-to-play platforms like ours. We comply with all state and central government regulations. If you're located in these states, we cannot allow registration—this is a legal requirement, not a platform choice."
      },
      {
        question: "Is fantasy cricket legal in India?",
        answer: "Yes! Fantasy sports are recognized as games of skill (not gambling) by the Supreme Court of India and various High Courts. Skill-based games are legal under Indian law. However, individual states have the authority to regulate or restrict fantasy sports within their jurisdiction, which is why we block certain states. Dhammanjali is 100% free with no real money involved, making it purely educational and entertainment-focused."
      },
      {
        question: "What makes Dhammanjali a 'game of skill' and not gambling?",
        answer: "Fantasy cricket is a game of skill because success depends on your knowledge, analysis, and strategy—not chance. You must research player form, pitch conditions, weather, team combinations, and match situations to build winning teams. Outcomes are based on real cricket performances, and skilled players consistently perform better over time. Since Dhammanjali involves no money and no prizes, it's purely educational, making it clearly a skill-based platform."
      },
      {
        question: "Do I need to pay taxes on my winnings?",
        answer: "There are no winnings on Dhammanjali! We're a 100% free platform with no cash prizes, no rewards, and no monetary benefits. You play for leaderboard rankings, bragging rights, and the joy of competition. Since there's no money involved, there are no tax implications. You're simply learning cricket strategy and competing with other fans for fun."
      },
      {
        question: "How does Dhammanjali protect my personal data?",
        answer: "We take data privacy seriously and comply with Indian data protection laws. Your personal information (name, email, date of birth, state) is encrypted and stored securely. We never share your data with third parties for marketing purposes. We use your email only for account-related communications. You can request to view, modify, or delete your data at any time by contacting us at privacy@dhamman.com. Read our full Privacy Policy for detailed information."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes, you have the right to delete your account at any time. Contact us at support@dhamman.com with your registered email and request account deletion. We'll permanently delete your personal data within 30 days as per data protection regulations. Note that once deleted, your account cannot be recovered, and you'll need to register again if you want to return."
      }
    ]
  },
  {
    title: "Strategy & Tips",
    icon: <Shield className="w-6 h-6" />,
    color: "purple",
    questions: [
      {
        question: "What's the best strategy for selecting a captain?",
        answer: "Your captain choice is the most important decision—they score 2x points! Choose a player who is in good form, plays a key role in their team, and suits the match conditions. For batting-friendly pitches, captain a top-order batsman. For bowling-friendly conditions, captain a strike bowler. All-rounders are safe captain choices because they can score through both batting and bowling. Avoid captaining players batting at No. 7 or below—they may not get enough opportunities."
      },
      {
        question: "Should I pick more players from one team?",
        answer: "It depends on match analysis! If one team is heavily favored to win, you can pick 7-8 players from that team. However, this is risky—if the underdog wins, your team will score poorly. A balanced approach is 6-5 or 7-4 split. In evenly matched games, go 6-5. Also consider pitch conditions: if it's a batting paradise, load up on batsmen from both teams. If it's a bowling track, pick more bowlers."
      },
      {
        question: "How important are wicket-keepers in fantasy cricket?",
        answer: "Wicket-keepers are valuable because they score points through batting, catches, stumpings, and run-outs. A wicket-keeper who bats in the top order is extremely valuable—they have more opportunities to score runs. Players like Rishabh Pant, Jos Buttler, or Quinton de Kock are premium picks. Always pick at least one wicket-keeper who bats in the top 5. Avoid wicket-keepers who bat at No. 7 or lower unless they're exceptional glovemen."
      },
      {
        question: "What are 'differential picks' and when should I use them?",
        answer: "Differential picks are low-ownership players that most people don't select. If you're playing in large contests, picking differentials can help you climb the leaderboard if those players perform well. For example, if everyone captains Virat Kohli, but you captain KL Rahul and he scores more, you'll gain a huge advantage. Use differentials when you have strong conviction based on analysis, but don't go too contrarian—balance is key."
      },
      {
        question: "How do I analyze pitch and weather conditions?",
        answer: "Pitch and weather are crucial! BATTING PITCHES (flat, hard): Pick more batsmen, captain a top-order batsman, avoid medium pacers. BOWLING PITCHES (green, seaming): Pick more fast bowlers, captain a strike bowler, avoid lower-order batsmen. SPIN-FRIENDLY PITCHES (dry, turning): Pick quality spinners, avoid pace bowlers. WEATHER: Overcast conditions help swing bowlers. Dew in evening games helps batsmen in the second innings. Check weather forecasts and pitch reports before finalizing your team."
      },
      {
        question: "Should I always pick star players?",
        answer: "Not always! Star players are expensive (10-12 credits) and eat up your budget. Sometimes, picking 2-3 value players (7-8 credits) who are in good form gives you budget flexibility to afford multiple stars. Also, in small leagues or bilateral series, emerging players often perform well and are low-owned. Balance your team: 3-4 premium players, 4-5 mid-range players, and 2-3 budget players. Don't spend all credits on batsmen—invest in quality bowlers too."
      }
    ]
  },
  {
    title: "Technical Support",
    icon: <Wrench className="w-6 h-6" />,
    color: "orange",
    questions: [
      {
        question: "Which browsers are supported?",
        answer: "Dhammanjali works best on modern browsers: Google Chrome (recommended), Mozilla Firefox, Safari, and Microsoft Edge. We recommend using the latest version of your browser for the best experience. Mobile browsers are also fully supported—you can play on your smartphone or tablet. If you experience issues, try clearing your browser cache or switching to an incognito/private window."
      },
      {
        question: "Why can't I see my team after creating it?",
        answer: "This usually happens due to browser cache issues. Try refreshing the page (press F5 or Ctrl+R). If that doesn't work, clear your browser cache and cookies, then log in again. Make sure you're logged into the correct account. If the problem persists, contact support@dhamman.com with your registered email and we'll investigate."
      },
      {
        question: "I'm not receiving emails from Dhammanjali. What should I do?",
        answer: "First, check your spam/junk folder—our emails sometimes land there. Add support@dhamman.com and noreply@dhamman.com to your contacts to prevent this. If you still don't receive emails, your email provider might be blocking us. Try using a different email address (Gmail or Outlook work best). Contact us at support@dhamman.com if the issue continues."
      },
      {
        question: "The website is loading slowly. How can I fix this?",
        answer: "Slow loading can be caused by internet connection, browser cache, or server load. First, check your internet speed. Then, try clearing your browser cache and cookies. Close unnecessary tabs and applications. If the issue persists during match time, it might be due to high traffic—please be patient, our servers handle thousands of users. You can also try accessing the site during off-peak hours."
      },
      {
        question: "Can I play Dhammanjali on my mobile phone?",
        answer: "Yes! Dhammanjali is fully mobile-responsive. You can access the website from your mobile browser (Chrome, Safari, Firefox) and enjoy the full experience. We don't have a mobile app yet, but the mobile website works perfectly. Simply visit dhamman.com from your phone's browser, log in, and start playing. The interface automatically adapts to your screen size."
      },
      {
        question: "Who do I contact for help or support?",
        answer: "For general queries and support, email us at support@dhamman.com. For privacy and data-related questions, contact privacy@dhamman.com. For fair play and cheating reports, email fairplay@dhamman.com. For legal or compliance questions, reach out to legal@dhamman.com. You can also visit our Contact Us page for our office addresses and business hours. We typically respond within 24-48 hours."
      }
    ]
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg mb-3 overflow-hidden bg-white hover:border-blue-400 transition-colors">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: prev[key] === questionIndex ? null : questionIndex,
    }));
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string } } = {
      blue: { bg: "bg-blue-600", border: "border-blue-600", text: "text-blue-600" },
      yellow: { bg: "bg-yellow-500", border: "border-yellow-500", text: "text-yellow-600" },
      green: { bg: "bg-green-600", border: "border-green-600", text: "text-green-600" },
      red: { bg: "bg-red-600", border: "border-red-600", text: "text-red-600" },
      purple: { bg: "bg-purple-600", border: "border-purple-600", text: "text-purple-600" },
      orange: { bg: "bg-orange-600", border: "border-orange-600", text: "text-orange-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400 transform skew-x-12 translate-x-1/2 opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              FREQUENTLY ASKED
              <br />
              <span className="text-yellow-400">QUESTIONS</span>
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Everything you need to know about Dhammanjali Fantasy Cricket—from registration to advanced strategies
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          {faqData.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={categoryIndex} className="mb-12">
                {/* Category Header */}
                <div className={`flex items-center gap-4 mb-6 pb-4 border-b-4 ${colors.border}`}>
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">{category.title}</h2>
                  <span className={`ml-auto px-4 py-1 ${colors.bg} text-white text-sm font-bold rounded-full`}>
                    {category.questions.length} Questions
                  </span>
                </div>

                {/* Questions */}
                <div>
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}`] === questionIndex}
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-black mb-4">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                CONTACT SUPPORT
              </a>
              <a
                href="mailto:support@dhamman.com"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-black rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                EMAIL US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
