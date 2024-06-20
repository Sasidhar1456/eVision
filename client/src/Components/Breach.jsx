import React, { useState } from "react";
import Breach_Modal from "./Breach_Modal";

function Breach(props){


    const [isModalOpen,setIsModalOpen] = useState(false)

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return(
        <div className="shadow-lg bg-third rounded-lg p-2 w-60 ">
            <div className="rounded-lg">
                <img src={props.images[0]} className="object-cover w-60 h-64 p-2 " />
            </div>
            <div>
                
                <div className="flex">{/* title */}
                
                </div>


                <div className="mt-2 pl-2 text-md">Breached at {props.time}</div>
                
                <div className="mt-4 flex justify-end">
                <button
                    className="bg-primary text-white px-3  py-1 rounded-md  mr-2 "
                    onClick={handleModalOpen}
                  >
                    View
                  </button>
                </div>
            </div>
            {isModalOpen && <Breach_Modal onClose={handleModalClose} images={props.images} />}
        </div>
    )
}

export default Breach