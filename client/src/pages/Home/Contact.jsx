import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from '../../assets/icon.png'
import toast from 'react-hot-toast';
import axios from 'axios';


function Contact() {
    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom'
        });
        // Clean up AOS on unmount
        return () => AOS.refresh();
    }, []);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // You can access email and query here to submit the data

        try {
            const data = { name:name,phone_no:phone,email:email,query:query }
            const res = await axios.post('http://127.0.0.1:8000/admin-query/', data);
                console.log("res", res);
            if (res.data.success) {
                setName("");
                setPhone("");
                setEmail("");
                setQuery("");
                toast.success("Message Sent Sucessfully")
            }
            else {
                // fetch failed
                toast.error(response.data.message);
            }
        }
        catch (error) {
            console.error('Error fetching', error);
            toast.error('An error occurred while fecthing. Please try again.');
        };
        
        

    };

    return (
        <>
            <div className="grid md:grid-flow-col md:grid-cols-2 grid-flow-row items-center  h-screen md:h-full   w-full">
                <div className="h-full md:flex flex-col justify-center items-center -mt-14 hidden">
                    <img src={icon} alt="" className="object-cover md:h-100 md:w-110" data-aos="zoom-out" data-aos-delay="300" height="400" width="400"/>
                </div>
                <div className=" h-full flex flex-col justify-center items-center  mx-3 mb-3 -mt-36 md:mt-0 ">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                            type="text"
                            placeholder="Your Name"
                            className="mb-7 w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                            value={name} required={true}
                            onChange={handleNameChange}
                        />
                    <input
                            type="tel"
                            placeholder="Your Phone"
                            className="mb-7 w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                            value={phone} required={true}
                            onChange={handlePhoneChange}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="mb-7 w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                            value={email} required={true}
                            onChange={handleEmailChange}
                        />
                        <textarea
                            placeholder="Your Query"
                            className="mb-7 w-72 md:w-96 h-64 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md p-1 pl-2 text-lg text-primary"
                            value={query} required={true}
                            onChange={handleQueryChange}
                        />
                        <button className="bg-primary text-white w-72 md:w-96 h-12 rounded-md" type="submit">Send us a Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
