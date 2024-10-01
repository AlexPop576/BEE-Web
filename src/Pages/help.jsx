import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/supportAnimation.json';

export function Help() {
    const [ibuttonDetected, setIbuttonDetected] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Function to poll the server for iButton status
        const checkIbuttonStatus = async () => {
            try {
                const response = await fetch('/ibutton-status');
                const data = await response.json();
                if (data.detected) {
                    setIbuttonDetected(true);
                    navigate('/registration3'); // Redirect when iButton is detected
                }
            } catch (error) {
                console.error("Error checking iButton status", error);
            }
        };

        // Poll every 1 second
        const intervalId = setInterval(checkIbuttonStatus, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [navigate]);

    // Start listening for the iButton when the component mounts
    useEffect(() => {
        const startListening = async () => {
            try {
                await fetch('/help-listen');
            } catch (error) {
                console.error("Error starting to listen for iButton", error);
            }
        };
        startListening();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div id="help-page">
            <Lottie options={defaultOptions} height={500} width={500} id='lottie-animation'/>
            <p className='instructions center large'>Se așteaptă un asistent...</p>
        </div>
    );
}
