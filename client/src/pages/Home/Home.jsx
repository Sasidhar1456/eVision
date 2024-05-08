import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from '../../assets/icon.png'


function Home() {
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

    return (
        <>
            <div className="grid md:grid-flow-col md:grid-cols-2 grid-flow-row items-center  h-screen md:h-full   w-full z-10">
                <div className="h-full flex flex-col justify-center items-center -mt-14 z-10">
                    
                        <img src={icon} alt="" className="object-cover md:h-100 md:w-110" data-aos="zoom-out" data-aos-delay="300" height="400" width="400"/>
                        
                    
                </div>
                <div className=" h-full flex flex-col justify-center items-center  mx-3 mb-3 -mt-36 md:mt-0 z-10 ">
                    
                    <h1 className="font-jom text-7xl text-primary justify-self-center   ">eVision</h1>
                    <p data-aos="fade-up" data-aos-delay="100"  className="pt-1 font-jom text-5xl" >Eagle-Eyed AI: Capturing Every<br/> Face in Crowded <span className="text-primary underline underline-offset-3 underline-primary">Spaces.</span></p>
                    
                </div>
            </div>
        </>
    );
}

export default Home;