import React from "react";
import person_icon from '../assets/person_icon.png'

function NotAttend(props){

    return(
        <div className="shadow-lg bg-third rounded-lg p-2 w-60 pb-8">
            <div className="rounded-lg">
                <img src={props.image} className="object-cover w-60 h-64 p-2 " />
            </div>
            <div>
                
                <div className="flex">{/* title */}
                <div><img src={person_icon} className=" w-12 h-12" /></div>
                <div className="pt-2 pl-2 text-3xl font-semibold">{props.name}</div>
                </div>


                
                
                
                
            </div>
        </div>
    )
}

export default NotAttend