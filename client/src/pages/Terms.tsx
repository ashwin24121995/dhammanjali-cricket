import { Shield, AlertTriangle, FileText, Scale } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              TERMS & CONDITIONS
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              Legal Agreement for Using Dhammanjali Fantasy Cricket Platform
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last Updated: December 18, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8 rounded-xl mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-black mb-3">IMPORTANT NOTICE</h2>
                <p className="text-lg leading-relaxed mb-3">
                  By accessing or using the Dhammanjali fantasy cricket platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our platform.
                </p>
                <p className="text-lg leading-relaxed font-bold">
                  This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-black text-gray-900 mb-4">TABLE OF CONTENTS</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#section1" className="text-blue-600 hover:underline font-semibold">1. Definitions</a>
              <a href="#section2" className="text-blue-600 hover:underline font-semibold">2. Acceptance of Terms</a>
              <a href="#section3" className="text-blue-600 hover:underline font-semibold">3. Eligibility</a>
              <a href="#section4" className="text-blue-600 hover:underline font-semibold">4. Account Registration</a>
              <a href="#section5" className="text-blue-600 hover:underline font-semibold">5. Platform Usage Rules</a>
              <a href="#section6" className="text-blue-600 hover:underline font-semibold">6. Free-to-Play Model</a>
              <a href="#section7" className="text-blue-600 hover:underline font-semibold">7. Intellectual Property</a>
              <a href="#section8" className="text-blue-600 hover:underline font-semibold">8. User Conduct</a>
              <a href="#section9" className="text-blue-600 hover:underline font-semibold">9. Prohibited Activities</a>
              <a href="#section10" className="text-blue-600 hover:underline font-semibold">10. Termination</a>
              <a href="#section11" className="text-blue-600 hover:underline font-semibold">11. Disclaimers</a>
              <a href="#section12" className="text-blue-600 hover:underline font-semibold">12. Limitation of Liability</a>
              <a href="#section13" className="text-blue-600 hover:underline font-semibold">13. Governing Law</a>
              <a href="#section14" className="text-blue-600 hover:underline font-semibold">14. Modifications</a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section1" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">1. DEFINITIONS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>"Platform"</strong> refers to the Dhammanjali fantasy cricket website, mobile applications, and all related services operated by Dhammanjali India Private Limited.
                </p>
                <p>
                  <strong>"User," "You," or "Your"</strong> refers to any individual who accesses or uses the Platform, whether registered or not.
                </p>
                <p>
                  <strong>"We," "Us," or "Our"</strong> refers to Dhammanjali India Private Limited (CIN: U15490UP2020PTC135324), the company operating this Platform.
                </p>
                <p>
                  <strong>"Fantasy Cricket"</strong> refers to the skill-based online game where users create virtual cricket teams using real players and earn points based on those players' actual performance in real matches.
                </p>
                <p>
                  <strong>"Contest"</strong> refers to any fantasy cricket competition hosted on the Platform where users compete against each other based on their team's performance.
                </p>
                <p>
                  <strong>"Leaderboard"</strong> refers to the ranking system that displays user scores and positions in contests.
                </p>
                <p>
                  <strong>"Restricted States"</strong> refers to Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim, where the Platform is not available due to legal restrictions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">2. ACCEPTANCE OF TERMS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  By creating an account, accessing, or using the Dhammanjali Platform in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy and Fair Play Policy. These documents constitute a legally binding agreement between you and Dhammanjali India Private Limited.
                </p>
                <p>
                  If you do not agree with any provision of these Terms, you must immediately cease using the Platform and refrain from creating an account. Continued use of the Platform after any modifications to these Terms constitutes your acceptance of the revised Terms.
                </p>
                <p>
                  Your use of the Platform is also subject to all applicable local, state, national, and international laws and regulations. You are responsible for ensuring that your use of the Platform complies with all such laws in your jurisdiction.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">3. ELIGIBILITY</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-bold text-lg text-red-600">
                  AGE REQUIREMENT: You must be at least 18 years of age to use this Platform. This is a strict legal requirement under Indian law for skill-based gaming platforms.
                </p>
                <p>
                  By registering on the Platform, you represent and warrant that you are 18 years of age or older. We reserve the right to request proof of age at any time, and failure to provide such proof may result in immediate account suspension or termination.
                </p>
                <p className="font-bold text-lg text-red-600">
                  GEOGRAPHIC RESTRICTIONS: The Platform is NOT available to residents of the following Indian states: Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim.
                </p>
                <p>
                  These restrictions are in place due to specific state laws and regulations governing online gaming and skill-based competitions. If you are a resident of any Restricted State, you are prohibited from accessing or using the Platform. Attempting to circumvent these restrictions by providing false information about your location is a violation of these Terms and may result in legal action.
                </p>
                <p>
                  You must be a resident of India (excluding Restricted States) to participate. International users are not permitted to register or play on the Platform at this time.
                </p>
                <p>
                  You must have the legal capacity to enter into binding contracts under Indian law. If you are registering on behalf of a minor or someone who lacks legal capacity, you are in violation of these Terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">4. ACCOUNT REGISTRATION</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  To access certain features of the Platform, you must create a user account by providing accurate, complete, and current information including your full name, email address, date of birth, state of residence, and a secure password.
                </p>
                <p>
                  <strong>Account Security:</strong> You are solely responsible for maintaining the confidentiality of your account credentials (username and password). You must not share your login information with any third party. Any activity that occurs under your account is your responsibility, whether or not you authorized such activity.
                </p>
                <p>
                  <strong>Accurate Information:</strong> You agree to provide truthful and accurate information during registration and to update your information promptly if it changes. Providing false information, including false age or location data, is grounds for immediate account termination and may constitute fraud.
                </p>
                <p>
                  <strong>One Account Per User:</strong> You are permitted to maintain only one account on the Platform. Creating multiple accounts to gain unfair advantages, manipulate leaderboards, or circumvent restrictions is strictly prohibited and will result in permanent ban from the Platform.
                </p>
                <p>
                  <strong>Account Verification:</strong> We reserve the right to verify your identity, age, and location at any time by requesting government-issued identification documents (such as Aadhaar card, PAN card, driver's license, or passport). Failure to provide requested verification documents within a reasonable timeframe may result in account suspension.
                </p>
                <p>
                  <strong>Notification of Unauthorized Use:</strong> You must immediately notify us at support@dhamman.com if you become aware of any unauthorized use of your account or any other security breach.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">5. PLATFORM USAGE RULES</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Skill-Based Gaming:</strong> Dhammanjali is a skill-based fantasy cricket platform where success depends on your knowledge of cricket, analytical abilities, and strategic decision-making. The Platform does not involve gambling, betting, or games of chance.
                </p>
                <p>
                  <strong>Team Creation:</strong> You may create fantasy cricket teams by selecting real cricket players within the constraints of the Platform's rules (budget limits, player quotas, etc.). Your team's performance is determined by the actual performance of your selected players in real cricket matches.
                </p>
                <p>
                  <strong>Contest Participation:</strong> You may participate in contests by submitting your fantasy teams before the specified deadline. Once a contest begins, team changes are not permitted unless explicitly stated otherwise.
                </p>
                <p>
                  <strong>Scoring System:</strong> Points are awarded based on the official scoring system published on the Platform. We reserve the right to modify the scoring system with reasonable notice, but such changes will not apply retroactively to completed contests.
                </p>
                <p>
                  <strong>Data Accuracy:</strong> While we strive to provide accurate and up-to-date information about matches, players, and scores, we rely on third-party data sources. We are not responsible for errors, delays, or inaccuracies in such data.
                </p>
                <p>
                  <strong>Platform Availability:</strong> We aim to provide continuous access to the Platform, but we do not guarantee uninterrupted service. The Platform may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">6. FREE-TO-PLAY MODEL</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-bold text-lg text-green-600">
                  NO REAL MONEY INVOLVED: Dhammanjali operates on a 100% free-to-play model. You will never be required to pay any entry fees, subscription charges, or any other monetary payments to participate in contests.
                </p>
                <p>
                  <strong>No Cash Prizes:</strong> Winners of contests do not receive cash prizes, monetary rewards, or any form of financial compensation. The Platform is designed purely for entertainment, education, and skill development purposes.
                </p>
                <p>
                  <strong>Recognition and Glory:</strong> Top performers are recognized through leaderboard rankings, badges, and community acknowledgment. The primary reward is the satisfaction of demonstrating superior cricket knowledge and strategic skills.
                </p>
                <p>
                  <strong>Investor-Backed Model:</strong> The Platform is financially supported by investors who believe in the educational value of fantasy sports and want to provide a risk-free environment for cricket enthusiasts to learn and compete without financial pressure.
                </p>
                <p>
                  <strong>No Gambling or Betting:</strong> This Platform does not constitute gambling, betting, or wagering under Indian law. No money changes hands between users, and no financial stakes are involved in any contest.
                </p>
                <p>
                  <strong>Future Monetization:</strong> We reserve the right to introduce optional premium features, cosmetic upgrades, or advertising in the future, but the core fantasy cricket gameplay will always remain free. Any such changes will be communicated to users in advance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">7. INTELLECTUAL PROPERTY RIGHTS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Platform Ownership:</strong> All content, features, functionality, software, code, designs, graphics, logos, trademarks, and other materials on the Platform are owned by Dhammanjali India Private Limited or our licensors and are protected by Indian and international intellectual property laws.
                </p>
                <p>
                  <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal, non-commercial purposes in accordance with these Terms. This license does not include any right to reproduce, distribute, modify, create derivative works, publicly display, or commercially exploit any content from the Platform.
                </p>
                <p>
                  <strong>Trademarks:</strong> "Dhammanjali," the Dhammanjali logo, and all related trademarks, service marks, and trade names are proprietary to Dhammanjali India Private Limited. You may not use these marks without our prior written consent.
                </p>
                <p>
                  <strong>User-Generated Content:</strong> By submitting content to the Platform (such as team names, profile information, or comments), you grant us a worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, and display such content in connection with operating the Platform.
                </p>
                <p>
                  <strong>Third-Party Content:</strong> The Platform may display cricket player names, team names, match information, and other content that is owned by third parties (such as cricket boards, leagues, and players). We do not claim ownership of such content and use it solely for the purpose of operating the fantasy cricket game under applicable fair use principles.
                </p>
                <p>
                  <strong>Copyright Infringement:</strong> If you believe that any content on the Platform infringes your copyright, please contact us at legal@dhamman.com with detailed information about the alleged infringement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section8" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">8. USER CONDUCT</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  You agree to use the Platform in a responsible, ethical, and lawful manner. You must respect other users, the integrity of the game, and the spirit of fair competition.
                </p>
                <p>
                  <strong>Fair Play:</strong> You must not engage in any form of cheating, collusion, match-fixing, or manipulation of contests. All team selections and strategic decisions must be made independently without coordination with other users.
                </p>
                <p>
                  <strong>Respectful Behavior:</strong> You must treat other users, our staff, and all individuals associated with the Platform with respect. Harassment, bullying, hate speech, discriminatory language, or abusive behavior of any kind is strictly prohibited.
                </p>
                <p>
                  <strong>Accurate Representation:</strong> You must not impersonate any person or entity, falsely claim affiliation with any person or entity, or misrepresent your identity or credentials.
                </p>
                <p>
                  <strong>Responsible Gaming:</strong> While the Platform does not involve real money, you should still practice responsible gaming habits. Do not let fantasy cricket interfere with your work, studies, relationships, or other important responsibilities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section9" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">9. PROHIBITED ACTIVITIES</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>The following activities are strictly prohibited on the Platform:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using automated scripts, bots, or software to access the Platform or create teams</li>
                  <li>Attempting to hack, reverse engineer, or compromise the security of the Platform</li>
                  <li>Creating multiple accounts to gain unfair advantages</li>
                  <li>Sharing insider information about player injuries, team selections, or match conditions that is not publicly available</li>
                  <li>Colluding with other users to manipulate contest outcomes</li>
                  <li>Using the Platform for any commercial purpose without our written permission</li>
                  <li>Scraping, data mining, or extracting data from the Platform using automated means</li>
                  <li>Uploading viruses, malware, or any harmful code</li>
                  <li>Interfering with other users' enjoyment of the Platform</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Attempting to access the Platform from a Restricted State</li>
                  <li>Providing false age or location information during registration</li>
                </ul>
                <p className="font-bold text-red-600">
                  Violation of any of these prohibitions may result in immediate account termination, legal action, and reporting to appropriate law enforcement authorities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section10" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">10. ACCOUNT TERMINATION AND SUSPENSION</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Termination by You:</strong> You may terminate your account at any time by contacting us at support@dhamman.com. Upon termination, your access to the Platform will be revoked, and your account data will be handled in accordance with our Privacy Policy.
                </p>
                <p>
                  <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violation of these Terms and Conditions</li>
                  <li>Fraudulent or suspicious activity</li>
                  <li>Providing false information during registration</li>
                  <li>Attempting to access the Platform from a Restricted State</li>
                  <li>Engaging in prohibited activities</li>
                  <li>Failure to verify your identity or age when requested</li>
                  <li>Inactivity for an extended period</li>
                </ul>
                <p>
                  <strong>Effect of Termination:</strong> Upon termination, your right to use the Platform immediately ceases. We are not liable for any loss or damage resulting from account termination. You remain liable for any obligations incurred prior to termination.
                </p>
                <p>
                  <strong>Appeals:</strong> If you believe your account was terminated in error, you may contact us at support@dhamman.com to request a review. We will investigate the matter and respond within a reasonable timeframe, but our decision is final.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section11" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">11. DISCLAIMERS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-bold text-lg">
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  <strong>No Warranty of Accuracy:</strong> We do not guarantee the accuracy, completeness, or reliability of any information, data, scores, or statistics provided on the Platform. Cricket data is sourced from third parties, and we are not responsible for errors or delays.
                </p>
                <p>
                  <strong>No Warranty of Availability:</strong> We do not guarantee that the Platform will be available at all times or that it will be free from errors, bugs, or interruptions. Technical issues, maintenance, or circumstances beyond our control may cause temporary unavailability.
                </p>
                <p>
                  <strong>No Warranty of Outcomes:</strong> We do not guarantee any particular outcome, ranking, or performance in contests. Success on the Platform depends on your skill, knowledge, and the unpredictable nature of cricket matches.
                </p>
                <p>
                  <strong>Third-Party Links:</strong> The Platform may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of such third-party sites.
                </p>
                <p>
                  <strong>Educational Purpose:</strong> The Platform is designed for entertainment and educational purposes. It should not be considered professional advice or a substitute for expert cricket analysis.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section id="section12" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">12. LIMITATION OF LIABILITY</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-bold text-lg">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DHAMMANJALI INDIA PRIVATE LIMITED, ITS DIRECTORS, OFFICERS, EMPLOYEES, INVESTORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
                </p>
                <p>
                  This includes, but is not limited to, damages for loss of profits, data, goodwill, or other intangible losses, even if we have been advised of the possibility of such damages.
                </p>
                <p>
                  <strong>No Liability for User Actions:</strong> We are not responsible for the actions, conduct, or content of any user on the Platform. You interact with other users at your own risk.
                </p>
                <p>
                  <strong>No Liability for Technical Issues:</strong> We are not liable for any loss or damage resulting from technical failures, server downtime, data loss, or security breaches, except to the extent caused by our gross negligence or willful misconduct.
                </p>
                <p>
                  <strong>No Liability for Third-Party Data:</strong> We are not liable for errors, inaccuracies, or delays in cricket data provided by third-party sources.
                </p>
                <p>
                  <strong>Maximum Liability:</strong> In any event, our total liability to you for all claims arising out of or related to the Platform shall not exceed ₹1,000 (One Thousand Indian Rupees).
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="section13" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">13. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Governing Law:</strong> These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
                </p>
                <p>
                  <strong>Jurisdiction:</strong> Any disputes arising out of or related to these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts located in Prayagraj (Allahabad), Uttar Pradesh, India.
                </p>
                <p>
                  <strong>Dispute Resolution Process:</strong> Before initiating any legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us at legal@dhamman.com. We will make reasonable efforts to resolve the dispute amicably within 30 days.
                </p>
                <p>
                  <strong>Arbitration:</strong> If informal resolution fails, any dispute shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Prayagraj, Uttar Pradesh, by a single arbitrator mutually agreed upon by both parties.
                </p>
                <p>
                  <strong>Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                </p>
              </div>
            </div>
          </section>

          {/* Section 14 */}
          <section id="section14" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">14. MODIFICATIONS TO TERMS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We reserve the right to modify, update, or replace these Terms and Conditions at any time at our sole discretion. Changes may be made to reflect changes in our services, legal requirements, or business practices.
                </p>
                <p>
                  <strong>Notification of Changes:</strong> When we make material changes to these Terms, we will notify you by posting the updated Terms on the Platform with a new "Last Updated" date and/or by sending you an email notification to the address associated with your account.
                </p>
                <p>
                  <strong>Acceptance of Changes:</strong> Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the revised Terms. If you do not agree with the changes, you must stop using the Platform and may terminate your account.
                </p>
                <p>
                  <strong>Review Responsibility:</strong> It is your responsibility to review these Terms periodically to stay informed of any updates. We recommend checking this page regularly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 15 */}
          <section id="section15" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">15. MISCELLANEOUS PROVISIONS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and Fair Play Policy, constitute the entire agreement between you and Dhammanjali India Private Limited regarding the use of the Platform.
                </p>
                <p>
                  <strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable by a court of law, the remaining provisions shall continue in full force and effect.
                </p>
                <p>
                  <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                </p>
                <p>
                  <strong>Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                </p>
                <p>
                  <strong>Force Majeure:</strong> We shall not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, pandemics, government actions, or technical failures.
                </p>
                <p>
                  <strong>Language:</strong> These Terms are written in English. Any translations provided are for convenience only, and the English version shall prevail in case of any discrepancy.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-black mb-4">CONTACT INFORMATION</h2>
                <p className="text-lg leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-lg">
                  <p><strong>Company:</strong> Dhammanjali India Private Limited</p>
                  <p><strong>CIN:</strong> U15490UP2020PTC135324</p>
                  <p><strong>Email:</strong> legal@dhamman.com</p>
                  <p><strong>Support Email:</strong> support@dhamman.com</p>
                  <p><strong>Address:</strong> 1ST FLOOR, 154 KATKA JHUNSI, THANA- JHUNSI DISTRICT PRAYAGRAJ, Allahabad- 211019, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
