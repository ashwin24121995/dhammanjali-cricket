import { Link } from "wouter";
import { Shield, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-foreground to-secondary text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">DHAMMANJALI</h3>
            <p className="text-sm text-white/80 mb-4">
              Free-to-play fantasy cricket platform for education and entertainment.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <span className="text-2xl font-bold">18+</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                <Shield size={24} />
                <span className="text-sm font-semibold">Fair Play</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-white/80 hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <a className="text-white/80 hover:text-accent transition-colors">How To Play</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-white/80 hover:text-accent transition-colors">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/80 hover:text-accent transition-colors">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">
                  <a className="text-white/80 hover:text-accent transition-colors">Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-white/80 hover:text-accent transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/fair-play">
                  <a className="text-white/80 hover:text-accent transition-colors">Fair Play Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <a className="text-white/80 hover:text-accent transition-colors">Responsible Gaming</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="text-sm text-white/80 space-y-2">
              <p className="font-semibold text-white">DHAMMANJALI INDIA PRIVATE LIMITED</p>
              <p>CIN: U15490UP2020PTC135324</p>
              <p>PAN: AANCM8535G</p>
              <p className="text-xs mt-3">
                1ST FLOOR, 154 KATKA JHUNSI, THANA- JHUNSI DISTRICT PRAYAGRAJ, Allahabad- 211019, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/20 pt-6">
          <div className="bg-destructive/20 border border-destructive/40 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-white">
              <strong>Legal Disclaimer:</strong> This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
            </p>
          </div>

          <div className="text-center text-sm text-white/70">
            <p>&copy; {currentYear} Dhammanjali India Private Limited. All rights reserved.</p>
            <p className="mt-2">CEO & Founder: Vinay Nagvanshi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
