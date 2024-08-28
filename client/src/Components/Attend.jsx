import React, { useState } from "react";
import person_icon from '../assets/person_icon.png';
import Attend_Modal from "./Attend_Modal";

function formatTime(timeString) {
  // Extract hours and minutes from the UTC timestamp
  const time = timeString.slice(11, 16); // Extracts "09:30" from "2024-06-14T09:30:00Z"
  return time;
}

function Attend(props) {
  console.log(props.image)
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          src={`data:image/jpeg;base64,${props.image}`} // Ensure the correct prefix and type for base64 images
          className="object-cover w-60 h-64 rounded-lg"
          alt="Event"
        />
      </div>
      <div>
        <div className="flex items-center">{/* title */}
          <img src={person_icon} className="w-12 h-12" alt="Person Icon" />
          <div className="pt-2 pl-2 text-lg font-semibold">{props.name}</div>
        </div>

        <div className="mt-2 pl-2 text-md">Attended at {formatTime(props.time)}</div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-primary text-white px-3 py-1 rounded-md mr-2"
            onClick={handleModalOpen}
          >
            View
          </button>
        </div>
      </div>
      {isModalOpen && <Attend_Modal onClose={handleModalClose} images={props.image} />}
    </div>
  );
}

export default Attend;
