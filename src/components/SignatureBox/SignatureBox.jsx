import React, { useRef, useState, useEffect } from 'react';
import './SignatureBox.css';

export default function SignatureBox() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = window.innerWidth - 90; // Calculate width based on viewport
        const height = canvas.height; // Maintain the existing height

        canvas.width = width;
        context.canvas.width = width; // Ensure the drawing context also updates with the new width
        canvas.height = 240
    };

    useEffect(() => {
        resizeCanvas(); // Initial canvas sizing

        // Add event listener for window resize
        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const startDrawing = (e) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    return (
        <div className="signature-box">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            ></canvas>
        </div>
    );
}
