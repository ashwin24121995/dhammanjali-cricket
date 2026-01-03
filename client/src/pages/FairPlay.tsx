import { Shield, AlertTriangle, Eye, Ban, UserX, Scale, CheckCircle } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-emerald-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              FAIR PLAY POLICY
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              Maintaining Integrity, Ensuring Fair Competition for All Players
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-8 rounded-xl mb-12">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-black mb-3">OUR COMMITMENT TO FAIR PLAY</h2>
                <p className="text-lg leading-relaxed">
                  At KEMETION, we are committed to providing a fair, transparent, and enjoyable fantasy cricket experience for all users. Fair play is the foundation of our platform, and we have zero tolerance for cheating, collusion, or any form of unfair advantage. This Fair Play Policy outlines our principles, the measures we take to ensure fair competition, prohibited activities, and the consequences for violations.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-black text-gray-900 mb-4">TABLE OF CONTENTS</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#section1" className="text-green-600 hover:underline font-semibold">1. Fair Play Principles</a>
              <a href="#section2" className="text-green-600 hover:underline font-semibold">2. Prohibited Activities</a>
              <a href="#section3" className="text-green-600 hover:underline font-semibold">3. Multiple Accounts Policy</a>
              <a href="#section4" className="text-green-600 hover:underline font-semibold">4. Collusion and Match-Fixing</a>
              <a href="#section5" className="text-green-600 hover:underline font-semibold">5. Bot and Automation Detection</a>
              <a href="#section6" className="text-green-600 hover:underline font-semibold">6. Account Security</a>
              <a href="#section7" className="text-green-600 hover:underline font-semibold">7. Reporting Violations</a>
              <a href="#section8" className="text-green-600 hover:underline font-semibold">8. Investigation Process</a>
              <a href="#section9" className="text-green-600 hover:underline font-semibold">9. Penalties and Consequences</a>
              <a href="#section10" className="text-green-600 hover:underline font-semibold">10. Appeals Process</a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section1" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-black text-gray-900">1. FAIR PLAY PRINCIPLES</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our Fair Play Policy is built on core principles that guide every aspect of our platform and ensure that all users have an equal opportunity to compete and succeed based on their cricket knowledge and strategic skills.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.1 Equal Opportunity</h3>
                  <p>
                    Every user on KEMETION has equal access to the same information, features, and opportunities. We do not provide any user with preferential treatment, insider information, or unfair advantages. All contests are open to eligible users on the same terms, and all players have access to the same player statistics, match data, and platform features. We believe that success on our platform should be determined solely by cricket knowledge, strategic thinking, and skill—not by cheating or manipulation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.2 Transparency</h3>
                  <p>
                    We are committed to transparency in how our platform operates. Our scoring system is clearly explained in the "How to Play" section, and all scoring rules are applied consistently to all users. We provide detailed explanations of how points are calculated, how leaderboards are determined, and how winners are selected. If we make changes to our scoring system or contest rules, we will notify all users in advance and provide clear explanations of the changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.3 Integrity</h3>
                  <p>
                    We maintain the highest standards of integrity in all our operations. We use verified, real-time cricket data from reputable third-party providers to ensure accuracy and fairness. We do not manipulate scores, alter results, or favor any user or group of users. Our platform is designed to reward skill and knowledge, not luck or manipulation. We continuously monitor for suspicious activity and take immediate action against any violations of our Fair Play Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.4 Respect</h3>
                  <p>
                    We expect all users to treat each other with respect and sportsmanship. Harassment, abusive language, threats, or discriminatory behavior of any kind will not be tolerated. Fantasy cricket is a game, and it should be enjoyed in a spirit of friendly competition. Users who engage in toxic behavior, trolling, or harassment will face penalties, including account suspension or permanent ban.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.5 Education</h3>
                  <p>
                    As a free-to-play educational platform, we are committed to helping users learn about cricket strategy and improve their fantasy cricket skills. We provide comprehensive tutorials, strategy guides, and educational content to help users understand the game and make informed decisions. We believe that an educated user base leads to more competitive, enjoyable contests for everyone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-6">
                <Ban className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-black text-gray-900">2. PROHIBITED ACTIVITIES</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The following activities are strictly prohibited on the KEMETION platform. Engaging in any of these activities will result in immediate investigation and may lead to account suspension, permanent ban, and legal action if applicable.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Cheating and Exploitation</h3>
                  <p>
                    <strong>Using Bugs or Exploits:</strong> Deliberately exploiting bugs, glitches, or vulnerabilities in the platform to gain an unfair advantage is strictly prohibited. If you discover a bug or vulnerability, you must report it immediately to security@dhammanji.com. Users who exploit bugs instead of reporting them will face severe penalties.
                  </p>
                  <p className="mt-3">
                    <strong>Manipulating the System:</strong> Any attempt to manipulate the scoring system, leaderboards, or contest results through technical means, hacking, or other methods is prohibited. This includes attempting to alter player statistics, modify scores, or interfere with the platform's normal operation.
                  </p>
                  <p className="mt-3">
                    <strong>Unauthorized Access:</strong> Attempting to gain unauthorized access to other users' accounts, our servers, databases, or any part of our infrastructure is strictly prohibited and may result in legal action.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Unfair Information Advantage</h3>
                  <p>
                    <strong>Insider Information:</strong> Using insider information about cricket matches, player availability, pitch conditions, or other non-public information to gain an unfair advantage is prohibited. All team selections must be based on publicly available information only.
                  </p>
                  <p className="mt-3">
                    <strong>Data Scraping:</strong> Using automated tools, bots, or scripts to scrape data from our platform or from cricket data sources in a manner that gives you an unfair advantage over other users is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Account Manipulation</h3>
                  <p>
                    <strong>Creating Multiple Accounts:</strong> Creating multiple accounts to circumvent contest limits, gain additional entries, or manipulate leaderboards is strictly prohibited. Each user is allowed only one account. (See Section 3 for details)
                  </p>
                  <p className="mt-3">
                    <strong>Account Sharing:</strong> Sharing your account credentials with others or allowing others to use your account is prohibited. You are responsible for all activity that occurs under your account.
                  </p>
                  <p className="mt-3">
                    <strong>Selling or Transferring Accounts:</strong> Selling, buying, trading, or transferring accounts is strictly prohibited. Your account is personal and non-transferable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.4 Collusion and Coordination</h3>
                  <p>
                    <strong>Team Coordination:</strong> Coordinating with other users to create complementary teams, share strategies, or manipulate contest outcomes is prohibited. Each user must make independent decisions about their team selections.
                  </p>
                  <p className="mt-3">
                    <strong>Ring Play:</strong> Forming groups or "rings" of users who coordinate their team selections to dominate contests or exclude other users from winning is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.5 Abusive Behavior</h3>
                  <p>
                    <strong>Harassment and Threats:</strong> Harassing, threatening, or intimidating other users through any means (including messages, comments, or external platforms) is prohibited.
                  </p>
                  <p className="mt-3">
                    <strong>Hate Speech and Discrimination:</strong> Using hate speech, discriminatory language, or engaging in behavior that targets individuals based on race, religion, gender, nationality, or any other protected characteristic is strictly prohibited.
                  </p>
                  <p className="mt-3">
                    <strong>Spam and Advertising:</strong> Spamming, posting unsolicited advertisements, or promoting external services or products on our platform is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.6 Fraudulent Activity</h3>
                  <p>
                    <strong>Identity Fraud:</strong> Providing false information during registration, using fake identification documents, or impersonating another person is strictly prohibited.
                  </p>
                  <p className="mt-3">
                    <strong>Age and Location Fraud:</strong> Falsifying your age or location to circumvent our eligibility requirements (18+ age requirement or state restrictions) is prohibited and may result in legal consequences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <UserX className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-gray-900">3. MULTIPLE ACCOUNTS POLICY</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Each user is permitted to have only one account on the KEMETION platform. Creating or operating multiple accounts is a serious violation of our Fair Play Policy and undermines the integrity of our contests.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Why Multiple Accounts Are Prohibited</h3>
                  <p>
                    Multiple accounts give users an unfair advantage by allowing them to enter more teams in contests than intended, test different strategies without risk, manipulate leaderboards by coordinating between accounts, and circumvent contest entry limits. This creates an uneven playing field and diminishes the experience for legitimate users who play by the rules.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 How We Detect Multiple Accounts</h3>
                  <p>
                    We use sophisticated detection systems to identify users who create or operate multiple accounts. Our systems analyze various factors, including device fingerprints (unique identifiers for your device), IP addresses and geographic locations, email address patterns and similarities, phone numbers and verification data, payment information (if applicable in the future), behavioral patterns and playing styles, and timing of account creation and activity. If our systems detect that you are operating multiple accounts, all associated accounts will be subject to investigation and potential suspension.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.3 Legitimate Reasons for Similar Accounts</h3>
                  <p>
                    We understand that in some cases, multiple accounts from the same household or location may be legitimate (for example, family members living together). If you share a household with another KEMETION user, please ensure that each person has their own unique email address, phone number, and device. If our systems flag your accounts as potentially related, you may be asked to provide verification that you are separate individuals. Legitimate users have nothing to worry about—our investigation process is designed to distinguish between genuine multi-user households and fraudulent multiple account schemes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.4 Consequences of Multiple Accounts</h3>
                  <p>
                    If you are found to be operating multiple accounts, all associated accounts will be permanently banned. Any leaderboard rankings, contest entries, or achievements associated with those accounts will be forfeited. You will be prohibited from creating new accounts on the platform. In cases of repeated or egregious violations, we may take legal action.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">4. COLLUSION AND MATCH-FIXING</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Collusion occurs when two or more users coordinate their actions to gain an unfair advantage or manipulate contest outcomes. Match-fixing refers to any attempt to influence the outcome of real cricket matches for fantasy cricket gain. Both are strictly prohibited.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 What Constitutes Collusion?</h3>
                  <p>
                    Collusion includes coordinating team selections with other users to create complementary teams that cover all possible outcomes, sharing strategies or information with other users to gain a collective advantage, agreeing to split winnings or rewards (even though our platform is free-to-play, this principle applies to leaderboard positions and recognition), creating "dummy" teams to help another user win, and using multiple accounts or working with others to dominate contests.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.2 How We Detect Collusion</h3>
                  <p>
                    Our systems use advanced algorithms to detect patterns that may indicate collusion, including unusual similarity in team selections between users, coordinated timing of team submissions, patterns of communication between users (if available), statistical anomalies in contest participation, and repeated interactions between the same users across multiple contests. When our systems detect potential collusion, we conduct a thorough investigation before taking action.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Match-Fixing and Real Cricket Integrity</h3>
                  <p>
                    While KEMETION is a fantasy cricket platform and does not involve real money, we take the integrity of real cricket matches seriously. If we have reason to believe that a user is involved in or has knowledge of match-fixing, spot-fixing, or other corruption in real cricket matches, we will report this information to the appropriate cricket authorities and law enforcement agencies. We will also immediately ban any user found to be using information about fixed matches to gain an advantage on our platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.4 Consequences of Collusion</h3>
                  <p>
                    Users found to be engaging in collusion will have all associated accounts permanently banned. All leaderboard positions and achievements will be forfeited. We may publicly disclose (in anonymized form) information about collusion schemes to educate the community. In severe cases, we may pursue legal action.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">5. BOT AND AUTOMATION DETECTION</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The use of bots, scripts, or automated tools to interact with the KEMETION platform is strictly prohibited. Our platform is designed for human users to compete based on their cricket knowledge and strategic thinking, not for automated systems.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 Prohibited Automation</h3>
                  <p>
                    The following types of automation are prohibited: automated team selection or submission, bots that create or manage multiple accounts, scripts that scrape data from our platform, automated tools that analyze player statistics and make selections without human input, any software that interacts with our platform without human intervention, and tools that bypass our security measures or CAPTCHA systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 How We Detect Bots</h3>
                  <p>
                    We employ multiple layers of bot detection, including behavioral analysis (bots typically exhibit inhuman patterns of interaction), timing analysis (bots often submit teams or make selections with suspicious timing), CAPTCHA and challenge systems, device fingerprinting and browser analysis, and machine learning algorithms that identify bot-like behavior. Our detection systems are continuously updated to stay ahead of new bot technologies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.3 Legitimate Tools and Assistance</h3>
                  <p>
                    While automation is prohibited, we understand that users may want to use external tools to help them make informed decisions. The following are generally acceptable: using publicly available cricket statistics websites to research players, using spreadsheets or calculators to analyze player performance, reading strategy guides and articles about fantasy cricket, and discussing strategies with friends or in public forums (as long as it doesn't cross into collusion). The key distinction is that the final team selection and submission must be done manually by a human user through our platform interface.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.4 Consequences of Using Bots</h3>
                  <p>
                    Users found to be using bots or automated tools will have their accounts immediately suspended pending investigation. If bot use is confirmed, the account will be permanently banned. All contest entries and leaderboard positions will be forfeited. We may pursue legal action against users who create or distribute bots designed to exploit our platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">6. ACCOUNT SECURITY</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Maintaining the security of your account is essential for fair play. You are responsible for keeping your account credentials secure and for all activity that occurs under your account.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.1 Your Responsibilities</h3>
                  <p>
                    Choose a strong, unique password that you don't use for other websites. Never share your password with anyone, including friends, family, or people claiming to be KEMETION staff. Log out of your account when using shared or public computers. Enable two-factor authentication if we offer it in the future. Monitor your account for suspicious activity and report it immediately. Keep your email address up to date so we can contact you about security issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.2 What We Do to Protect Your Account</h3>
                  <p>
                    We implement industry-standard security measures including password hashing using bcrypt (we never store passwords in plain text), secure session management using JWT tokens, HTTPS/TLS encryption for all data transmission, regular security audits and vulnerability assessments, monitoring for suspicious login attempts and unauthorized access, and account recovery procedures that verify your identity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.3 If Your Account Is Compromised</h3>
                  <p>
                    If you suspect that your account has been compromised or accessed without your authorization, immediately change your password through the "Forgot Password" link, contact us at security@dhammanji.com with details of the suspected compromise, review your account activity for any unauthorized actions, and check your email for any password reset or account modification notifications. We will investigate the incident and take appropriate action to secure your account. However, you remain responsible for activity that occurs under your account until you report the compromise to us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.4 Phishing and Scams</h3>
                  <p>
                    Be aware of phishing attempts and scams. KEMETION will never ask you for your password via email, phone, or any other means. We will never ask you to send money or provide payment information (our platform is completely free). We will never ask you to click on suspicious links or download files from unsolicited emails. If you receive any suspicious communications claiming to be from KEMETION, do not respond and report it to security@dhammanji.com immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-black text-gray-900">7. REPORTING VIOLATIONS</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We rely on our community to help us maintain a fair and enjoyable platform. If you witness or suspect a violation of our Fair Play Policy, we encourage you to report it.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.1 What to Report</h3>
                  <p>
                    You should report suspected cheating or exploitation, multiple accounts operated by the same person, collusion or coordination between users, use of bots or automated tools, abusive behavior or harassment, bugs or vulnerabilities that could be exploited, and any other activity that violates our Fair Play Policy or Terms and Conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.2 How to Report</h3>
                  <p>
                    To report a violation, send an email to fairplay@dhammanji.com with a clear description of the violation, the username(s) of the user(s) involved (if known), the date and time of the incident, any evidence you have (screenshots, links, etc.), and your contact information (so we can follow up if needed). All reports are treated confidentially, and we do not disclose the identity of reporters to the accused party.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.3 False Reports</h3>
                  <p>
                    While we encourage users to report legitimate concerns, submitting false or malicious reports is a violation of our policy. False reports waste our resources and can harm innocent users. If we determine that a user has repeatedly submitted false reports with malicious intent, that user may face penalties including account suspension.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.4 What Happens After You Report</h3>
                  <p>
                    After you submit a report, we will acknowledge receipt of your report (usually within 24 hours), conduct a thorough investigation (which may take several days depending on complexity), take appropriate action if a violation is confirmed, and notify you of the outcome (to the extent permitted by privacy considerations). Please note that we cannot always share specific details about the action taken due to privacy concerns, but we take all reports seriously and investigate them thoroughly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section8" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-gray-900">8. INVESTIGATION PROCESS</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  When a potential violation of our Fair Play Policy is detected (either through our automated systems or through user reports), we follow a structured investigation process to ensure fairness and accuracy.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.1 Initial Review</h3>
                  <p>
                    Our Fair Play team conducts an initial review of the evidence to determine whether there is sufficient basis for a full investigation. This includes reviewing automated system alerts, examining user reports and supporting evidence, checking account history and activity patterns, and analyzing relevant data and logs. If the initial review suggests a potential violation, we proceed to a full investigation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.2 Full Investigation</h3>
                  <p>
                    During a full investigation, we collect and analyze all relevant data, including account information, device fingerprints, IP addresses, contest entries and team selections, timing and behavioral patterns, and any other information that may be relevant. We use both automated analysis tools and human judgment to evaluate the evidence. We consider alternative explanations and ensure that we have sufficient evidence before concluding that a violation has occurred.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.3 Account Suspension During Investigation</h3>
                  <p>
                    In some cases, we may temporarily suspend an account while an investigation is ongoing. This is done to prevent further potential violations and to protect the integrity of ongoing contests. If your account is suspended during an investigation, you will be notified via email with an explanation of the reason for the suspension. Temporary suspensions do not necessarily mean that we have concluded you violated our policy—they are a precautionary measure while we gather and review evidence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.4 Investigation Outcomes</h3>
                  <p>
                    After completing an investigation, we will reach one of the following conclusions: No Violation Found (the account is restored to full standing, and any temporary suspension is lifted), Violation Confirmed (penalties are applied as described in Section 9), or Inconclusive (if we cannot definitively determine whether a violation occurred, we may issue a warning and continue monitoring the account). You will be notified of the outcome via email.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.5 Confidentiality</h3>
                  <p>
                    We treat all investigations confidentially. We do not publicly disclose the details of individual investigations or the identities of users under investigation. However, we may share anonymized information about types of violations and enforcement actions to educate the community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section9" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">9. PENALTIES AND CONSEQUENCES</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Violations of our Fair Play Policy result in penalties that are proportionate to the severity and frequency of the violation. Our goal is to maintain a fair platform while giving users who make honest mistakes an opportunity to correct their behavior.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.1 Types of Penalties</h3>
                  <p className="mb-3">
                    <strong>Warning:</strong> For minor first-time violations or behavior that may have been unintentional, we may issue a warning. The warning will explain the violation and remind you of our Fair Play Policy. No other action is taken, but the warning remains on your account record. Repeated violations after a warning will result in more severe penalties.
                  </p>
                  <p className="mb-3">
                    <strong>Contest Disqualification:</strong> If a violation is detected in a specific contest, you may be disqualified from that contest. Your team will be removed from the leaderboard, and you will forfeit any ranking or recognition associated with that contest.
                  </p>
                  <p className="mb-3">
                    <strong>Temporary Suspension:</strong> For moderate violations or repeated minor violations, we may suspend your account for a specified period (typically 7 to 30 days). During the suspension, you will not be able to log in, create teams, or participate in contests. After the suspension period ends, your account will be restored, but the violation will remain on your record.
                  </p>
                  <p className="mb-3">
                    <strong>Permanent Ban:</strong> For serious violations (such as cheating, multiple accounts, collusion, or bot use) or repeated violations after warnings and suspensions, we will permanently ban your account. A permanent ban means you will never be able to use that account again, and you are prohibited from creating new accounts on the platform.
                  </p>
                  <p>
                    <strong>Legal Action:</strong> In cases involving hacking, fraud, threats, or other illegal activity, we may report the matter to law enforcement and pursue legal action. This may result in criminal charges or civil lawsuits.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.2 Factors Considered in Determining Penalties</h3>
                  <p>
                    When determining the appropriate penalty, we consider the severity of the violation (how much it impacted other users and the integrity of contests), intent (whether the violation was deliberate or accidental), frequency (whether this is a first-time offense or a repeated pattern), impact (how many contests or users were affected), cooperation (whether you cooperated with the investigation and took responsibility), and prior history (whether you have previous violations on your record).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.3 Additional Consequences</h3>
                  <p>
                    In addition to account penalties, violations may result in forfeiture of all leaderboard rankings and achievements, removal from any "top players" or recognition lists, loss of access to any special features or privileges, and notification to other users (in anonymized form) about the type of violation to educate the community.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.4 No Refunds or Compensation</h3>
                  <p>
                    Since KEMETION is a free-to-play platform with no real money involved, there are no refunds or financial compensation issues. However, please note that if we introduce any paid features in the future, users who are banned for Fair Play violations will not be entitled to refunds for any purchases made before the ban.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section10" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">10. APPEALS PROCESS</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  If you believe that a penalty was applied to your account in error, you have the right to appeal the decision. We take appeals seriously and will conduct a thorough review of your case.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.1 How to Submit an Appeal</h3>
                  <p>
                    To submit an appeal, send an email to appeals@dhammanji.com within 30 days of receiving the penalty notification. Your appeal should include your username, the date you received the penalty notification, a clear explanation of why you believe the penalty was applied in error, any evidence that supports your appeal (screenshots, logs, etc.), and your contact information. Appeals submitted after 30 days may not be considered.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.2 Appeals Review Process</h3>
                  <p>
                    When we receive your appeal, a different member of our Fair Play team (not the person who made the original decision) will review your case. The reviewer will re-examine all evidence, consider any new information you provided, and make an independent determination. The appeals process typically takes 7 to 14 business days, depending on the complexity of the case. We will notify you of the outcome via email.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.3 Possible Outcomes of an Appeal</h3>
                  <p>
                    <strong>Appeal Granted:</strong> If we determine that the penalty was applied in error, we will remove the penalty from your account, restore your account to full standing, and apologize for the error.
                  </p>
                  <p className="mt-3">
                    <strong>Penalty Reduced:</strong> If we find that a penalty was partially justified but too severe, we may reduce the penalty (for example, changing a permanent ban to a temporary suspension).
                  </p>
                  <p className="mt-3">
                    <strong>Appeal Denied:</strong> If we determine that the penalty was correctly applied, the original penalty will remain in effect. Our decision on appeals is final.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.4 Frivolous Appeals</h3>
                  <p>
                    While we respect your right to appeal, submitting frivolous or abusive appeals (for example, repeatedly appealing the same decision without new evidence, or submitting appeals that contain threats or abusive language) may result in additional penalties. Please use the appeals process responsibly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Statement */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black mb-4">OUR COMMITMENT TO YOU</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Fair play is not just a policy—it's a core value that defines the KEMETION platform. We are committed to maintaining a level playing field where every user has an equal opportunity to compete and succeed based on their cricket knowledge and strategic skills. We continuously invest in technology and human resources to detect and prevent violations, and we take swift action against those who try to cheat the system.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    At the same time, we recognize that honest mistakes can happen, and we strive to be fair and reasonable in our enforcement actions. If you ever have questions about our Fair Play Policy or are unsure whether a particular action would be considered a violation, please contact us at fairplay@dhammanji.com before taking that action. We're here to help you enjoy fantasy cricket in a fair and responsible manner.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Thank you for being part of the KEMETION community and for your commitment to fair play. Together, we can create a platform that is enjoyable, competitive, and fair for everyone.
                  </p>
                  <div className="mt-6 space-y-2 text-lg">
                    <p><strong>Fair Play Email:</strong> fairplay@dhammanji.com</p>
                    <p><strong>Appeals Email:</strong> appeals@dhammanji.com</p>
                    <p><strong>Security Email:</strong> security@dhammanji.com</p>
                    <p><strong>General Support:</strong> support@dhammanji.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
