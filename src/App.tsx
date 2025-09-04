import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import AllGallery from "./components/AllGallery";
import Join from "./components/Join";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Gallery />
              <Join />
              <Events />
            </>
          }
        />

        {/* Full gallery page */}
        <Route path="/all-gallery" element={<AllGallery />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
