import { Heart, Clock, AlertCircle, Shield, Users, Phone, CheckCircle, TrendingUp } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              RESPONSIBLE GAMING
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
              Play Smart, Stay Healthy, Enjoy Fantasy Cricket Responsibly
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
              <Heart className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-black mb-3">YOUR WELLBEING MATTERS</h2>
                <p className="text-lg leading-relaxed">
                  At Dhammanjali, we believe that fantasy cricket should be an enjoyable, educational, and positive experience. While our platform is completely free-to-play with no real money involved, we recognize that any form of gaming—even skill-based fantasy sports—should be approached responsibly. This Responsible Gaming page provides guidance on maintaining healthy gaming habits, recognizing potential issues, and accessing support if needed. We are committed to promoting responsible gaming and ensuring that our platform remains a safe, balanced, and enjoyable space for all users.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-black text-gray-900 mb-4">TABLE OF CONTENTS</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <a href="#section1" className="text-blue-600 hover:underline font-semibold">1. What is Responsible Gaming?</a>
              <a href="#section2" className="text-blue-600 hover:underline font-semibold">2. Healthy Gaming Habits</a>
              <a href="#section3" className="text-blue-600 hover:underline font-semibold">3. Time Management</a>
              <a href="#section4" className="text-blue-600 hover:underline font-semibold">4. Recognizing Problem Behavior</a>
              <a href="#section5" className="text-blue-600 hover:underline font-semibold">5. Self-Assessment Tools</a>
              <a href="#section6" className="text-blue-600 hover:underline font-semibold">6. Setting Personal Limits</a>
              <a href="#section7" className="text-blue-600 hover:underline font-semibold">7. Taking Breaks</a>
              <a href="#section8" className="text-blue-600 hover:underline font-semibold">8. Support and Resources</a>
              <a href="#section9" className="text-blue-600 hover:underline font-semibold">9. For Parents and Guardians</a>
              <a href="#section10" className="text-blue-600 hover:underline font-semibold">10. Our Commitment</a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section1" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-black text-gray-900">1. WHAT IS RESPONSIBLE GAMING?</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Responsible gaming means enjoying fantasy cricket in a way that is balanced, healthy, and sustainable. It involves being mindful of how much time and mental energy you invest in the game, maintaining a healthy perspective on competition and outcomes, and ensuring that fantasy cricket enhances your life rather than detracting from it.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.1 Why Responsible Gaming Matters</h3>
                  <p>
                    Even though Dhammanjali is a free-to-play platform with no real money at stake, it's still important to approach fantasy cricket responsibly. Spending excessive time on any activity—even a free one—can impact your work, studies, relationships, physical health, and overall wellbeing. Fantasy cricket should be a fun hobby that complements your life, not something that consumes it. By practicing responsible gaming, you can enjoy the educational and entertainment value of fantasy cricket while maintaining balance in all areas of your life.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.2 Our Free-to-Play Model and Responsible Gaming</h3>
                  <p>
                    One of the reasons we chose a free-to-play model is to remove the financial risks and pressures associated with real-money fantasy sports. You never have to worry about losing money, chasing losses, or making decisions based on financial incentives. This allows you to focus purely on the educational and strategic aspects of fantasy cricket. However, we still encourage responsible gaming because time and mental wellbeing are valuable resources that deserve protection, just like money.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1.3 Key Principles of Responsible Gaming</h3>
                  <p>
                    <strong>Balance:</strong> Fantasy cricket should be one of many activities in your life, not the only one. Maintain a healthy balance between gaming, work/studies, physical activity, social relationships, and other hobbies.
                  </p>
                  <p className="mt-3">
                    <strong>Perspective:</strong> Remember that fantasy cricket is a game. Winning and losing are part of the experience, and neither should define your self-worth or emotional state. Keep outcomes in perspective and don't let them affect your mood or relationships.
                  </p>
                  <p className="mt-3">
                    <strong>Control:</strong> You should always feel in control of your gaming. If you find yourself unable to stop playing when you want to, or if gaming is interfering with your responsibilities, it may be time to reassess your habits.
                  </p>
                  <p className="mt-3">
                    <strong>Enjoyment:</strong> Fantasy cricket should be enjoyable. If you're no longer having fun, or if gaming has become a source of stress or anxiety, it's important to take a step back and evaluate why you're playing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section2" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-black text-gray-900">2. HEALTHY GAMING HABITS</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Developing healthy gaming habits from the start can help ensure that fantasy cricket remains a positive part of your life. Here are some best practices to follow:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Set Clear Time Limits</h3>
                  <p>
                    Before you start playing, decide how much time you want to spend on fantasy cricket each day or week. Be realistic and consider your other commitments. Once you've set a limit, stick to it. Use timers or alarms to remind yourself when your allocated gaming time is up. It's easy to lose track of time when you're engaged in an activity you enjoy, so external reminders can be helpful.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Prioritize Real-Life Responsibilities</h3>
                  <p>
                    Fantasy cricket should never come at the expense of your real-life responsibilities. Make sure you complete your work, studies, household tasks, and other obligations before spending time on fantasy cricket. If you find yourself neglecting responsibilities to play, it's a sign that you need to adjust your gaming habits.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Maintain Physical Health</h3>
                  <p>
                    Spending long periods sitting and looking at a screen can have negative effects on your physical health. Make sure to take regular breaks to stretch, move around, and rest your eyes. Maintain a healthy diet, get adequate sleep, and engage in regular physical exercise. Your physical health should always take priority over gaming.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.4 Stay Socially Connected</h3>
                  <p>
                    Don't let fantasy cricket isolate you from friends and family. Make time for face-to-face social interactions, and don't cancel plans or avoid social events because of gaming. If you enjoy discussing fantasy cricket with others, that's great—but make sure your relationships aren't solely centered around gaming.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.5 Keep It Fun</h3>
                  <p>
                    Remember that the primary purpose of fantasy cricket is entertainment and education. If you're not enjoying yourself, or if gaming has become a chore or a source of stress, take a break. It's okay to step away from the game for a while and come back when you're ready to enjoy it again.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.6 Avoid Gaming When Upset or Stressed</h3>
                  <p>
                    Don't use fantasy cricket as a way to escape from problems or negative emotions. While it's natural to seek distraction when you're upset, using gaming as your primary coping mechanism can lead to unhealthy patterns. Instead, address the underlying issues through healthy means such as talking to friends, exercising, or seeking professional help if needed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section3" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-gray-900">3. TIME MANAGEMENT</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Effective time management is essential for maintaining a healthy balance between fantasy cricket and other aspects of your life. Here are some strategies to help you manage your gaming time:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Create a Gaming Schedule</h3>
                  <p>
                    Designate specific times during the week when you'll engage with fantasy cricket. For example, you might decide to spend 30 minutes each evening researching players and building teams, and then check results once a day. Having a schedule helps prevent gaming from bleeding into time that should be spent on other activities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Use Time-Tracking Tools</h3>
                  <p>
                    Many smartphones and devices have built-in screen time tracking features that can show you how much time you're spending on the Dhammanjali website or app. Review these statistics regularly to ensure you're staying within your intended limits. If you notice your usage creeping up, take steps to bring it back down.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.3 Set Alarms and Reminders</h3>
                  <p>
                    Use alarms or smartphone reminders to alert you when your allocated gaming time is up. This can help you avoid the "just one more minute" trap that often leads to extended gaming sessions. When the alarm goes off, honor your commitment to yourself and log out.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.4 Avoid Late-Night Gaming</h3>
                  <p>
                    Gaming late at night can interfere with your sleep schedule, which in turn affects your health, mood, and productivity. Set a cutoff time in the evening after which you won't engage with fantasy cricket. Aim to stop gaming at least one hour before bedtime to give your mind time to wind down.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.5 Batch Your Activities</h3>
                  <p>
                    Instead of checking the platform multiple times throughout the day, try to batch your fantasy cricket activities into one or two focused sessions. For example, spend 30 minutes in the evening building your teams and checking results, rather than checking in every hour. This helps prevent gaming from fragmenting your day and interrupting other tasks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section4" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-black text-gray-900">4. RECOGNIZING PROBLEM BEHAVIOR</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  While Dhammanjali is a free-to-play platform, it's still possible to develop unhealthy gaming patterns. Being able to recognize the warning signs of problem gaming is the first step toward addressing the issue. Here are some red flags to watch out for:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 Preoccupation with Gaming</h3>
                  <p>
                    If you find yourself constantly thinking about fantasy cricket even when you're not playing—planning teams during work or school, checking scores during meals, or dreaming about leaderboards—this may indicate an unhealthy preoccupation. Gaming should be something you enjoy during designated times, not something that occupies your mind 24/7.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.2 Inability to Stop or Reduce Gaming</h3>
                  <p>
                    Have you tried to cut back on your gaming time but found yourself unable to do so? Do you tell yourself you'll play for just 10 more minutes, only to find an hour has passed? Difficulty controlling your gaming behavior is a significant warning sign.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Neglecting Responsibilities</h3>
                  <p>
                    If fantasy cricket is causing you to neglect work, studies, household chores, or other important responsibilities, this is a clear sign of a problem. Missing deadlines, skipping classes, or letting your home become disorganized because of gaming are all red flags.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.4 Relationship Problems</h3>
                  <p>
                    Are your friends or family members expressing concern about the amount of time you spend on fantasy cricket? Have you canceled plans, avoided social events, or gotten into arguments because of gaming? If gaming is damaging your relationships, it's time to reassess your habits.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.5 Emotional Dependence</h3>
                  <p>
                    Do you rely on fantasy cricket to feel good, to escape from problems, or to cope with negative emotions? While it's normal to enjoy gaming, using it as your primary or only source of emotional regulation is unhealthy. You should have multiple healthy coping strategies for dealing with stress and negative feelings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.6 Physical Health Decline</h3>
                  <p>
                    Has your gaming led to a decline in physical health? This might include weight gain or loss, poor sleep, eye strain, headaches, or a sedentary lifestyle. If gaming is negatively affecting your physical wellbeing, it's a sign that you need to make changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.7 Lying or Hiding Gaming Behavior</h3>
                  <p>
                    Do you lie to friends or family about how much time you spend on fantasy cricket? Do you hide your gaming or feel defensive when others ask about it? Secrecy and defensiveness often indicate that you know your gaming is problematic but are reluctant to admit it.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.8 Loss of Interest in Other Activities</h3>
                  <p>
                    Have you stopped engaging in hobbies, sports, or other activities you used to enjoy because you'd rather spend that time on fantasy cricket? A narrowing of interests and activities is a warning sign of problem gaming.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section5" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">5. SELF-ASSESSMENT TOOLS</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  If you're concerned about your gaming habits, these self-assessment questions can help you evaluate whether you may have a problem. Answer honestly:
                </p>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Assessment Questions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">1.</span>
                      <span>Do you spend more time on fantasy cricket than you originally intended?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">2.</span>
                      <span>Have you tried to cut back on gaming but been unable to do so?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">3.</span>
                      <span>Do you feel restless, irritable, or anxious when you can't play?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">4.</span>
                      <span>Has gaming caused problems in your work, studies, or relationships?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">5.</span>
                      <span>Do you lie to others about how much time you spend gaming?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">6.</span>
                      <span>Do you use gaming to escape from problems or negative feelings?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">7.</span>
                      <span>Have you lost interest in other hobbies or activities because of gaming?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">8.</span>
                      <span>Has your physical health declined due to gaming (poor sleep, lack of exercise, etc.)?</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-white rounded-lg border-2 border-purple-300">
                    <p className="font-bold text-gray-900 mb-2">Interpretation:</p>
                    <p className="text-sm">
                      If you answered "yes" to 3 or more of these questions, you may be experiencing problem gaming behavior. Consider taking steps to reduce your gaming time, and don't hesitate to seek support from friends, family, or professionals.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 Weekly Gaming Log</h3>
                  <p>
                    Keeping a log of your gaming activity for one week can provide valuable insights into your habits. Each day, write down how much time you spent on fantasy cricket, what you did during that time (building teams, checking scores, reading articles), and how you felt before and after gaming. At the end of the week, review your log and ask yourself: Is this amount of time reasonable? Am I satisfied with how I'm spending my time? Are there patterns I need to address?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section6" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-black text-gray-900">6. SETTING PERSONAL LIMITS</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Setting clear, specific limits for your gaming is one of the most effective ways to maintain healthy habits. Here's how to establish and enforce personal limits:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.1 Time Limits</h3>
                  <p>
                    Decide in advance how much time you want to spend on fantasy cricket each day or week. Be specific—instead of saying "I'll play less," say "I'll spend no more than 30 minutes per day on fantasy cricket." Write down your limit and post it somewhere visible as a reminder. Track your actual gaming time and compare it to your limit regularly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.2 Session Limits</h3>
                  <p>
                    In addition to daily or weekly time limits, set limits for individual gaming sessions. For example, you might decide that each gaming session will last no more than 20 minutes. Use a timer to enforce this limit, and when the timer goes off, log out immediately—no exceptions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.3 Contest Entry Limits</h3>
                  <p>
                    Consider limiting the number of contests you enter each week. This can help prevent you from becoming overly invested in outcomes and spending excessive time managing multiple teams. Quality over quantity—focus on building one or two well-researched teams rather than entering every available contest.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.4 Device-Free Times and Zones</h3>
                  <p>
                    Establish certain times and places where you won't use devices for gaming. For example, no gaming during meals, no gaming in the bedroom, or no gaming after 9 PM. These boundaries help ensure that gaming doesn't intrude on important aspects of your life like family time, sleep, and relaxation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.5 Accountability Partners</h3>
                  <p>
                    Share your limits with a trusted friend or family member and ask them to help you stay accountable. Give them permission to check in with you about your gaming habits and to gently remind you if you seem to be exceeding your limits. Having external accountability can make it easier to stick to your commitments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section7" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">7. TAKING BREAKS</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Regular breaks are essential for maintaining a healthy relationship with fantasy cricket. Here's how to incorporate breaks into your gaming routine:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.1 Micro-Breaks During Gaming</h3>
                  <p>
                    Even during a gaming session, take short breaks every 15-20 minutes. Stand up, stretch, look away from the screen, and rest your eyes. These micro-breaks can help prevent physical strain and keep you mentally fresh.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.2 Daily Breaks</h3>
                  <p>
                    Consider taking one or two days off from fantasy cricket each week. This gives your mind a rest and helps prevent gaming from becoming an all-consuming habit. Use these days to engage in other activities you enjoy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.3 Extended Breaks</h3>
                  <p>
                    If you're feeling burned out, overly stressed about fantasy cricket, or concerned about your gaming habits, consider taking an extended break of one week or more. During this time, focus on other aspects of your life and see how you feel. When you return to gaming, you may find that you have a healthier perspective and more balanced approach.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.4 Seasonal Breaks</h3>
                  <p>
                    Cricket has natural seasons and breaks in the calendar. Use these off-seasons as opportunities to take a break from fantasy cricket. This can help you maintain long-term interest in the game and prevent fatigue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section8" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-gray-900">8. SUPPORT AND RESOURCES</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  If you're struggling with problem gaming behavior, remember that you're not alone and help is available. Here are some resources and support options:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.1 Talk to Someone You Trust</h3>
                  <p>
                    The first step in addressing problem gaming is often simply talking about it. Reach out to a trusted friend, family member, teacher, or mentor. Share your concerns and ask for their support. Sometimes, just having someone to talk to can make a big difference.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.2 Professional Help</h3>
                  <p>
                    If you're finding it difficult to control your gaming behavior on your own, consider seeking help from a mental health professional. Therapists and counselors who specialize in behavioral issues can provide strategies and support to help you develop healthier habits. Many therapists offer online sessions, making it easier to access help.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.3 Support Groups and Online Communities</h3>
                  <p>
                    There are online support groups and communities for people dealing with gaming-related issues. Connecting with others who understand what you're going through can provide valuable support and encouragement. Look for reputable organizations that focus on healthy technology use and gaming balance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.4 Mental Health Helplines (India)</h3>
                  <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                    <p><strong>NIMHANS Helpline:</strong> 080-46110007 (Monday to Saturday, 9 AM to 5 PM)</p>
                    <p><strong>Vandrevala Foundation Helpline:</strong> 1860-2662-345 / 1800-2333-330 (24/7)</p>
                    <p><strong>iCall Helpline:</strong> 9152987821 (Monday to Saturday, 8 AM to 10 PM)</p>
                    <p><strong>Sneha Foundation:</strong> 044-24640050 (24/7)</p>
                    <p className="text-sm text-gray-600 mt-4">
                      These helplines provide free, confidential support for mental health concerns, including issues related to gaming and technology use.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">8.5 Contact Us</h3>
                  <p>
                    If you have concerns about your gaming habits or need guidance on responsible gaming, you can contact us at wellbeing@dhamman.com. While we're not mental health professionals, we can provide information about responsible gaming practices and direct you to appropriate resources.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section9" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-black text-gray-900">9. FOR PARENTS AND GUARDIANS</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  While Dhammanjali is restricted to users 18 years and older, we recognize that parents and guardians may have questions about fantasy cricket and responsible gaming. Here's some guidance:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.1 Understanding Fantasy Cricket</h3>
                  <p>
                    Fantasy cricket is a skill-based game where participants create virtual teams of real cricket players and earn points based on those players' actual performance in real matches. Dhammanjali is a free-to-play platform with no real money involved, making it a safer option than real-money fantasy sports. The platform is designed to be educational, helping users learn about cricket strategy, player statistics, and team management.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.2 Monitoring Gaming Habits</h3>
                  <p>
                    If you're concerned about a young adult's (18+) gaming habits, have an open, non-judgmental conversation with them. Ask about their interest in fantasy cricket, how much time they're spending on it, and whether it's interfering with other responsibilities. Look for warning signs such as neglecting work or studies, social withdrawal, changes in sleep patterns, or defensive behavior when asked about gaming.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.3 Setting Household Rules</h3>
                  <p>
                    Consider establishing household rules about gaming, such as no gaming during family meals, completing responsibilities before gaming, and setting a reasonable time limit for daily gaming. Involve the young adult in creating these rules so they feel ownership and are more likely to follow them.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.4 Encouraging Balance</h3>
                  <p>
                    Encourage young adults to maintain a balanced lifestyle that includes physical activity, social interactions, hobbies, and responsibilities alongside gaming. Help them develop time management skills and healthy coping strategies for stress.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.5 When to Seek Help</h3>
                  <p>
                    If you notice significant changes in behavior, declining academic or work performance, social withdrawal, or signs of emotional distress related to gaming, it may be time to seek professional help. Don't hesitate to consult with a mental health professional who can assess the situation and provide appropriate guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section10" className="mb-12 scroll-mt-24">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-black text-gray-900 mb-6">10. OUR COMMITMENT TO YOUR WELLBEING</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Dhammanjali, your wellbeing is our priority. We are committed to promoting responsible gaming and creating a platform that enhances your life rather than detracting from it. Here's what we're doing to support responsible gaming:
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.1 Free-to-Play Model</h3>
                  <p>
                    By offering a completely free-to-play platform, we eliminate the financial risks and pressures associated with real-money gaming. You can enjoy fantasy cricket purely for its educational and entertainment value, without worrying about losing money or chasing losses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.2 Educational Focus</h3>
                  <p>
                    Our platform is designed to help users learn about cricket strategy, player analysis, and team management. We provide comprehensive tutorials, strategy guides, and educational content to enhance your cricket knowledge and skills.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.3 Age and Location Restrictions</h3>
                  <p>
                    We enforce strict age verification (18+) and prohibit users from certain states where fantasy sports regulations require it. These measures help ensure that our platform is used responsibly and in compliance with applicable laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.4 Transparent Policies</h3>
                  <p>
                    We provide clear, comprehensive information about how our platform works, how scoring is calculated, and what we expect from our users. Transparency is essential for building trust and promoting responsible gaming.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.5 Ongoing Support</h3>
                  <p>
                    If you have questions or concerns about responsible gaming, we're here to help. Contact us at wellbeing@dhamman.com, and we'll do our best to provide guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Statement */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black mb-4">REMEMBER: IT'S JUST A GAME</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Fantasy cricket should be a fun, educational, and enjoyable hobby—not a source of stress, anxiety, or problems in your life. If you find that gaming is no longer enjoyable, or if it's interfering with your responsibilities, relationships, or wellbeing, it's time to take a step back and reassess.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    There's no shame in admitting that you need to make changes to your gaming habits. In fact, recognizing the need for change and taking action is a sign of strength and self-awareness. Whether that means setting stricter limits, taking a break, or seeking support, know that help is available and that you can regain balance in your life.
                  </p>
                  <p className="text-lg leading-relaxed">
                    At Dhammanjali, we want fantasy cricket to be a positive part of your life. Play smart, stay healthy, and enjoy the game responsibly. If you ever need support or guidance, don't hesitate to reach out. We're here for you.
                  </p>
                  <div className="mt-6 space-y-2 text-lg">
                    <p><strong>Wellbeing Support:</strong> wellbeing@dhamman.com</p>
                    <p><strong>General Support:</strong> support@dhamman.com</p>
                    <p><strong>NIMHANS Helpline:</strong> 080-46110007</p>
                    <p><strong>Vandrevala Foundation:</strong> 1860-2662-345 (24/7)</p>
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
