import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import navigate

function Attend_Modal({ onClose,images }) {
  

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 md:p-8 rounded-lg w-80 md:w-110 relative ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            View
          </h2>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700 transition duration-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 overflow-y-auto max-h-110">
            {
                
                    <div  className=" m-2 ">
                        <img src={images}  className="object-cover w-60 md:h-52 h-64 rounded-lg "/>
                    </div>
                
            }
        </div>
        
      </div>
    </div>
  );
}

export default Attend_Modal;
