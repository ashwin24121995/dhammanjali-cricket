import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, ArrowLeft, Shield, Clock, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const forgotPasswordMutation = trpc.auth.forgotPassword.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Password reset instructions sent to your email!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send reset email. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    forgotPasswordMutation.mutate({ email });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Diagonal Top Accent */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-600 to-green-700 transform -skew-y-3 origin-top-left"></div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>

              <h1 className="text-3xl font-black text-gray-900 mb-4">Check Your Email!</h1>
              
              <p className="text-lg text-gray-700 mb-6">
                We've sent password reset instructions to:
              </p>
              
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-xl font-bold text-blue-900">{email}</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Check Your Inbox</h3>
                    <p className="text-sm text-gray-600">
                      Look for an email from Dhammanjali with the subject "Reset Your Password"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Link Expires Soon</h3>
                    <p className="text-sm text-gray-600">
                      The reset link is valid for 1 hour. After that, you'll need to request a new one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Didn't Request This?</h3>
                    <p className="text-sm text-gray-600">
                      If you didn't request a password reset, you can safely ignore this email. Your account is secure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-bold underline"
                  >
                    try again
                  </button>
                </p>

                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Diagonal Accent */}
        <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-green-400 to-green-500 transform skew-y-3 origin-bottom-right"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Diagonal Top Accent */}
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
                No worries! It happens to everyone. Enter your email address and we'll send you instructions to reset your password and get back in the game.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-transparent p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Quick & Easy</h3>
                    <p className="text-gray-300">
                      Simply enter your registered email address. We'll send you a secure link to create a new password instantly.
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
                      Your security is our priority. The reset link is encrypted, expires after 1 hour, and can only be used once.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-transparent p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Instant Delivery</h3>
                    <p className="text-gray-300">
                      Reset instructions arrive in your inbox within minutes. Check your spam folder if you don't see it right away.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Text */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Need help?</strong> If you're having trouble resetting your password, contact our support team at{" "}
                <a href="mailto:support@dhamman.com" className="text-yellow-400 hover:text-yellow-300 underline">
                  support@dhamman.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Reset Your Password</h2>
              <p className="text-gray-600">Enter your email to receive reset instructions</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    disabled={forgotPasswordMutation.isPending}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Enter the email address you used when you registered
                </p>
              </div>

              <Button
                type="submit"
                disabled={forgotPasswordMutation.isPending}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                {forgotPasswordMutation.isPending ? "SENDING..." : "SEND RESET LINK"}
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

      {/* Bottom Diagonal Accent */}
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-blue-400 to-blue-500 transform skew-y-3 origin-bottom-right"></div>
    </div>
  );
}
