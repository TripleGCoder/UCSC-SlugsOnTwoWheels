import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">



      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // backgroundImage: 'url(src/components/Media/Gallery-Photos/image.jpg)',
          // backgroundImage: 'url(src/components/Media/Gallery-Photos/NatBike.png)',
          // backgroundImage: 'url(src/components/Media/Gallery-Photos/20240416_203824.jpg)',
          // backgroundImage: 'url(src/components/Media/Gallery-Photos/DSC09074-2.jpg)',
          // backgroundImage: 'url(src/components/Media/Gallery-Photos/DSC08752.jpg)',
          backgroundImage: 'url(./Media/Gallery-Photos/Angus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
      </div>

        {/* If want video */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
        <source src="./src/components/Media/BIKEAI.mp4" type="video/mp4" />
      </video>
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
</div> */}






      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="absolute inset-0 -z-10 bg-black/10 rounded-xl px-6 py-2"></span>
            <span className="text-amber-400">Slugs</span>OnTwoWheels
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-slate-200 font-medium mb-2">
            UC Santa Cruz Motorcycle Community
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Where banana slugs meet the open road. Join fellow UCSC riders for epic coastal adventures and unforgettable journeys.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToJoin}
            className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <span>Join the Ride</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}