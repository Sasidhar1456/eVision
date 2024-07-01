import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import Employe_Card from '../../Components/Employe_Card';
import Employe_Form from '../../Components/Employe_Form'
import Employe_Modal from '../../Components/Employe_Modal'; // Import Employe_Modal

function Employe() {
  const [attended, setAttended] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State for the selected employee

  const fetchData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/admin-employees/');
      console.log("Attended Response:", res.data);

      if (res.data.success) {
        setAttended(res.data.employees);
      } else {
        toast.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('An error occurred while fetching data. Please try again.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddEmployee = async (newEmployee) => {
    setAttended([...attended, { ...newEmployee, employee_id: attended.length + 1 }]);
    await fetchData();
  };

  const handleCardClick = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee
  };

  return (
    <div>
      <div>
        <div>
          <button
            className="md:ml-10 ml-5 md:text-2xl text-xl mb-8 bg-primary text-white px-3 py-1 rounded-md"
            onClick={() => setShowForm(true)}
          >
            &#65291; Add New Employee
          </button>
        </div>
        <div className="md:ml-10 flex flex-col md:flex-row gap-8 justify-center items-center md:justify-normal md:items-normal">
          {attended.map((employee, i) => (
            <Employe_Card key={i} employee={employee} onClick={() => handleCardClick(employee)} fetchData = {fetchData} />
          ))}
        </div>
      </div>
      {showForm && (
        <Employe_Form
          onClose={() => setShowForm(false)}
          onSubmit={handleAddEmployee}
          fetchData={fetchData}
        />
      )}
      {selectedEmployee && (
        <Employe_Modal
          onClose={() => setSelectedEmployee(null)} // Close the modal
          employee={selectedEmployee}
          fetchData={fetchData} // Pass the fetchData function to the modal
        />
      )}
    </div>
  );
}

export default Employe;
