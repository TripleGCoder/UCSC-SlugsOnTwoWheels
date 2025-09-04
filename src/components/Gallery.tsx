import React from 'react';
import { Link } from "react-router-dom";


const galleryImages = [
  {
    id: 1,
    src: './Media/Gallery-Photos/CMP_7944_edit-High-3264.jpg',
    position: "object-left",
  },
  {
    id: 2,
    src: './Media/Gallery-Photos/IMG_4667.jpg',
  },
  {
    id: 3,
    src: './Media/Gallery-Photos/DSC08681-2.jpg',
  },
  {
    id: 4,
    src: './Media/Gallery-Photos/20240407_161642.jpg',
  },
  {
    id: 5,
    src: './Media/Gallery-Photos/Jesus Zoom.png',
  },
  {
    id: 6,
    src: './Media/Gallery-Photos/20240404_190711.jpg',
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
                  className={`w-full h-full object-cover ${image.position} group-hover:scale-110 transition-transform duration-500`}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          ))}
        </div>



        <div className="text-center mt-12">
          <Link
            to="/all-gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View More Photos
          </Link>
        </div>
      </div>
    </section>
  );
}