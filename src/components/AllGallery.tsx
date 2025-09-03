import React, { useState } from "react";

// Helper to import images cleanly
const importImage = (file: string) =>
  new URL(`./Media/Gallery-Photos/${file}`, import.meta.url).href;

// Organized gallery data by year
export const allGalleryImages = {
  "2024": [
    { id: 1, type: "photo", src: importImage("20240224_150842_1.jpg") },
    { id: 2, type: "photo", src: importImage("20240402_205747.jpg") },
    { id: 3, type: "photo", src: importImage("20240404_190711.jpg") },
    { id: 4, type: "photo", src: importImage("20240406_202318.jpg") },
    { id: 5, type: "photo", src: importImage("20240407_132835.jpg") },
    { id: 6, type: "photo", src: importImage("20240407_161642.jpg") },
    { id: 7, type: "photo", src: importImage("20240407_161752.jpg") },
    { id: 8, type: "photo", src: importImage("20240416_203824.jpg") },
    { id: 9, type: "photo", src: importImage("20240416_205429.jpg") },
  ],
  "2023": [
    { id: 10, type: "photo", src: importImage("example2023_1.jpg") },
    {
      id: 11,
      type: "album",
      title: "Spring Ride",
      photos: [
        importImage("spring2023_1.jpg"),
        importImage("spring2023_2.jpg"),
        importImage("spring2023_3.jpg"),
      ],
    },
  ],
  // Add more years as needed...
};

export default function AllGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          All <span className="text-emerald-600">Photos</span>
        </h2>

        {/* Loop through years, sorted oldest → newest */}
        {Object.entries(allGalleryImages)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, images]) => (
            <div key={year} className="mb-16">
              <h3 className="text-3xl font-semibold text-slate-800 mb-8">
                {year}
              </h3>

              {/* Masonry grid */}
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden rounded-xl shadow-lg group break-inside-avoid cursor-pointer"
                    onClick={() =>
                      image.type === "photo" && setSelectedImage(image.src)
                    }
                  >
                    {image.type === "photo" ? (
                      <img
                        src={image.src}
                        alt={image.title || `Photo from ${year}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="bg-slate-200 p-6 text-center rounded-xl">
                        <p className="font-medium">{image.title}</p>
                        <p className="text-sm text-slate-600">
                          Album ({image.photos.length} photos)
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Overlay Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
}
