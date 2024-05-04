import React from "react";
import Nav_Home from "./Components/Nav_Home";
import Home1 from './pages/Home/Home'
import About from "./pages/Home/About";
import Contact from './pages/Home/Contact'
import { Route, Routes } from "react-router-dom";

function Home() {
    return(
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
    )
}

export default Home