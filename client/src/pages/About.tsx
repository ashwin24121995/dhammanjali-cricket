import { Shield, Trophy, Users, Heart, Target, Award, Building2, User } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/20 to-transparent transform skew-x-12"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 font-bold text-lg mb-6 transform -skew-x-6">
              ABOUT US
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              DHAMMANJALI INDIA
              <br />
              <span className="text-yellow-400">PRIVATE LIMITED</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Revolutionizing Fantasy Cricket Education in India Through Free-to-Play, Skill-Based Gaming
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-8">Who We Are</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dhammanjali India Private Limited is a pioneering force in the Indian fantasy sports industry, dedicated to democratizing cricket knowledge and strategic thinking through our innovative free-to-play platform. Established in 2020 and headquartered in Prayagraj, Uttar Pradesh, we have embarked on a mission to transform how millions of Indians engage with cricket—not through financial speculation, but through pure skill development and educational entertainment.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike traditional fantasy sports platforms that revolve around real money transactions and monetary rewards, Dhammanjali operates on a fundamentally different philosophy. We believe that the joy of fantasy cricket should be accessible to everyone, regardless of their financial capacity. Our platform serves as an educational tool where cricket enthusiasts can learn team management, player analysis, match strategy, and decision-making skills in a completely risk-free environment.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Backed by forward-thinking investors who share our vision of fantasy sports as an educational medium rather than a gambling alternative, we have built a sustainable business model that prioritizes user learning and engagement over monetization. Our investors believe in the power of skill-based gaming to enhance cricket literacy across India, and their support enables us to offer our platform completely free of charge to all users aged 18 and above.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-400">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-black mb-4">OUR MISSION</h3>
              <p className="text-lg leading-relaxed">
                To provide every cricket enthusiast in India with a free, accessible platform to develop strategic thinking, analytical skills, and cricket knowledge through skill-based fantasy gaming, without any financial pressure or risk.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-400">
              <Award className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-black mb-4">OUR VISION</h3>
              <p className="text-lg leading-relaxed">
                To become India's most trusted educational fantasy cricket platform, recognized for fostering cricket intelligence and responsible gaming practices while maintaining our commitment to being 100% free-to-play forever.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-400">
              <Heart className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-black mb-4">OUR VALUES</h3>
              <p className="text-lg leading-relaxed">
                Education over profit. Skill over chance. Accessibility over exclusivity. Transparency over ambiguity. Responsible gaming over addictive monetization. Community over competition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">What Makes Dhammanjali Different</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-l-4 border-red-600">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">100% Free Forever</h3>
              <p className="text-gray-700 leading-relaxed">
                No entry fees, no deposits, no hidden charges, no premium memberships. Every feature, every contest, every match is completely free. We are funded by investors who believe in fantasy education, not user wallets.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-l-4 border-blue-600">
              <Trophy className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Real Money Involved</h3>
              <p className="text-gray-700 leading-relaxed">
                Winners earn recognition and leaderboard glory, not cash prizes. This eliminates financial stress, gambling concerns, and legal complications. Play for passion, pride, and skill development—not money.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border-l-4 border-yellow-600">
              <Users className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Educational Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                Our platform teaches player statistics, match conditions, team dynamics, pitch analysis, and strategic decision-making. Every contest is a learning opportunity to deepen your cricket knowledge.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-l-4 border-green-600">
              <Heart className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Responsible Gaming</h3>
              <p className="text-gray-700 leading-relaxed">
                Strict age verification (18+), state-based compliance, transparent rules, and zero addictive monetization tactics. We prioritize user well-being over engagement metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-12">Leadership</h2>
            
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">VINAY NAGVANSHI</h3>
              <p className="text-xl text-red-600 font-bold mb-6">CEO & Founder</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vinay Nagvanshi founded Dhammanjali India Private Limited with a singular vision: to make fantasy cricket accessible to every Indian, free from financial barriers. With a deep passion for cricket and a commitment to responsible gaming, Vinay has built a platform that prioritizes education and skill development over profit maximization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Under his leadership, Dhammanjali has secured investor backing specifically for the purpose of offering free-to-play fantasy cricket education. Vinay believes that strategic thinking and cricket analysis should be available to all, and his vision continues to guide every decision the company makes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Company Information</h2>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Legal Entity</h4>
                    <p className="text-gray-300">Dhammanjali India Private Limited</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Corporate Identification Number (CIN)</h4>
                    <p className="text-gray-300 font-mono">U15490UP2020PTC135324</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">PAN Number</h4>
                    <p className="text-gray-300 font-mono">AANCM8535G</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Year of Incorporation</h4>
                    <p className="text-gray-300">2020</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-6">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Head Office</h4>
                    <p className="text-gray-300 leading-relaxed">
                      1st Floor, 154 Katka Jhunsi<br />
                      Thana - Jhunsi District Prayagraj<br />
                      Jhunsi, Allahabad - 211019<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="bg-blue-700/50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-400 mb-2">Regional Office</h4>
                      <p className="text-gray-300 leading-relaxed">
                        BTM 2nd Stage - No 46, 1st Floor<br />
                        1st Main Road, 7th Cross Rd<br />
                        BTM Layout, Bengaluru<br />
                        Karnataka 560076, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building2 className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Domain</h4>
                    <p className="text-gray-300">dhamman.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-8">Our Commitment to You</h2>
            <p className="text-xl leading-relaxed mb-6">
              Dhammanjali India Private Limited is committed to maintaining the highest standards of transparency, fairness, and responsible gaming. We comply with all applicable laws and regulations, including age restrictions and state-based gaming prohibitions.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Our platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim due to government compliance requirements. Only users aged 18 years and older are permitted to register and play.
            </p>
            <p className="text-xl leading-relaxed font-bold">
              We will never introduce real money gaming, paid contests, or monetization features that compromise our educational mission. This is our promise to every user who trusts Dhammanjali.
            </p>
          </div>
        </div>
      </div>

      {/* Investor Backing */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-8">How We Sustain Our Free Model</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Many users wonder: "If everything is free, how does Dhammanjali operate?" The answer is simple—we are backed by investors who believe in fantasy sports as an educational tool, not a revenue stream. Our investors share our vision of democratizing cricket knowledge and have provided the capital necessary to build and maintain this platform without charging users.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This unique funding model allows us to focus entirely on user experience, educational value, and responsible gaming practices. We measure success not by revenue or profit margins, but by the number of users who improve their cricket understanding, develop strategic thinking skills, and enjoy fantasy cricket without financial stress.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Our investors believe in the long-term value of building trust and loyalty in the Indian fantasy sports community. By offering a genuinely free, educational alternative, we aim to set a new standard for what fantasy cricket can and should be.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Join the Dhammanjali Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of India's most trusted free-to-play fantasy cricket platform. Learn, compete, and grow your cricket knowledge—all without spending a single rupee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-black text-lg hover:bg-yellow-500 transition-colors"
            >
              REGISTER FOR FREE
            </a>
            <a
              href="/how-to-play"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-black text-lg hover:bg-blue-700 transition-colors"
            >
              LEARN HOW TO PLAY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
