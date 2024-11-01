import './CnpBox.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CnpBox(props) {
  const [capturedText, setCapturedText] = useState(''); // State to hold the captured text

  const fetchCapturedText = async () => {
    try {
      const response = await axios.get('http://localhost:5000/capture');
      const text = response.data.captured_text; // Get the captured text from the response
      setCapturedText(text); // Update state with captured text
      localStorage.setItem('cnp', text+'123'); // Store the captured text in localStorage
      console.log('fetch');
      props.event(1);
    } catch (error) {
      console.error('Error fetching captured text:', error);
      setCapturedText('Failed to fetch text'); // Update state in case of error
    }
  };

  // Fetch captured text when component mounts
  useEffect(() => {
    fetchCapturedText();
    console.log("uE");
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="cnp-field">
      {capturedText || 'Se așteaptă datele...'} {/* Display captured text or a fallback message */}
    </div>
  );
}
