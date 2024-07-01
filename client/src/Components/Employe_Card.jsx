import React, { useState, useEffect } from 'react';
import person_icon from '../assets/person_icon.png';
import Employe_Modal from './Employe_Modal';

function Employe_Card({ employee , fetchData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Function to convert base64 string to image URL
    const convertBase64ToImage = (base64Str) => {
      return `data:image/jpg;base64,${base64Str}`; // Adjust format based on your image type
    };

    // Set image source when component mounts
    setImageSrc(convertBase64ToImage(employee.image));
  }, [employee.image]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="shadow-lg bg-third rounded-lg p-3 w-60">
      <div className="rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          className="object-cover w-60 h-64 rounded-lg"
          alt="Employee"
        />
      </div>
      <div>
        <div className="flex items-center">
          <img src={person_icon} className="w-12 h-12" alt="Person Icon" />
          <div className="pt-2 pl-2 text-lg font-semibold">{employee.name}</div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-primary text-white px-3 py-1 rounded-md mr-2"
            onClick={handleModalOpen}
          >
            View
          </button>
        </div>
      </div>
      {isModalOpen && <Employe_Modal onClose={handleModalClose} employee={employee} fetchData={fetchData}/>}
    </div>
  );
}

export default Employe_Card;
