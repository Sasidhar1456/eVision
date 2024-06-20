import React, { useState } from "react";

function Breach_Modal({ onClose, images }) {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 md:p-8 rounded-lg w-82 md:w-110 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">View</h2>
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

        {showForm ? (
          <div className="mt-4 flex justify-center overflow-y-auto h-100">
            <form>
              <div className="my-7 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Employee ID
                </label>
                <input
                  type="text"
                  
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                />
              </div>
              <div className="mb-7">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Employee Name
                </label>
                <input
                  type="text"
                  
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                />
              </div>
              <div className="mb-7">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
              
              required
            />
          </div>
          <div className="mb-7">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
              
              required
            />
          </div>
              <div className="mb-7">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Department
                </label>
                <input
                  type="text"
                  
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                />
              </div>
              <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="joiningDate">
                Joining Date
              </label>
              <input
                type="date"
                id="joiningDate"
                name="joiningDate"
                className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                
                required
              />
            </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-primary text-white px-3 py-1 rounded-md mr-2 w-36 md:w-48 h-12"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-3 py-1 rounded-md w-36 md:w-48 h-12"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-content items-center overflow-y-auto max-h-110">
              {images.map((img, i) => (
                <div key={i} className="m-2">
                  <img
                    src={img}
                    alt={"img" + (i + 1)}
                    className="object-cover w-72 md:h-52 h-64 rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-primary text-white px-3 py-1 rounded-md "
                onClick={handleRegisterClick}
              >
                Register This Person
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Breach_Modal;
