import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar/Navbar.jsx";
import Hero from "./assets/components/Hero/Hero.jsx";
import About from "./assets/components/About/About.jsx";
import CharDhamSection from "./assets/components/CharDham/CharDham.jsx";
import Activities from "./assets/components/Activities/Activities.jsx";
import VideoSection from "./assets/components/VideoSection/VideoSection.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";

import Abouts from "./assets/components/Nav.com/Abouts.jsx";
import CharDhamPage from "./assets/components/NavCharDham/CharDhams.jsx";
import Activitiess from "./assets/components/NavActivities/Activitiess.jsx";
import Contacts from "./assets/components/Navcontact/Contacts.jsx";

import PlaceDetails from "./assets/components/CharDham/PlaceDetails.jsx";
import ActivityDetails from "./assets/components/Activities/ActivityDetails.jsx";

import ScrollProgress from "./assets/components/ScrollProgress.jsx";
import FloatingContact from "./assets/components/FloatingContact.jsx";
import ScrollToTop from "./assets/components/ScrollToTop.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CharDhamSection />
      <Activities />
      <VideoSection />
      {/* Removed FloatingContact from here */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Floating Contact (will show on all pages) */}
      <FloatingContact />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/chardham" element={<CharDhamPage />} />
          <Route path="/activities" element={<Activitiess />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/place/:name" element={<PlaceDetails />} />
          <Route path="/activities/:name" element={<ActivityDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
