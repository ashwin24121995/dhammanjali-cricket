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
  const utils = trpc.useUtils();
  const logoutMutation = trpc.auth.logout.useMutation();

  const handleLogout = async () => {
    try {
      // Clear JWT token from localStorage
      localStorage.removeItem("auth_token");
      console.log("✅ Token removed from localStorage");
      
      // Call logout mutation (for consistency, even though it doesn't do anything server-side)
      await logoutMutation.mutateAsync();
      
      // Invalidate auth query to refresh user state
      await utils.auth.me.invalidate();
      
      toast.success("Logged out successfully");
      window.location.href = "/";
    } catch (error) {
      // Even if mutation fails, we've cleared the token
      localStorage.removeItem("auth_token");
      toast.success("Logged out successfully");
      window.location.href = "/";
    }
  };

  // Different navigation links based on auth state
  const publicNavLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/how-to-play", label: "HOW TO PLAY" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  const authenticatedNavLinks = [
    { href: "/matches", label: "MATCHES" },
    { href: "/leaderboard", label: "LEADERBOARD" },
    { href: "/profile", label: "PROFILE" },
  ];

  const navLinks = isAuthenticated ? authenticatedNavLinks : publicNavLinks;

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img 
              src="/dhammanjali-logo.png" 
              alt="Dhammanjali Cricket" 
              style={{ height: '100px' }}
              className="w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
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
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-none"
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
                    <Button 
                      onClick={handleLogout}
                      variant="outline" 
                      className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-none"
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
