import React, { useState } from "react";
import person1 from '../../assets/Person1.jpg';
import Employe_Card from "../../Components/Employe_Card";
import Employe_Form from "../../Components/Employe_Form";

function Employe() {
  const [attended, setAttended] = useState(
  [
    {
      ID: "1",
      Name: "Rahul",
      Email: "rahul@example.com",
      Phone: "123-456-7890",
      Department: "Development",
      JoiningDate: "2023-05-15",
      Image: person1,
    },
    {
      ID: "2",
      Name: "Rahul",
      Email: "rahul@example.com",
      Phone: "123-456-7890",
      Department: "Development",
      JoiningDate: "2023-05-15",
      Image: person1,
    },
    {
      ID: "3",
      Name: "Rahul",
      Email: "rahul@example.com",
      Phone: "123-456-7890",
      Department: "Development",
      JoiningDate: "2023-05-15",
      Image: person1,
    }
  ]
);

  const [showForm, setShowForm] = useState(false);

  const handleAddEmployee = (newEmployee) => {
    setAttended([...attended, { ...newEmployee, ID: attended.length + 1 }]);
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
            <Employe_Card key={i} employee={employee} />
          ))}
        </div>
      </div>
      {showForm && (
        <Employe_Form
          onClose={() => setShowForm(false)}
          onSubmit={handleAddEmployee}
        />
      )}
    </div>
  );
}

export default Employe;
