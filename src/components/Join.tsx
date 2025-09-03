import React from 'react';
import { QrCode, User, PartyPopper } from 'lucide-react';

export default function Join() {
  return (
    <section id="join" className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-amber-400">Pack</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Ready to become part of the <span className="font-semibold text-white">SlugsOnTwoWheels</span> family?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">How to Join</h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                    <QrCode className="w-5 h-5 text-amber-400" />
                    <span>Join the Discord</span>
                  </h4>
                  <p className="text-slate-300">
                    Scan the QR code or{' '}
                    <a
                      href="https://discord.gg/YOUR_INVITE_LINK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 underline hover:text-amber-300"
                    >
                      click here
                    </a>{' '}
                    to hop into our Discord server.
                  </p>
                  <div className="mt-4">
                    <img
                      src="/qr-code.png"
                      alt="Discord QR Code"
                      className="w-32 h-32 rounded-lg shadow-lg border border-white/20"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-400" />
                    <span>Introduce Yourself</span>
                  </h4>
                  <p className="text-slate-300">
                    Say hi in the introductions channel and let us know a little about your ride (or your dream ride).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                    <PartyPopper className="w-5 h-5 text-emerald-400" />
                    <span>Join the Fun</span>
                  </h4>
                  <p className="text-slate-300">
                    That’s it! Start chatting, meet fellow riders, and roll out on our next group ride 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Side Panel (could add image, big QR, or Discord logo here) */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex items-center justify-center">
            <img
              src="/qr-code.png"
              alt="Join Discord QR"
              className="w-48 h-48 rounded-xl shadow-lg border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
