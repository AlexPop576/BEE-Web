import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/supportAnimation.json';
import Button from '../components/Button/Button.jsx';

export function HelpKeyboard() {
    const [ibuttonDetected, setIbuttonDetected] = useState(false);
    const [inputText, setInputText] = useState(""); // State for managing input text
    const [showKeyboard, setShowKeyboard] = useState(false); // State to control keyboard visibility
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

    // Show the keyboard after 7 seconds
    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowKeyboard(true);
        }, 7000);

        return () => clearTimeout(timerId); // Cleanup timer on component unmount
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // Handle click on keyboard button
    const handleKeyPress = (key) => {
        if (key === 'Backspace') {
            setInputText(inputText.slice(0, -1)); // Remove last character on backspace
        } else {
            setInputText(inputText + key); // Add the character to input text
        }
    };

    return (
        <div id="help-page">
            <Lottie options={defaultOptions} height={500} width={500} id='lottie-animation' />
            <p className='instructions center large'>Se așteaptă un asistent...</p>

            {/* Text input field */}
            <div className='input-section'>
                <input
                    type="text"
                    value={inputText}
                    placeholder="Enter number here"
                    className='text-input'
                    readOnly
                />
            </div>

            {/* On-screen numeric keyboard (visible only after 7 seconds) */}
            {showKeyboard && (
                <div className='keyboard'>
                    {['1', '2', '3'].map((key) => (
                        <button key={key} onClick={() => handleKeyPress(key)} className='key-button'>{key}</button>
                    ))}
                    {['4', '5', '6'].map((key) => (
                        <button key={key} onClick={() => handleKeyPress(key)} className='key-button'>{key}</button>
                    ))}
                    {['7', '8', '9'].map((key) => (
                        <button key={key} onClick={() => handleKeyPress(key)} className='key-button'>{key}</button>
                    ))}
                    <button onClick={() => handleKeyPress('0')} className='key-button zero-button'>0</button>
                    <button onClick={() => handleKeyPress('Backspace')} className='key-button large'>Backspace</button>
                </div>
            )}

            {/* Button to navigate to /registration3 */}
            <Button text="Continuă" active={1} page="/registration3" />
        </div>
    );
}
