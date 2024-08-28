import React, { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import Nav_Home from "./Components/Nav_Home";
import Home1 from './pages/Home/Home';
import About from "./pages/Home/About";
import Contact from './pages/Home/Contact';
import { Route, Routes } from "react-router-dom";

function Home() {
  useEffect(() => {
    const intro = introJs();

    intro.setOptions({
      steps: [
        {
          element: '.home-link',
          intro: 'This is the Home link where you can return to the homepage.',
        },
        {
          element: '.contact-link',
          intro: 'This is the Contact Us link where you can get in touch with us.',
        },
        {
          element: '.login-button',
          intro: 'This is the Log in button where you can log into your account.',
        },
      ],
      showProgress: true,           // Show progress bar
      showStepNumbers: true,        // Show step numbers
      exitOnOverlayClick: true,     // Allow exit on overlay click
      disableInteraction: true,     // Disable interaction with highlighted elements
    });

    intro.start();  // Start the tour
  }, []);  // Empty dependency array means this runs once when the component mounts

  return (
    <div className="flex flex-col h-screen m-0 p-0 bg-secondary">
      <Nav_Home />

      <div className="mt-8 flex flex-grow overflow-hidden">
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
