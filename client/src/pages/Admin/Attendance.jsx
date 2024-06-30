import React, { useState, useEffect } from "react";
import Attend from "../../Components/Attend";
import NotAttend from "../../Components/NotAttend";
import toast from 'react-hot-toast';
import axios from 'axios';

function Attendance() {
    const [attended, setAttended] = useState([]);
    const [notAttended, setNotAttended] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Attended");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resAttended = await axios.get(`http://127.0.0.1:8000/attended/`);
                const resNotAttended = await axios.get(`http://127.0.0.1:8000/not_attended/`);

                console.log("Attended Response:", resAttended.data);
                console.log("Not Attended Response:", resNotAttended.data);

                if (resAttended.data.success && resNotAttended.data.success) {
                    setAttended(resAttended.data.attended);
                    setNotAttended(resNotAttended.data.response);  // Ensure this is the correct key
                } else {
                    toast.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('An error occurred while fetching data. Please try again.');
            }
        };

        fetchData();
    }, []);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <div>
                <div>
                    <select 
                        className="md:ml-10 ml-5 md:text-2xl text-xl text-primary mb-8 outline-none border-2 border-primary rounded"
                        value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        <option value="Attended">Attended</option>
                        <option value="Not Attended">Not Attended</option>
                    </select>
                </div>
                <div className="md:ml-10 flex flex-col md:flex-row gap-8 justify-center items-center md:justify-normal md:items-normal">
                    {selectedOption === "Attended" && 
                        attended.map((obj, i) => (
                            <Attend 
                                key={i} 
                                name={obj.employee_name} 
                                time={obj.attendedtime} 
                                image={obj.image} 
                            />
                        ))
                    }
                    {selectedOption === "Not Attended" && 
                        notAttended.map((obj, i) => (
                            <NotAttend 
                                key={i} 
                                name={obj.name} 
                                image={obj.image} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Attendance;
