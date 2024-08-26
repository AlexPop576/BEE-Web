import './LiveFeed.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CameraFeed = () => {
  const [imageSrc, setImageSrc] = useState('');
  const refreshInterval = 33; // Refresh interval in milliseconds for ~30 fps

  useEffect(() => {
    const startCamera =  () => {
      try {
        axios.get('http://localhost:5000/start-camera', { responseType: 'blob' });
      } catch (err) {
        console.error("Error starting image:", err);
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

    startCamera();
    fetchImage(); // Fetch image initially
    const intervalId = setInterval(fetchImage, refreshInterval); // Fetch image periodically

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="camera-feed-container">
      <img src={imageSrc} alt="Live Feed" className="camera-feed" />
    </div>
  );
};

export default CameraFeed;
