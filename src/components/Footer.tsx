import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14 flex items-center justify-center">
                <img 
                  src="src/components/Media/Logo.png"
                  alt="SlugsOnTwoWheels Logo" 
                  className="w-full h-full object-contain scale-125"
                />
              </div>
              <span className="text-white font-bold text-xl">SlugsOnTwoWheels</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              UC Santa Cruz's premier motorcycle community. Riding together, exploring together, growing together.
            </p>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">SlugsOnTwoWheels@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/slugsontwowheels/"
                target="_blank" 
                className="w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>


                  {/* Discord */}
              <a 
                href="https://discord.gg/9UhDwBUrhV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                <img 
                  src="src/components/Media/Discord-Icon.svg" 
                  alt="Discord" 
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 SlugsOnTwoWheels - UC Santa Cruz Student Organization
            </p>
            <p className="text-amber-400 font-medium text-center md:text-right">
              See you on the highway – Slug style! 🐌🏍️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}