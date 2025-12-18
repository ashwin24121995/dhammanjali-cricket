import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              PRIVACY POLICY
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              How We Collect, Use, and Protect Your Personal Information
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-xl mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-black mb-3">YOUR PRIVACY MATTERS</h2>
                <p className="text-lg leading-relaxed">
                  At Dhammanjali India Private Limited, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our fantasy cricket platform. By using our services, you consent to the data practices described in this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-black text-gray-900 mb-4">TABLE OF CONTENTS</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#section1" className="text-blue-600 hover:underline font-semibold">1. Information We Collect</a>
              <a href="#section2" className="text-blue-600 hover:underline font-semibold">2. How We Use Your Information</a>
              <a href="#section3" className="text-blue-600 hover:underline font-semibold">3. Data Storage and Security</a>
              <a href="#section4" className="text-blue-600 hover:underline font-semibold">4. Cookies and Tracking</a>
              <a href="#section5" className="text-blue-600 hover:underline font-semibold">5. Third-Party Services</a>
              <a href="#section6" className="text-blue-600 hover:underline font-semibold">6. Data Sharing and Disclosure</a>
              <a href="#section7" className="text-blue-600 hover:underline font-semibold">7. Your Privacy Rights</a>
              <a href="#section8" className="text-blue-600 hover:underline font-semibold">8. Data Retention</a>
              <a href="#section9" className="text-blue-600 hover:underline font-semibold">9. Children's Privacy</a>
              <a href="#section10" className="text-blue-600 hover:underline font-semibold">10. International Data Transfers</a>
              <a href="#section11" className="text-blue-600 hover:underline font-semibold">11. Changes to Privacy Policy</a>
              <a href="#section12" className="text-blue-600 hover:underline font-semibold">12. Contact Us</a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section1" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-black text-gray-900">1. INFORMATION WE COLLECT</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.1 Personal Information You Provide</h3>
                  <p className="mb-3">
                    When you register for an account on Dhammanjali, we collect personal information that you voluntarily provide to us. This information is necessary to create and maintain your account, verify your eligibility, and provide you with our services.
                  </p>
                  <p className="mb-3">
                    <strong>Account Registration Data:</strong> When you create an account, we collect your full name, email address, date of birth, state of residence, phone number (optional), and password. Your date of birth is used to verify that you meet the minimum age requirement of 18 years. Your state of residence is used to ensure compliance with geographic restrictions.
                  </p>
                  <p className="mb-3">
                    <strong>Profile Information:</strong> You may choose to provide additional profile information such as a profile picture, bio, favorite cricket teams, or other preferences to personalize your experience on the platform.
                  </p>
                  <p>
                    <strong>Verification Documents:</strong> In certain cases, we may request government-issued identification documents (such as Aadhaar card, PAN card, driver's license, or passport) to verify your identity, age, or location. These documents are used solely for verification purposes and are stored securely.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.2 Information Collected Automatically</h3>
                  <p className="mb-3">
                    When you access and use the Dhammanjali platform, we automatically collect certain information about your device, browsing actions, and usage patterns. This information helps us improve our services, diagnose technical problems, and enhance user experience.
                  </p>
                  <p className="mb-3">
                    <strong>Device Information:</strong> We collect information about the device you use to access our platform, including device type, operating system, browser type and version, screen resolution, IP address, and unique device identifiers.
                  </p>
                  <p className="mb-3">
                    <strong>Usage Data:</strong> We collect information about how you interact with our platform, including pages visited, features used, time spent on pages, teams created, contests entered, click patterns, and navigation paths. This data helps us understand user behavior and improve our services.
                  </p>
                  <p className="mb-3">
                    <strong>Location Data:</strong> We collect your approximate geographic location based on your IP address to verify that you are not accessing the platform from a restricted state. We do not collect precise GPS location data unless you explicitly grant permission.
                  </p>
                  <p>
                    <strong>Log Data:</strong> Our servers automatically record log files that include your IP address, browser type, referring/exit pages, date/time stamps, and clickstream data. These logs are used for security monitoring, troubleshooting, and analytics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.3 Information from Third Parties</h3>
                  <p className="mb-3">
                    We may receive information about you from third-party sources to enhance our services and verify the accuracy of the information you provide.
                  </p>
                  <p className="mb-3">
                    <strong>Cricket Data Providers:</strong> We obtain cricket match data, player statistics, and live scores from third-party sports data providers. While this data is about cricket matches and players (not about you personally), it is used to calculate your fantasy team's performance.
                  </p>
                  <p>
                    <strong>Analytics Providers:</strong> We use third-party analytics services (such as Google Analytics) that may collect information about your use of our platform. These services help us understand user behavior and improve our platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-gray-900">2. HOW WE USE YOUR INFORMATION</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We use the information we collect for various purposes related to providing, maintaining, and improving our fantasy cricket platform. Below are the specific ways we use your personal information:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 To Provide and Maintain Our Services</h3>
                  <p>
                    We use your personal information to create and manage your account, authenticate your identity when you log in, process your fantasy team selections, calculate scores based on real cricket match data, display leaderboards and rankings, and provide customer support when you contact us. Your email address is used to send you important account notifications, password reset links, and service updates.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 To Ensure Eligibility and Compliance</h3>
                  <p>
                    We use your date of birth to verify that you are at least 18 years old, as required by law for skill-based gaming platforms in India. We use your state of residence information to ensure that you are not accessing the platform from a restricted state (Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, or Sikkim). We may use verification documents to confirm your identity and prevent fraudulent accounts or multiple account creation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 To Improve and Personalize Your Experience</h3>
                  <p>
                    We analyze usage data to understand how users interact with our platform, identify popular features, and discover areas for improvement. We use this information to personalize your experience by recommending contests, suggesting player selections based on your preferences, and customizing the interface to match your interests. We conduct A/B testing and experiments to optimize user experience and platform performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.4 To Communicate with You</h3>
                  <p>
                    We use your email address to send you important service announcements, such as changes to our Terms and Conditions or Privacy Policy, security alerts, account verification emails, and password reset instructions. With your consent, we may also send you promotional emails about new features, contests, or educational content related to fantasy cricket. You can opt out of promotional emails at any time by clicking the unsubscribe link in the email.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.5 To Ensure Fair Play and Security</h3>
                  <p>
                    We monitor user activity to detect and prevent cheating, collusion, or other violations of our Fair Play Policy. We use device information and IP addresses to identify suspicious patterns, such as multiple accounts created from the same device or location. We implement security measures to protect against unauthorized access, data breaches, and other security threats. We may use your information to investigate and respond to user complaints, disputes, or suspected violations of our Terms and Conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.6 For Legal and Regulatory Compliance</h3>
                  <p>
                    We may use and disclose your information as required by applicable laws, regulations, legal processes, or governmental requests. This includes complying with court orders, subpoenas, or requests from law enforcement agencies. We may also use your information to enforce our Terms and Conditions, protect our rights and property, and ensure the safety and security of our users and the public.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-black text-gray-900">3. DATA STORAGE AND SECURITY</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We take the security of your personal information seriously and implement industry-standard technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Data Storage</h3>
                  <p>
                    Your personal information is stored on secure servers located in India or in data centers operated by reputable cloud service providers. We use encrypted databases to store sensitive information such as passwords (which are hashed using bcrypt), email addresses, and verification documents. Your password is never stored in plain text and cannot be retrieved by our staff.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Security Measures</h3>
                  <p>
                    We implement multiple layers of security to protect your data, including encryption of data in transit using HTTPS/TLS protocols, secure authentication mechanisms using JWT (JSON Web Tokens), regular security audits and vulnerability assessments, access controls that limit employee access to personal data on a need-to-know basis, firewalls and intrusion detection systems to prevent unauthorized access, and regular backups to prevent data loss. Despite these measures, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.3 Your Responsibility</h3>
                  <p>
                    You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You should choose a strong, unique password and never share it with anyone. If you suspect that your account has been compromised, you must immediately change your password and notify us at security@dhamman.com. You should also ensure that you log out of your account when using shared or public computers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.4 Data Breach Notification</h3>
                  <p>
                    In the unlikely event of a data breach that compromises your personal information, we will notify you via email within 72 hours of becoming aware of the breach, as required by applicable data protection laws. The notification will include information about the nature of the breach, the types of data affected, the steps we are taking to address the breach, and recommendations for protecting yourself from potential harm.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">4. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our platform, remember your preferences, and analyze how you use our services.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 What Are Cookies?</h3>
                  <p>
                    Cookies are small text files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences (such as login status, language preference, and other display settings) over a period of time, so you don't have to re-enter them whenever you return to the site or navigate between pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.2 Types of Cookies We Use</h3>
                  <p className="mb-3">
                    <strong>Essential Cookies:</strong> These cookies are necessary for the platform to function properly. They enable core functionality such as user authentication, session management, and security features. You cannot opt out of essential cookies as they are required for the platform to work.
                  </p>
                  <p className="mb-3">
                    <strong>Functional Cookies:</strong> These cookies remember your preferences and choices (such as your username, language preference, or theme settings) to provide a more personalized experience. They enhance usability but are not strictly necessary for the platform to function.
                  </p>
                  <p className="mb-3">
                    <strong>Analytics Cookies:</strong> We use analytics cookies (such as Google Analytics) to collect information about how visitors use our platform. This includes data about which pages are visited most often, how long users spend on each page, and what links they click. This information is aggregated and anonymized, and it helps us improve our platform's design and functionality.
                  </p>
                  <p>
                    <strong>Advertising Cookies:</strong> Currently, we do not use advertising cookies. However, if we introduce advertising in the future, we will update this policy and provide you with the option to opt out of advertising cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Managing Cookies</h3>
                  <p>
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to alert you when a cookie is being sent. However, if you disable or refuse cookies, some parts of the platform may not function properly. You can learn more about managing cookies by visiting your browser's help section or by visiting www.allaboutcookies.org.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">5. THIRD-PARTY SERVICES</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We use certain third-party services to help us operate and improve our platform. These third parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 Analytics Services</h3>
                  <p>
                    We use Google Analytics to analyze how users interact with our platform. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site. We use this information to improve our platform and understand user behavior. Google Analytics uses cookies to collect this information. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 Cricket Data Providers</h3>
                  <p>
                    We obtain real-time cricket match data, player statistics, and live scores from third-party sports data providers. These providers do not have access to your personal information. We use their data solely to calculate fantasy team scores and display match information on our platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.3 Cloud Hosting Services</h3>
                  <p>
                    We use reputable cloud hosting providers to store and process data. These providers implement industry-standard security measures to protect data stored on their servers. Our agreements with these providers include strict data protection and confidentiality clauses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.4 Email Service Providers</h3>
                  <p>
                    We use third-party email service providers to send you transactional emails (such as account verification, password reset, and service notifications). These providers have access to your email address but are contractually prohibited from using it for any purpose other than sending emails on our behalf.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.5 Third-Party Links</h3>
                  <p>
                    Our platform may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">6. DATA SHARING AND DISCLOSURE</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes. However, we may share your information in the following limited circumstances:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.1 With Your Consent</h3>
                  <p>
                    We may share your information with third parties when you explicitly consent to such sharing. For example, if you choose to share your leaderboard ranking on social media, we will facilitate that sharing with your permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.2 Service Providers</h3>
                  <p>
                    We may share your information with trusted third-party service providers who assist us in operating our platform, conducting our business, or servicing you. These service providers have access to your personal information only to perform specific tasks on our behalf and are contractually obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.3 Legal Requirements</h3>
                  <p>
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (such as a court order, subpoena, or government agency). We may also disclose your information when we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.4 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you via email and/or a prominent notice on our platform before your information is transferred and becomes subject to a different privacy policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.5 Aggregated and Anonymized Data</h3>
                  <p>
                    We may share aggregated, anonymized data that does not personally identify you with third parties for research, marketing, analytics, or other purposes. For example, we might share statistics about user engagement or contest participation trends without revealing individual user identities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-gray-900">7. YOUR PRIVACY RIGHTS</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  You have certain rights regarding your personal information. We are committed to respecting these rights and providing you with control over your data.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.1 Right to Access</h3>
                  <p>
                    You have the right to request access to the personal information we hold about you. You can view and update most of your account information by logging into your account settings. If you need additional information or a copy of your data, you can contact us at privacy@dhamman.com, and we will provide it to you within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.2 Right to Correction</h3>
                  <p>
                    You have the right to request correction of any inaccurate or incomplete personal information we hold about you. You can update your name, email address, and other profile information directly in your account settings. If you need assistance correcting your information, please contact us at support@dhamman.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.3 Right to Deletion</h3>
                  <p>
                    You have the right to request deletion of your personal information, subject to certain legal exceptions. To delete your account and personal information, please contact us at privacy@dhamman.com. We will process your request within 30 days. Please note that we may retain certain information as required by law or for legitimate business purposes (such as preventing fraud or enforcing our Terms and Conditions). After deletion, you will no longer be able to access your account or participate in contests.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.4 Right to Data Portability</h3>
                  <p>
                    You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format. You can request data portability by contacting us at privacy@dhamman.com. We will provide your data in CSV or JSON format within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.5 Right to Object</h3>
                  <p>
                    You have the right to object to certain types of data processing, such as processing for direct marketing purposes. You can opt out of promotional emails by clicking the unsubscribe link in any marketing email we send you. You can also contact us at privacy@dhamman.com to exercise this right.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.6 Right to Withdraw Consent</h3>
                  <p>
                    If we are processing your personal information based on your consent, you have the right to withdraw that consent at any time. Withdrawing consent will not affect the lawfulness of processing based on consent before its withdrawal. To withdraw consent, please contact us at privacy@dhamman.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.7 How to Exercise Your Rights</h3>
                  <p>
                    To exercise any of these rights, please contact us at privacy@dhamman.com with your request. We may ask you to verify your identity before processing your request to ensure the security of your personal information. We will respond to your request within 30 days. If we cannot fulfill your request, we will explain why.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section8" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">8. DATA RETENTION</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.1 Active Accounts</h3>
                  <p>
                    If your account is active, we will retain your personal information for as long as you continue to use the platform. This includes your account details, profile information, contest history, and usage data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.2 Inactive Accounts</h3>
                  <p>
                    If you do not log in to your account for a period of 3 years, we may consider your account inactive and may delete your personal information after providing you with reasonable notice via email. You can reactivate your account by logging in before the deletion date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.3 Deleted Accounts</h3>
                  <p>
                    If you request deletion of your account, we will delete your personal information within 30 days, except for information that we are required to retain by law or for legitimate business purposes. For example, we may retain transaction records for tax and accounting purposes, and we may retain information necessary to prevent fraud or enforce our Terms and Conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.4 Legal Retention Requirements</h3>
                  <p>
                    We may be required by law to retain certain information for specific periods. For example, Indian tax laws require us to retain financial records for a minimum of 7 years. We will retain such information only for as long as required by applicable laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.5 Backup and Archival Copies</h3>
                  <p>
                    Even after you delete your account, copies of your information may remain in backup or archival systems for a limited period. These copies are maintained for disaster recovery and business continuity purposes and are not accessible for normal business operations. Backup copies are automatically deleted according to our backup retention schedule.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section9" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">9. CHILDREN'S PRIVACY</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-bold text-lg text-red-600">
                  Our platform is NOT intended for children under the age of 18. We do not knowingly collect personal information from anyone under 18 years of age.
                </p>
                <p>
                  If you are under 18, you must not use this platform or provide any personal information to us. If we discover that we have collected personal information from a child under 18, we will delete that information immediately. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us at privacy@dhamman.com so that we can take appropriate action.
                </p>
                <p>
                  We verify the age of all users during registration by requiring them to provide their date of birth. We may also request government-issued identification to verify age if we suspect that a user is under 18. Users who are found to be under 18 will have their accounts immediately terminated.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section10" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">10. INTERNATIONAL DATA TRANSFERS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our platform is operated in India, and your personal information is primarily stored on servers located in India. However, some of our third-party service providers (such as cloud hosting providers or analytics services) may be located in other countries.
                </p>
                <p>
                  When we transfer your personal information to other countries, we ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws. These safeguards may include standard contractual clauses approved by regulatory authorities, adequacy decisions by the European Commission or other relevant authorities, or other legally recognized transfer mechanisms.
                </p>
                <p>
                  By using our platform, you consent to the transfer of your personal information to countries outside of India, including countries that may have different data protection laws than your country of residence. We will take all reasonable steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section11" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">11. CHANGES TO THIS PRIVACY POLICY</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes to this policy, we will notify you by posting the updated policy on this page with a new "Last Updated" date and/or by sending you an email notification.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal information. Your continued use of the platform after any changes to this Privacy Policy constitutes your acceptance of the revised policy.
                </p>
                <p>
                  If we make changes that significantly affect your privacy rights, we will provide more prominent notice (such as a pop-up notification on the platform or a dedicated email) and may require you to explicitly consent to the changes before continuing to use the platform.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section id="section12" className="mb-12 scroll-mt-24">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black mb-4">12. CONTACT US</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-lg">
                    <p><strong>Company:</strong> Dhammanjali India Private Limited</p>
                    <p><strong>CIN:</strong> U15490UP2020PTC135324</p>
                    <p><strong>Privacy Email:</strong> privacy@dhamman.com</p>
                    <p><strong>Support Email:</strong> support@dhamman.com</p>
                    <p><strong>Security Email:</strong> security@dhamman.com</p>
                    <p><strong>Address:</strong> 1ST FLOOR, 154 KATKA JHUNSI, THANA- JHUNSI DISTRICT PRAYAGRAJ, Allahabad- 211019, Uttar Pradesh, India</p>
                  </div>
                  <p className="text-lg leading-relaxed mt-6">
                    We will respond to your inquiry within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
