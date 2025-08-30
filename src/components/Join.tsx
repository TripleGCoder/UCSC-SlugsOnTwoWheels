import React, { useState } from 'react';
import { Mail, User, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-amber-400">Pack</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Ready to become part of the SlugsOnTwoWheels family?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">How to Join</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Fill Out the Form</h4>
                  <p className="text-slate-300">Tell us about yourself and your riding experience. Don't worry if you're new – we welcome all skill levels!</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Meet the Group</h4>
                  <p className="text-slate-300">Join us for a casual meet-up on campus. We'll show you around and answer any questions you have.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Hit the Road</h4>
                  <p className="text-slate-300">Join your first group ride! We'll start with scenic local routes perfect for getting comfortable with the group.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Ride?</h3>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    UCSC Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="yourname@ucsc.edu"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Why do you ride?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your passion for motorcycles..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Become a Slug Rider</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Family!</h3>
                <p className="text-slate-200">We'll be in touch soon with details about upcoming rides.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}