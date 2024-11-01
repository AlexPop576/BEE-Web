import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AppBar.css';
import BackButton from '../../assets/back.png';
import HelpButton from '../../assets/help.png';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function AppBar(props) {
    const [waitingForButton, setWaitingForButton] = useState(false);
    const navigate = useNavigate();

    let nav = props.activeSteps === 2 ? "/helpkeyboard" : "/help";

    const BackButtonList = ["/", "/registration1", "/registration2", "/registration3", "/vote1"];

    const handleHelpButtonClick = async () => {
        setWaitingForButton(true);
        
        try {
            // Call the Flask server to start listening for iButton
            const response = await fetch('/help-listen');
            const data = await response.json();
            console.log(data);

            if (data.status === 'Started listening for iButton.') {
                pollForIButtonDetection();
            } else {
                console.error("Unexpected response from server:", data);
            }
        } catch (error) {
            console.error("Error calling help-listen endpoint:", error);
            setWaitingForButton(false);
        }
    };

    const pollForIButtonDetection = async () => {
        const pollInterval = 1000; // Poll every second
        const maxPollAttempts = 60; // Maximum number of polling attempts (1 minute)
        let attempts = 0;

        const intervalId = setInterval(async () => {
            attempts++;
            try {
                const response = await fetch('/ibutton-status');
                const data = await response.json();
                
                if (data.detected) {
                    clearInterval(intervalId);
                    setWaitingForButton(false);
                    navigate("/nextPage"); // Replace with your actual next page route
                } else if (attempts >= maxPollAttempts) {
                    clearInterval(intervalId);
                    setWaitingForButton(false);
                    console.error("iButton not detected within the time limit.");
                }
            } catch (error) {
                clearInterval(intervalId);
                setWaitingForButton(false);
                console.error("Error polling iButton status:", error);
            }
        }, pollInterval);
    };

    return (
        <div className="app-bar">
            <Link to={BackButtonList[props.index]}>
                <button className="appbar-button">
                    <img src={BackButton} alt="Back" className='button-image'/>
                </button>
            </Link>
            <ProgressBar activeSteps={props.activeSteps} />
            <Link to={nav}>
            <button className="appbar-button" onClick={handleHelpButtonClick} disabled={waitingForButton}>
                <img src={HelpButton} alt="Help" className='button-image'/>
            </button></Link>
        </div>
    );
}
