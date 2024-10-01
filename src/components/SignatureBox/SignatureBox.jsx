import React, { useRef, useState, useEffect } from 'react';
import './SignatureBox.css';

export default function SignatureBox() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasDrawn, setHasDrawn] = useState(false); // Track if the user has drawn anything

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = window.innerWidth - 90; // Calculate width based on viewport

        canvas.width = width;
        context.canvas.width = width; // Ensure the drawing context also updates with the new width
        canvas.height = 240;

        if (!hasDrawn) {
            drawPlaceholderText(context, width, canvas.height);
        }
    };

    const drawPlaceholderText = (context, width, height) => {
        context.fillStyle = 'grey';
        context.font = '30px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('Semnează aici', width / 2, height / 2);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.strokeStyle = '#000'; // Set the stroke color
        context.lineWidth = 30; // Set the line width
        context.lineCap = 'round';

        resizeCanvas(); // Initial canvas sizing

        // Add event listener for window resize
        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [hasDrawn]); // Re-run on hasDrawn change to update placeholder if necessary

    const startDrawing = (e) => {
        setIsDrawing(true);
        setHasDrawn(true); // User has started drawing, so placeholder should disappear
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (!hasDrawn) {
            context.clearRect(0, 0, canvas.width, canvas.height); // Clear the placeholder text
        }

        // Get the touch/mouse position and start the path
        const { offsetX, offsetY } = getEventPosition(e);
        context.beginPath();
        context.moveTo(offsetX, offsetY);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Get the touch/mouse position and draw the line
        const { offsetX, offsetY } = getEventPosition(e);
        context.lineTo(offsetX, offsetY);
        context.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const getEventPosition = (e) => {
        let offsetX, offsetY;
        if (e.nativeEvent.touches && e.nativeEvent.touches.length > 0) {
            const touch = e.nativeEvent.touches[0];
            const rect = canvasRef.current.getBoundingClientRect();
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
        } else {
            offsetX = e.nativeEvent.offsetX;
            offsetY = e.nativeEvent.offsetY;
        }
        return { offsetX, offsetY };
    };

    return (
        <div className="signature-box">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
            ></canvas>
        </div>
    );
}
