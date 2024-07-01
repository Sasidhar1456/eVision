import React, { useState } from "react";
import Breach_Modal from "./Breach_Modal";

function Breach_Card({ name, time, images, fetchData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function formatTime(timeString) {
    // Extract hours and minutes from the UTC timestamp
    const time = timeString.slice(11, 16); // Extracts "09:30" from "2024-06-14T09:30:00Z"
    return time;
  }

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const convertBase64ToImageSrc = (base64Str) => {
    return `data:image/jpeg;base64,${base64Str}`; // Adjust based on image type
  };

  return (
    <div className="shadow-lg bg-third rounded-lg p-2 w-60">
      <div className="rounded-lg">
        <img
          src={convertBase64ToImageSrc(images[0])} // assuming the first image is used
          className="object-cover w-60 h-64 rounded-lg"
          alt="Breach"
        />
      </div>
      <div>
        <div className="mt-2 pl-2 text-md">Breached at {formatTime(time)}</div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-primary text-white px-3 py-1 mb-2 rounded-md mr-2"
            onClick={handleModalOpen}
          >
            View
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Breach_Modal onClose={handleModalClose} props={{ breach_id: name }} images={images} fetchData={fetchData} />
      )}
    </div>
  );
}

export default Breach_Card;
