import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { isAuthenticated, user } = useAuth();
  const logoutMutation = trpc.auth.logout.useMutation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/how-to-play", label: "How To Play" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 hover:opacity-90 transition-opacity cursor-pointer">
              <div className="text-3xl font-bold tracking-tight">
                <span className="text-accent">DHAMMANJALI</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-white hover:text-accent transition-colors font-medium cursor-pointer">
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
                  <Button variant="secondary" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <span className="text-sm text-white/90">Hi, {user?.name}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="secondary" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="default" size="sm" className="bg-accent text-foreground hover:bg-accent/90">
                    Register
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
          <div className="md:hidden bg-primary/95 backdrop-blur-sm pb-6 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-white hover:text-accent transition-colors font-medium py-2 px-4 cursor-pointer block"
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
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-accent text-foreground hover:bg-accent/90"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Register
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
