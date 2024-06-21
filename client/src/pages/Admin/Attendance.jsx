import React, { useState } from "react";
import person1 from '../../assets/Person1.jpg'
import Attend from "../../Components/Attend";
import person2 from '../../assets/Person2.jpg'
import NotAttend from "../../Components/NotAttend";

function Attendance(){

    const [attended,setAttended] = useState([
        {
            Name:"Rahul",
            Time:"9:20 AM",
            Images:[person1,person1,person1,person1,person1,person1]
        },
        {
            Name:"Rahul",
            Time:"9:20 AM",
            Images:[person1,person1,person1,person1,person1,person1]
        },
        {
            Name:"Rahul",
            Time:"9:20 AM",
            Images:[person1,person1,person1,person1,person1,person1]
        }
    ]);

    const [notattended,setNotAttended] = useState([
        {
            Name:"John",
            Image:person2
        },
        {
            Name:"John",
            Image:person2
        },
        {
            Name:"John",
            Image:person2
        }
    ]);

    const [selectedOption, setSelectedOption] = useState("Attended");

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return(
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
                        attended.map((obj,i)=>(
                            <Attend key={i} name={obj.Name} time={obj.Time}  images= {obj.Images} />
                        ))
                    }
                    {selectedOption === "Not Attended" && 
                        notattended.map((obj,i)=>(
                            <NotAttend key={i} name={obj.Name}   image= {obj.Image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Attendance;
