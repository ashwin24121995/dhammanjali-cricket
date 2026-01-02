import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Trophy, Shield, Users, TrendingUp, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const utils = trpc.useUtils();

  const loginMutation = trpc.auth.login.useMutation({
    onSuccess: async (data) => {
      console.log("✅ Login SUCCESS!", data);
      
      // Store JWT token in localStorage
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        console.log("✅ Token stored in localStorage");
      }
      
      // Invalidate auth query to refetch user data
      await utils.auth.me.invalidate();
      
      toast.success("Login successful! Welcome back!");
      
      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    },
    onError: (error) => {
      console.error("❌ Login mutation error:", error);
      toast.error(error.message || "Login failed. Please check your credentials.");
      setIsLoading(false);
    },
    onMutate: () => {
      console.log("🔄 Login mutation started...");
    },
    onSettled: (data, error) => {
      console.log("🏁 Login mutation settled", { data, error });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!", { email, password: "***" });
    
    if (!email || !password) {
      console.log("Validation failed: missing fields");
      toast.error("Please fill in all fields");
      return;
    }

    console.log("Starting login mutation...");
    setIsLoading(true);
    loginMutation.mutate({ email, password });
    console.log("Mutation called");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Diagonal Top Accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 transform -skew-y-3 origin-top-left"></div>
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits & Info */}
          <div className="text-white space-y-8">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded transform -skew-x-6 mb-6">
                <span className="font-black text-lg">WELCOME BACK</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                LOGIN TO
                <br />
                <span className="text-yellow-400">KEMETION</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Continue your fantasy cricket journey! Access your teams, track your performance, and compete with players across India—completely free.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <Trophy className="w-10 h-10 text-yellow-400 mb-3" />
                <h3 className="font-bold text-lg mb-2">Your Teams</h3>
                <p className="text-sm text-red-100">Access all your created teams and ongoing contests</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <TrendingUp className="w-10 h-10 text-yellow-400 mb-3" />
                <h3 className="font-bold text-lg mb-2">Track Stats</h3>
                <p className="text-sm text-blue-100">Monitor your performance and leaderboard rankings</p>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <Users className="w-10 h-10 text-yellow-400 mb-3" />
                <h3 className="font-bold text-lg mb-2">Join Contests</h3>
                <p className="text-sm text-green-100">Participate in daily free contests and leagues</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <Shield className="w-10 h-10 text-gray-900 mb-3" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">100% Safe</h3>
                <p className="text-sm text-gray-800">Secure login with encrypted password protection</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-red-600">18+</span>
                </div>
                <span className="text-sm text-gray-400">Age Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 px-4 py-2 rounded flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-bold">FAIR PLAY</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-bold text-yellow-400">100% FREE</span> Platform
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Login to Your Account</h2>
              <p className="text-gray-600">Enter your credentials to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-900 font-bold mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-2 border-gray-300 focus:border-blue-600"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-900 font-bold mb-2">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 border-2 border-gray-300 focus:border-blue-600 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link href="/forgot-password">
                  <span className="text-sm text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                {isLoading ? "LOGGING IN..." : "LOGIN NOW"}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/register">
                    <span className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer">
                      Register Now
                    </span>
                  </Link>
                </p>
              </div>
            </form>

            {/* Security Notice */}
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm mb-1">Secure Login</h4>
                  <p className="text-xs text-blue-800">
                    Your password is encrypted using industry-standard bcrypt hashing. We never store plain text passwords.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Diagonal Accent */}
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-red-600 to-red-700 transform skew-y-3 origin-bottom-right"></div>
    </div>
  );
}
