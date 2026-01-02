import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, ArrowLeft, Shield, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<"email" | "password" | "success">("email");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetPasswordMutation = trpc.auth.resetPassword.useMutation({
    onSuccess: () => {
      // Clear localStorage
      localStorage.removeItem("resetEmail");
      setStep("success");
      toast.success("Password reset successful!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to reset password. Please try again.");
    },
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Skip email validation, go directly to password step
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    localStorage.setItem("resetEmail", email);
    setStep("password");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const storedEmail = localStorage.getItem("resetEmail");
    if (!storedEmail) {
      toast.error("Session expired. Please start over.");
      setStep("email");
      return;
    }

    resetPasswordMutation.mutate({
      email: storedEmail,
      newPassword,
    });
  };

  // Success Screen
  if (step === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-600 to-green-700 transform -skew-y-3 origin-top-left"></div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>

              <h1 className="text-3xl font-black text-gray-900 mb-4">Password Reset Successful!</h1>
              
              <p className="text-lg text-gray-700 mb-8">
                Your password has been successfully updated. You can now login with your new password.
              </p>

              <Link href="/login">
                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg rounded-lg shadow-lg">
                  GO TO LOGIN
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-green-400 to-green-500 transform skew-y-3 origin-bottom-right"></div>
      </div>
    );
  }

  // New Password Form
  if (step === "password") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-600 to-green-700 transform -skew-y-3 origin-top-left"></div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Create New Password</h2>
                <p className="text-gray-600 text-center">Enter your new password for <strong>{email}</strong></p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="newPassword" className="text-gray-900 font-bold mb-2">
                    New Password * (Min 8 characters)
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="h-14 border-2 border-gray-300 focus:border-green-600 pr-12"
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

                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-900 font-bold mb-2">
                    Confirm New Password *
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-14 border-2 border-gray-300 focus:border-green-600 pr-12"
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

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-900 text-sm mb-1">Password Requirements</h4>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• At least 8 characters long</li>
                        <li>• Use a mix of letters, numbers, and symbols for better security</li>
                        <li>• Avoid using common words or personal information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={resetPasswordMutation.isPending}
                  className="w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
                >
                  {resetPasswordMutation.isPending ? "RESETTING PASSWORD..." : "RESET PASSWORD"}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("resetEmail");
                      setStep("email");
                      setNewPassword("");
                      setConfirmPassword("");
                    }}
                    className="text-gray-600 hover:text-gray-900 font-bold"
                  >
                    <ArrowLeft className="w-4 h-4 inline mr-2" />
                    Back to Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-green-400 to-green-500 transform skew-y-3 origin-bottom-right"></div>
      </div>
    );
  }

  // Email Validation Form (Step 1)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-blue-700 transform -skew-y-3 origin-top-left"></div>
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="text-white space-y-8">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded transform -skew-x-6 mb-6">
                <span className="font-black text-lg">PASSWORD RESET</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                FORGOT YOUR
                <br />
                <span className="text-yellow-400">PASSWORD?</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                No worries! Enter your registered email address and we'll help you create a new password instantly. Quick, easy, and secure.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-transparent p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Instant Reset</h3>
                    <p className="text-gray-300">
                      Simply verify your email and immediately create a new password. No waiting for emails!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-transparent p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Secure Process</h3>
                    <p className="text-gray-300">
                      Your security is our priority. All password resets are encrypted and protected.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-transparent p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Two-Step Verification</h3>
                    <p className="text-gray-300">
                      First verify your email, then create your new secure password. Simple and safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Text */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Need help?</strong> Contact our support team at{" "}
                <a href="mailto:support@dhammanji.com" className="text-yellow-400 hover:text-yellow-300 underline">
                  support@dhammanji.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Email Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Verify Your Email</h2>
              <p className="text-gray-600">Enter your registered email to continue</p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-900 font-bold mb-2">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12 border-2 border-gray-300 focus:border-blue-600 text-lg"
                    required
                    disabled={false}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Enter the email address you used when you registered
                </p>
              </div>

              <Button
                type="submit"
                disabled={false}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                CONTINUE
              </Button>

              <div className="text-center pt-4 space-y-3">
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-bold">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                  </Button>
                </Link>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link href="/register">
                      <span className="text-blue-600 hover:text-blue-700 font-bold cursor-pointer">
                        Register Free
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-blue-400 to-blue-500 transform skew-y-3 origin-bottom-right"></div>
    </div>
  );
}
