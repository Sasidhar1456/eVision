import React,{useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Login from "./Login";



function Nav_Home(){

    const [showLoginModal, setShowLoginModal] = useState(false);

    const ham = () => {
        const list = document.getElementById("nav")
        const ham = document.getElementById("ham")
        const cross = document.getElementById("cross")
       
        if(list.classList.contains("hidden")){
            list.classList.remove("hidden")
            ham.classList.add("hidden")
            cross.classList.remove("hidden")
            
        }
        else{
            list.classList.add("hidden")
            
            ham.classList.remove("hidden")
            cross.classList.add("hidden")
        }
    }

    const handleLoginClick = () => {
        setShowLoginModal(true);
      };

    //md:border-b-2 border-r-4 border-primary

    return (
        <>
          <div className="  md:flex md:flex-row md:justify-between md:px-10 sticky">
            <div className=" flex flex-row justify-between items-center w-full md:w-auto">
              <div className="pl-2 my-5">
                <h1 className="text-xl md:text-2xl text-primary font-bold">eVision</h1>
              </div>
    
              <div className="p-2 flex flex-col items-end">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 mr-3 md:hidden"
                    onClick={ham}
                    id="ham"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5 " />
                  </svg>
    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 mr-3 hidden md:hidden"
                    onClick={ham}
                    id="cross"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
    
            <div>
              <ul className="text-right  p-2 hidden  md:flex md:justify-evenly " id="nav">
                <CustomLink name="Home" to="/" ham={ham} />
    
                <CustomLink name="Contact Us" to="/contact" ham={ham} />
                <div className="md:flex flex-col justify-center">
                  <button
                    className="bg-primary text-white px-3  py-1 rounded-md mr-5 md:mr-0 "
                    onClick={handleLoginClick}
                  >
                    Log in
                  </button>
                </div>
              </ul>
            </div>
          </div>
          {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
        </>
      );
    }

function CustomLink(props){
    const resolvedPath = useResolvedPath(props.to)
    const isActive = useMatch({path : resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "link active": "link"} onClick={props.ham}> 
        <Link to={props.to} >{props.name}
        </Link>
        </li>
    )
}



export default Nav_Home