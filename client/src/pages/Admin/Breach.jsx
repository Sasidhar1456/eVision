import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import Breach1 from "../../Components/Breach";

function Breach() {
  const [breach, setBreach] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/breaches/');
        console.log("Attended Response:", res.data);

        if (res.data.success) {
          setBreach(res.data.breaches);
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

  return (
    <div>
      <div>
        <div>
          <h1 
            className="md:ml-10 ml-5 md:text-2xl text-xl text-primary mb-8 outline-none rounded"
          >
            Breaches
          </h1>
        </div>
        <div className="md:ml-10 flex flex-col md:flex-row gap-8 justify-center items-center md:justify-normal md:items-normal">
          {breach.map((obj, i) => (
            <Breach1 key={i} name={obj.Name} time={obj.breach_time} images={[obj.image]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Breach;
