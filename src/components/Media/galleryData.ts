// galleryData.ts

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
    { id: 11, type: "album", title: "Spring Ride", photos: [
      importImage("spring2023_1.jpg"),
      importImage("spring2023_2.jpg"),
      importImage("spring2023_3.jpg"),
    ]},
  ],
  // Add more years as needed...
};
