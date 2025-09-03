import React from "react";

// Import local images
import img1 from "./Media/Gallery-Photos/20240224_150842_1.jpg";
import img2 from "./Media/Gallery-Photos/20240402_205747.jpg";
import img3 from "./Media/Gallery-Photos/20240404_190711.jpg";
import img4 from "./Media/Gallery-Photos/20240406_202318.jpg";
import img5 from "./Media/Gallery-Photos/20240407_132835.jpg";
import img6 from "./Media/Gallery-Photos/20240407_161642.jpg";
import img7 from "./Media/Gallery-Photos/20240407_161752.jpg";
import img8 from "./Media/Gallery-Photos/20240416_203824.jpg";
import img9 from "./Media/Gallery-Photos/20240416_205429.jpg";


// Build gallery array
const allGalleryImages = [
  { id: 1, src: img1, title: "Ride Out 1" },
  { id: 2, src: img2, title: "Night Ride" },
  { id: 3, src: img3, title: "Action Shot" },
  { id: 4, src: img4, title: "Group Gathering" },
  { id: 5, src: img5, title: "Forest Route" },
  { id: 6, src: img6, title: "Santa Cruz Ride" },
  { id: 7, src: img7, title: "Campus Meetup" },
  { id: 8, src: img8, title: "City Lights" },
  { id: 9, src: img9, title: "Evening Stop" },
];

export default function AllGallery() {
  return (
    <section className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          All <span className="text-emerald-600">Photos</span>
        </h2>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {allGalleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg group break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 p-3 text-white text-sm">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
