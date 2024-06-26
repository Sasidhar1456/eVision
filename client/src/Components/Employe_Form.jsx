import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

function Employe_Form({ onClose, onSubmit, fetchData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
    department: '',
    joiningDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]); // Remove the data:image/png;base64, part
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, image, department, joiningDate } = formData;

    try {
      const base64Image = await convertToBase64(image);
      console.log('Base64 Image:', base64Image); // Log the base64 image string

      const dataToSend = {
        name,
        email,
        phone_no: phone,
        image: base64Image, // Send the base64 string
        department,
        joindate: joiningDate,
      };

      const res = await axios.post('http://127.0.0.1:8000/create-employees/', dataToSend);

      if (res.data.status === 'success') {
        toast.success('Employee added successfully');
        onSubmit(dataToSend); // Call the onSubmit handler to update the state
        await fetchData(); // Refetch employees data
      } else {
        toast.error(res.data.message || 'Failed to add employee');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        toast.error(`Error: ${error.response.data.message || 'An error occurred while adding employee. Please try again.'}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        toast.error('No response from server. Please try again later.');
      } else {
        console.error('Error setting up request:', error.message);
        toast.error('An error occurred while adding employee. Please try again.');
      }
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 md:p-8 rounded-lg w-82 md:w-110 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Employee</h2>
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center overflow-y-auto h-100">
          <div className="my-7">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
              value={formData.name}
              onChange={handleChange}
              required
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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
              onChange={handleChange}
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
              value={formData.joiningDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-7">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-72 md:w-96 h-12 outline-none rounded-md pl-2 text-lg text-primary"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-3 py-1 rounded-md mr-2 w-72 md:w-96 h-12"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Employe_Form; 
