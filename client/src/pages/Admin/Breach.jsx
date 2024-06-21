import React, { useState } from "react";
import person3 from '../../assets/Person3.jpg'
import Breach1 from "../../Components/Breach";


function Breach(){

    const [attended,setAttended] = useState([
        {
            
            Time:"9:20 AM",
            Images:[person3,person3,person3,person3,person3,person3]
        },
        {
           
            Time:"9:20 AM",
            Images:[person3,person3,person3,person3,person3,person3]
        },
        {
            
            Time:"9:20 AM",
            Images:[person3,person3,person3,person3,person3,person3]
        }
    ]);

    

    

    return(
        <div>
            <div>
                <div>
                    <h1 
                        className="md:ml-10 ml-5 md:text-2xl text-xl text-primary mb-8 outline-none  rounded"
                    >
                       Breaches
                    </h1>
                </div>
                <div className="md:ml-10 flex flex-col md:flex-row gap-8 justify-center items-center md:justify-normal md:items-normal">
                    {
                        attended.map((obj,i)=>(
                            <Breach1 key={i} name={obj.Name} time={obj.Time}  images= {obj.Images} />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Breach;

