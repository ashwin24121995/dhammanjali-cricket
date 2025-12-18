import { useState } from "react";
import { Mail, MapPin, Phone, Send, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/20 to-transparent transform skew-x-12"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 font-bold text-lg mb-6 transform -skew-x-6">
              GET IN TOUCH
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              CONTACT
              <br />
              <span className="text-yellow-400">DHAMMANJALI</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Have questions? We're here to help! Reach out to our team for support, feedback, or partnership inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-red-600">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24-48 hours. For urgent matters, please use our email or phone contact information.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 text-lg"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-blue-100 text-sm mb-2">For general inquiries:</p>
                  <a href="mailto:support@dhamman.com" className="text-yellow-300 font-semibold hover:underline">
                    support@dhamman.com
                  </a>
                  <p className="text-blue-100 text-sm mt-3 mb-2">For business inquiries:</p>
                  <a href="mailto:info@dhamman.com" className="text-yellow-300 font-semibold hover:underline">
                    info@dhamman.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-white/30 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-gray-800 text-sm mb-2">Customer Support:</p>
                  <p className="font-bold text-lg">+91 XXX-XXX-XXXX</p>
                  <p className="text-gray-700 text-sm mt-2">Mon-Sat: 10 AM - 7 PM IST</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              OUR <span className="text-yellow-400">OFFICES</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Visit us at our registered or regional office locations across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Registered Office */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <Building2 className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-yellow-400 mb-1">Registered Office</h3>
                  <p className="text-red-100 text-sm">Head Office - Prayagraj</p>
                </div>
              </div>
              <div className="space-y-2 text-white">
                <p className="font-semibold">DHAMMANJALI INDIA PRIVATE LIMITED</p>
                <p>1st Floor, 154 Katka Jhunsi</p>
                <p>Thana - Jhunsi District Prayagraj</p>
                <p>Jhunsi, Allahabad - 211019</p>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>

            {/* Regional Office */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-yellow-400 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-yellow-400 mb-1">Regional Office</h3>
                  <p className="text-blue-100 text-sm">Bengaluru Operations</p>
                </div>
              </div>
              <div className="space-y-2 text-white">
                <p className="font-semibold">BTM Layout Branch</p>
                <p>BTM 2nd Stage - No 46, 1st Floor</p>
                <p>1st Main Road, 7th Cross Rd</p>
                <p>BTM Layout, Bengaluru</p>
                <p>Karnataka 560076, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Quick Links */}
      <div className="container py-16">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Looking for Quick Answers?
          </h3>
          <p className="text-gray-800 text-lg mb-6">
            Check out our FAQ section for instant answers to common questions about registration, gameplay, and policies.
          </p>
          <Button
            onClick={() => window.location.href = "/faq"}
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold px-8 py-3 text-lg"
          >
            Visit FAQ Page
          </Button>
        </div>
      </div>
    </div>
  );
}
