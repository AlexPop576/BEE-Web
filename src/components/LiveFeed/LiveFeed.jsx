import './LiveFeed.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate

const CameraFeed = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [savedImageSrc, setSavedImageSrc] = useState('');
  const [validData, setValidData] = useState(null);  // New state for storing /valid endpoint response
  const navigate = useNavigate(); // Initialize useNavigate
  const refreshInterval = 33; // Refresh interval in milliseconds for ~30 fps

  useEffect(() => {
    const startCamera = async () => {
      try {
        await axios.get('http://localhost:5000/start-camera', { responseType: 'blob' });
      } catch (err) {
        console.error("Error starting camera:", err);
      }
    };

    const fetchImage = async () => {
      try {
        const response2 = await axios.get('http://localhost:5000/image', { responseType: 'blob' });
        if (response2.status === 200) {
          setImageSrc(URL.createObjectURL(response2.data));
        } else {
          console.error("Error fetching image:", response2.statusText);
        }
      } catch (err) {
        console.error("Error fetching image:", err);
      }
    };

    const fetchSavedImage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/saved-image', { responseType: 'blob' });
        if (response.status === 200) {
          setSavedImageSrc(URL.createObjectURL(response.data));
        } else {
          console.error("Error fetching saved image:", response.statusText);
        }
      } catch (err) {
        console.error("Error fetching saved image:", err);
      }
    };

    const fetchValidData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/valid');  // Call /valid endpoint
        if (response.status === 200) {
          setValidData(response.data);  // Store the data from /valid endpoint
          console.log("Valid data fetched:", response.data);

          // Navigate based on the response
          if (response.data.status === "success") {
            navigate('/vote1');
          } else {
            navigate('/help');
          }
        } else {
          console.error("Error fetching valid data:", response.statusText);
          navigate('/help');
        }
      } catch (err) {
        console.error("Error fetching valid data:", err);
        navigate('/help');
      }
    };

    // Start the camera, fetch the initial images
    startCamera();
    fetchImage();
    fetchSavedImage();

    // Set up image refresh interval
    const intervalId = setInterval(fetchImage, refreshInterval);

    // Fetch valid data 3 seconds after component mounts
    const timeoutId = setTimeout(() => {
      fetchValidData();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup function to clear interval and timeout when component unmounts
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div className="camera-feed-container">
      <img src={imageSrc} alt="Live Feed" className="camera-feed" />
      {savedImageSrc && (
        <img src={savedImageSrc} alt="Saved Image" className="saved-image" />
      )}
      {validData && (
        <div className="valid-data">
          <p>Valid Data: {validData}</p>
        </div>
      )}
    </div>
  );
};

export default CameraFeed;
