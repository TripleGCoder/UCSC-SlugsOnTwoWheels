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
    { id: 6, type: "photo", src: importImage("fOOD.jpg") },
    { id: 7, type: "photo", src: importImage("20240407_161642.jpg") },
    { id: 8, type: "photo", src: importImage("20240407_161752.jpg") },
    { id: 9, type: "photo", src: importImage("20240407_161756.jpg") },
    { id: 10, type: "photo", src: importImage("20240416_203824.jpg") },
    { id: 11, type: "photo", src: importImage("20240416_205429.jpg") },
    { id: 12, type: "photo", src: importImage("20240416_211751.jpg") },
    { id: 13, type: "photo", src: importImage("20240604_181429.jpg") },
    { id: 14, type: "photo", src: importImage("double zoom.png") },
    { id: 15, type: "photo", src: importImage("image.jpg") },
    { id: 16, type: "photo", src: importImage("NatBike.png") },
    { id: 17, type: "photo", src: importImage("Jesus Zoom.png") },
    { id: 18, type: "photo", src: importImage("image (2).png") },
    { id: 19, type: "photo", src: importImage("DSC07515.jpg") },
    { id: 20, type: "photo", src: importImage("image-1_2.jpg") },
    { id: 21, type: "photo", src: importImage("IMG_0013.jpg") },
    { id: 22, type: "photo", src: importImage("IMG_4527.jpg") },
  ],
  "2023": [
    { id: 10, type: "photo", src: importImage("IMG_4110.jpg") },
    // {
    //   id: 11,
    //   type: "album",
    //   title: "Spring Ride",
    //   photos: [
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //     importImage("20240224_150842_1.jpg"),
    //     importImage("20240402_205747.jpg"),
    //     importImage("20240404_190711.jpg"),
    //   ],
    // },
  ],
};

export default function AllGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<{ title: string; photos: string[] } | null>(null);

  return (
    <section className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          All <span className="text-emerald-600">Photos</span>
        </h2>

        {/* Loop through years, sorted newest → oldest */}
        {Object.entries(allGalleryImages)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, images]) => (
            <div key={year} className="mb-16">
              <h3 className="text-3xl font-semibold text-slate-800 mb-8">
                {year}
              </h3>

              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden rounded-xl shadow-lg group break-inside-avoid cursor-pointer"
                    onClick={() => {
                      if (image.type === "photo") setSelectedImage(image.src);
                      if (image.type === "album") setSelectedAlbum({ title: image.title, photos: image.photos });
                    }}
                  >
                    {image.type === "photo" ? (
                      <img
                        src={image.src}
                        alt={image.title || `Photo from ${year}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative">
                        <img
                          src={image.photos[0]}
                          alt={image.title}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                          <p className="font-bold text-lg">{image.title}</p>
                          <p className="text-sm">{image.photos.length} photos</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Overlay for album */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 bg-white flex flex-col items-center justify-start z-40 p-6 overflow-y-auto"
          onClick={() => setSelectedAlbum(null)}
        >
          {/* Close button aligned with title */}
          <button
            className="absolute top-28 right-6 text-black text-4xl font-bold"
            onClick={() => setSelectedAlbum(null)}
          >
            ✕
          </button>

          {/* Album title */}
          <h1 className="pt-32 pb-16 text-6xl font-bold mb-6">{selectedAlbum.title}</h1>

          {/* Album photos grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
            {selectedAlbum.photos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing the album overlay
                  setSelectedImage(photo);
                }}
              >
                <img
                  src={photo}
                  alt={`Album photo ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overlay for single image (always on top) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]"
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
