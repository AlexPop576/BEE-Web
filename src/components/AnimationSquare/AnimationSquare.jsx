import './AnimationSquare.css'
import helpAnimation from '../../assets/helpAnimation.mp4'

export default function AnimationSquare() {
    return (
        <div id="square-container">
            <div className="video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="video-player"
                >
                    <source src={helpAnimation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}