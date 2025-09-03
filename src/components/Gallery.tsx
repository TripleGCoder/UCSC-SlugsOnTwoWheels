import React from 'react';
import { Link } from "react-router-dom";
import { Camera, Heart, MessageCircle } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'src/components/Media/Gallery-Photos/20240407_161642.jpg',
  },
  {
    id: 2,
    src: 'src/components/Media/Gallery-Photos/double zoom.png',
  },
  {
    id: 3,
    src: 'src/components/Media/Gallery-Photos/DSC08681-2.jpg',
  },
  {
    id: 4,
    src: 'src/components/Media/Gallery-Photos/IMG_4667.jpg',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1119796/pexels-photo-111979.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1618269/pexels-photo-161869.jpeg?auto=compress&cs=tinyrgb&w=600',
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ride <span className="text-emerald-600">Gallery</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Capturing our adventures, one mile at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{image.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{image.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Camera icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>



        <div className="text-center mt-12">
          <Link
            to="/all-gallery"
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View More Photos
          </Link>
        </div>
      </div>
    </section>
  );
}