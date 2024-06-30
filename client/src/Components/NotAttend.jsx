import React, { useState, useEffect } from "react";
import person_icon from '../assets/person_icon.png';

function NotAttend(props) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        // Function to convert base64 string to image URL
        const convertBase64ToImage = (base64Str) => {
            return `data:image/jpg;base64,${base64Str}`; // Adjust format based on your image type
        };

        // Set image source when component mounts
        if (props.image) {
            setImageSrc(convertBase64ToImage(props.image));
        }
    }, [props.image]);

    return (
        <div className="shadow-lg bg-third rounded-lg p-2 w-60 pb-8">
            <div className="rounded-lg overflow-hidden">
                <img
                    src={imageSrc}
                    className="object-cover w-60 h-64 rounded-lg"
                    alt="Employee"
                />
            </div>
            <div>
                <div className="flex items-center">
                    <img src={person_icon} className="w-12 h-12" alt="Person Icon" />
                    <div className="pt-2 pl-2 text-lg font-semibold">{props.name}</div>
                </div>
            </div>
        </div>
    );
}

export default NotAttend;
