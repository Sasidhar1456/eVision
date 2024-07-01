import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';

function Breach_Modal({ onClose, images, props }) {
  const [showForm, setShowForm] = useState(false);
  const [imageSrcList, setImageSrcList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
    department: '',
    joiningDate: ''
  });

  useEffect(() => {
    // Convert base64 strings to image URLs
    const convertBase64ToImageSrc = (base64Str) => {
      return `data:image/jpeg;base64,${base64Str}`;
    };

    if (images && images.length > 0) {
      const srcList = images.map((img) => convertBase64ToImageSrc(img));
      setImageSrcList(srcList);
      setFormData(prev => ({ ...prev, image: images[0] })); // Assuming you want to send the first image
    }
  }, [images]);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, image, department, joiningDate } = formData;

    try {
      const dataToSend = {
        name,
        email,
        phone_no: phone,
        image, // Image is already in base64 format
        department,
        joindate: joiningDate,
      };

      const res = await axios.post('http://127.0.0.1:8000/create-employees/', dataToSend);
      

      if (res.data.status === 'success') {
        toast.success('Employee added successfully');
        // Reset the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          image: '',
          department: '',
          joiningDate: ''
        });
        setShowForm(false);
        onClose();
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
            <form onSubmit={handleSubmit}>
              <div className="my-7">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Employee Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  required
                />
              </div>
              <div className="mb-7">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
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
                  value={formData.joiningDate}
                  onChange={handleChange}
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
              {imageSrcList.map((src, i) => (
                <div key={i} className="m-2">
                  <img
                    src={src}
                    alt={"img" + (i + 1)}
                    className="object-cover w-72 md:h-52 h-64 rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-primary text-white px-3 py-1 rounded-md"
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
