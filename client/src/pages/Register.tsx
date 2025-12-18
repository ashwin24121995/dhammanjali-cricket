import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Trophy, Shield, Users, Gift, Eye, EyeOff, AlertCircle, Check } from "lucide-react";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana"
];

export default function Register() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    dateOfBirth: "",
    state: "",
  });

  const registerMutation = trpc.auth.register.useMutation({
    onSuccess: (data) => {
      // Store JWT token in localStorage
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        console.log("✅ Token stored in localStorage");
      }
      
      toast.success("Registration successful! Redirecting to dashboard...");
      
      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed. Please try again.");
      setIsLoading(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (!formData.state) {
      toast.error("Please select your state");
      return;
    }

    if (RESTRICTED_STATES.includes(formData.state)) {
      toast.error(`Registration is not available in ${formData.state}`);
      return;
    }

    setIsLoading(true);
    registerMutation.mutate({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
      state: formData.state,
    });
  };

  const isRestrictedState = RESTRICTED_STATES.includes(formData.state);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Diagonal Top Accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-red-600 to-red-700 transform -skew-y-3 origin-top-left"></div>
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits & Info */}
          <div className="text-white space-y-8 lg:sticky lg:top-20">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded transform -skew-x-6 mb-6">
                <span className="font-black text-lg">JOIN FREE TODAY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                START YOUR
                <br />
                <span className="text-yellow-400">CRICKET JOURNEY</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Create your free account and join thousands of cricket fans playing fantasy cricket without spending a single rupee. Learn, compete, and master your skills!
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gradient-to-r from-green-600/20 to-transparent p-4 rounded-lg border-l-4 border-green-500">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">100% Free Forever</h3>
                  <p className="text-gray-300 text-sm">No deposits, no payments, no hidden charges. Completely free to play.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-blue-600/20 to-transparent p-4 rounded-lg border-l-4 border-blue-500">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Educational Platform</h3>
                  <p className="text-gray-300 text-sm">Learn cricket strategy, player analysis, and team building skills.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-yellow-500/20 to-transparent p-4 rounded-lg border-l-4 border-yellow-400">
                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Compete & Win Recognition</h3>
                  <p className="text-gray-300 text-sm">Top leaderboard rankings and bragging rights among friends.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-red-600/20 to-transparent p-4 rounded-lg border-l-4 border-red-500">
                <Check className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Safe & Secure</h3>
                  <p className="text-gray-300 text-sm">Your data is encrypted and protected with industry-standard security.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-lg text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-bold text-sm">Skill-Based</p>
                <p className="text-xs text-red-100">No Gambling</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-lg text-center">
                <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-bold text-sm">Fair Play</p>
                <p className="text-xs text-blue-100">Guaranteed</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-lg text-center">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-bold text-sm">Active Community</p>
                <p className="text-xs text-green-100">Join Now</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-lg text-center">
                <Gift className="w-8 h-8 text-gray-900 mx-auto mb-2" />
                <p className="font-bold text-sm text-gray-900">Free Entry</p>
                <p className="text-xs text-gray-800">All Contests</p>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Create Your Free Account</h2>
              <p className="text-gray-600">Fill in your details to get started</p>
            </div>

            {/* Important Notice */}
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 rounded">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 text-sm mb-1">Important Requirements</h4>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• Must be 18 years or older</li>
                    <li>• Not available in: AP, Assam, Odisha, Telangana, Nagaland, Sikkim</li>
                  </ul>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <Label htmlFor="name" className="text-gray-900 font-bold mb-2">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 border-2 border-gray-300 focus:border-blue-600"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-900 font-bold mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-2 border-gray-300 focus:border-blue-600"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <Label htmlFor="dateOfBirth" className="text-gray-900 font-bold mb-2">
                  Date of Birth * (Must be 18 or older)
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                  className="h-12 border-2 border-gray-300 focus:border-blue-600"
                  required
                />
              </div>

              {/* State */}
              <div>
                <Label htmlFor="state" className="text-gray-900 font-bold mb-2">
                  State *
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => setFormData({ ...formData, state: value })}
                >
                  <SelectTrigger className="h-12 border-2 border-gray-300 focus:border-blue-600">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map((state) => (
                      <SelectItem
                        key={state}
                        value={state}
                        disabled={RESTRICTED_STATES.includes(state)}
                      >
                        {state} {RESTRICTED_STATES.includes(state) && "❌ (Not Available)"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isRestrictedState && (
                  <p className="text-sm text-red-600 mt-2 font-semibold">
                    ⚠️ Registration is not available in {formData.state} due to government compliance.
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-gray-900 font-bold mb-2">
                  Password * (Min 8 characters)
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword" className="text-gray-900 font-bold mb-2">
                  Confirm Password *
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="h-12 border-2 border-gray-300 focus:border-blue-600 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded">
                <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-gray-300" />
                <p className="text-sm text-gray-700">
                  I confirm that I am 18 years or older and agree to the{" "}
                  <Link href="/terms">
                    <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                      Terms & Conditions
                    </span>
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy">
                    <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                      Privacy Policy
                    </span>
                  </Link>
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading || isRestrictedState}
                className="w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                {isLoading ? "CREATING ACCOUNT..." : "CREATE FREE ACCOUNT"}
              </Button>

              <div className="text-center pt-4">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login">
                    <span className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer">
                      Login Here
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Diagonal Accent */}
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-yellow-400 to-yellow-500 transform skew-y-3 origin-bottom-right"></div>
    </div>
  );
}
