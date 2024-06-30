import React, { useState } from "react";

function Employe_Modal({ onClose, employee }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...employee });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update employee details)
    setIsEditing(false); // Exit edit mode
    onClose(); // Close the modal
  };

  const handleCancel = () => {
    setIsEditing(false); // Revert to view mode
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 md:p-8 rounded-lg w-82 md:w-110 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">View Employee Details</h2>
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
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center overflow-y-auto h-100">
            <div className="my-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                value={formData.phone_no}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                value={formData.department}
                onChange={handleInputChange}
                required
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
                value={formData.joindate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-72 md:w-96 h-12 outline-none rounded-md pl-2 text-lg text-primary"
                onChange={handleImageChange}
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
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Name: {employee.name}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Email: {employee.email}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Phone: {employee.phone_no}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Department: {employee.department}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Joining Date: {employee.joindate}</p>
            </div>
            <div className="mb-4">
              <img
                src={`data:image/jpeg;base64,${employee.image}`}
                alt="Employee"
                className="w-72 h-72 object-cover rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-primary text-white px-3 py-1 rounded-md"
                onClick={handleUpdateClick}
              >
                Update Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Employe_Modal;
