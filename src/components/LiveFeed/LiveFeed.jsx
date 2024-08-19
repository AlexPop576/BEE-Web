import './LiveFeed.css'
import React, { useEffect, useRef } from 'react';

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        // Request access to the user's camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          // Assign the stream to the video element
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startVideo();

    // Clean up the video stream on component unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-feed-container">
      <video ref={videoRef} autoPlay playsInline className="camera-feed" />
      <p>Please turn on your camera</p>
    </div>
  );
};

export default CameraFeed;
