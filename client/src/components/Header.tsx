import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const logoutMutation = trpc.auth.logout.useMutation();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      toast.success("Logged out successfully");
      window.location.href = "/";
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/how-to-play", label: "HOW TO PLAY" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Angular Design */}
          <Link href="/">
            <div className="flex items-center hover:opacity-90 transition-opacity cursor-pointer">
              <div className="relative">
                {/* Yellow Angular Background */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 transform -skew-x-12">
                  <span className="block transform skew-x-12 text-2xl font-black text-black tracking-tight">
                    DHAMMAN<span className="text-red-600">JALI</span>
                  </span>
                </div>
                {/* Cricket Ball Accent */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-white hover:text-yellow-400 transition-colors font-bold text-sm cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none">
                    DASHBOARD
                  </Button>
                </Link>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-none"
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none">
                    LOGIN
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-none">
                    REGISTER
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm pb-6 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-white hover:text-yellow-400 transition-colors font-bold py-2 px-4 cursor-pointer block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="border-t border-white/20 pt-3 px-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none">
                        DASHBOARD
                      </Button>
                    </Link>
                    <Button 
                      onClick={handleLogout}
                      variant="outline" 
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-none"
                    >
                      LOGOUT
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none">
                        LOGIN
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-none">
                        REGISTER
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
