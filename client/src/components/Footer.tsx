import { Link } from "wouter";
import { Shield, Award, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Diagonal Top Accent */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 transform -skew-y-2 origin-top-left"></div>
      
      <div className="container relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/dhammanjali-logo.png" 
                alt="Dhammanjali" 
                style={{ height: '81px' }}
                className="w-auto"
              />
            </div>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              India's first completely free fantasy cricket platform dedicated to education, entertainment, and responsible gaming.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-black text-red-600">18+</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold">FAIR PLAY</span>
              </div>
              <div className="flex items-center gap-2 bg-green-600 px-3 py-1 rounded">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold">NO MONEY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-4 text-yellow-400">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ How To Play</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-black mb-4 text-yellow-400">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/fair-play">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ Fair Play Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <span className="text-white/80 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">→ Responsible Gaming</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-4 text-yellow-400">CONTACT</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 leading-relaxed">
                    <strong className="text-yellow-400">Registered Office:</strong><br />
                    1ST FLOOR, 154 KATKA JHUNSI,<br />
                    THANA- JHUNSI DISTRICT PRAYAGRAJ,<br />
                    Allahabad- 211019, Uttar Pradesh, India
                  </p>
                  <p className="text-white/80 leading-relaxed mt-3">
                    <strong className="text-yellow-400">Regional Office:</strong><br />
                    18th Cross Rd, 5 Block,<br />
                    Vidyaranyapura,<br />
                    Bengaluru, Karnataka 560097,<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-white/80">support@dhamman.com</p>
                  <p className="text-white/80">info@dhamman.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details Bar */}
        <div className="border-t-2 border-yellow-400 pt-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-white/60 text-xs mb-1">COMPANY NAME</p>
              <p className="text-white font-bold">DHAMMANJALI INDIA PRIVATE LIMITED</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">CIN</p>
              <p className="text-white font-bold">U15490UP2020PTC135324</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">PAN</p>
              <p className="text-white font-bold">AANCM8535G</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">CEO & FOUNDER</p>
              <p className="text-white font-bold">VINAY NAGVANSHI</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-red-600 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-white text-sm font-bold leading-relaxed">
            ⚠️ LEGAL DISCLAIMER: This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} <span className="font-bold text-yellow-400">DHAMMANJALI INDIA PRIVATE LIMITED</span>. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            This is a 100% free-to-play platform for entertainment and educational purposes only. Participants must be 18+ years old.
          </p>
        </div>
      </div>

      {/* Diagonal Bottom Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-red-600/20 to-transparent transform rotate-12"></div>
    </footer>
  );
}
