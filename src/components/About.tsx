import React from 'react';
import { Heart, Mountain, Users2 } from 'lucide-react';

export default function About() {
  return (
<section id="about" className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-amber-500">Story</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Born from a shared love of two wheels and the stunning California coast
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-slate-700 leading-relaxed mb-6">
                SlugsOnTwoWheels started as a small group of UCSC students who discovered that the best way to explore Santa Cruz's legendary coastline was on two wheels. What began as weekend rides to local cafes has grown into a passionate community of riders united by adventure and slug pride.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                We believe motorcycling is about more than just transportation – it's about freedom, friendship, and discovering the incredible roads that wind through our beautiful region. From the redwood forests to the Pacific coastline, we ride together, support each other, and create memories that last a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Passion</h3>
                <p className="text-sm text-slate-600">For riding & community</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mountain className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Adventure</h3>
                <p className="text-sm text-slate-600">Coastal highways await</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Unity</h3>
                <p className="text-sm text-slate-600">UCSC slug spirit</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="src\components\Media\all_bikers.png"
                alt="Group photo placeholder"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}