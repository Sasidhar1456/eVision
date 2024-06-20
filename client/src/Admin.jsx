import React from "react";
import Nav_Admin from './Components/Nav_Admin'
import Home1 from './pages/Admin/Home'
import Attendance from "./pages/Admin/Attendance";
import Breach from "./pages/Admin/Breach";
import Employe from "./pages/Admin/Employe";
import { Route, Routes } from "react-router-dom";

function Admin() {
    return(
        <div className="flex flex-col h-screen m-0 p-0 bg-secondary">
          <Nav_Admin />

          <div className="mt-8 flex flex-grow overflow-hidden">
              <div className="flex-grow overflow-y-auto">
                  <Routes>
                      <Route path="/" element={<Home1 />} />
                      <Route path="/attendance" element={<Attendance />} />
                      <Route path="/breach" element={<Breach />} />
                      <Route path="/employe" element={<Employe />} />
                  </Routes>
              </div>
          </div>
      </div>
    )
}

export default Admin