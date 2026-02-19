
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowRight, Gift, Bell, Star, Users } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const interestOptions = [
    { id: 'gamedev', label: 'Game Development', icon: '🎮' },
    { id: 'webdev', label: 'Web Development', icon: '💻' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'ai', label: 'AI & Machine Learning', icon: '🤖' },
    { id: 'design', label: 'UI/UX Design', icon: '🎨' },
    { id: 'devops', label: 'DevOps & Cloud', icon: '☁️' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6 border border-white/20">
              <Bell className="w-5 h-5 text-blue-400 mr-3 animate-bounce" />
              <span className="text-white font-semibold">Join 10,000+ Developers</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"> Tech Curve</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Get exclusive insights, development tips, early access to our products, and special offers 
              delivered straight to your inbox. Join our community of passionate developers and tech enthusiasts.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">10,000+ Subscribers</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Weekly Updates</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Input */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 lg:py-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 text-lg font-medium shadow-lg"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-8 py-4 lg:py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 min-w-[180px] shadow-xl"
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Subscribe
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Interest Selection */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">What interests you most? (Optional)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleInterest(option.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 text-left ${
                        interests.includes(option.id)
                          ? 'bg-white/20 border-white/40 text-white'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{option.icon}</span>
                        <span className="text-sm font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Exclusive Content</h4>
                <p className="text-gray-300 text-sm">Early access to tutorials, code samples, and premium resources</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Weekly Updates</h4>
                <p className="text-gray-300 text-sm">Latest tech trends, project updates, and industry insights</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Community Access</h4>
                <p className="text-gray-300 text-sm">Join our Discord server and connect with fellow developers</p>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time. 
                <a href="/privacy" className="text-blue-400 hover:underline ml-1">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
