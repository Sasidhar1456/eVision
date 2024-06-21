import React, { useState } from "react";
import person_icon from '../assets/person_icon.png';
import Attend_Modal from "./Attend_Modal";

function Attend(props) {
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
        <img src={props.images[0]} className="object-cover w-60 h-64 rounded-lg" alt="Event" />
      </div>
      <div>
        <div className="flex items-center">{/* title */}
          <img src={person_icon} className="w-12 h-12" alt="Person Icon" />
          <div className="pt-2 pl-2 text-3xl font-semibold">{props.name}</div>
        </div>

        <div className="mt-2 pl-2 text-md">Attended at {props.time}</div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-primary text-white px-3 py-1 rounded-md mr-2"
            onClick={handleModalOpen}
          >
            View
          </button>
        </div>
      </div>
      {isModalOpen && <Attend_Modal onClose={handleModalClose} images={props.images} />}
    </div>
  );
}

export default Attend;
