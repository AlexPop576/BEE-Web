import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import Lottie from 'react-lottie';
import animationData from '../assets/VoteConfirmation.json'; // path to your Lottie JSON file

export function Final() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
    return (
        <div className="App">
            <Lottie options={defaultOptions} height={500} width={500} />
            <p className = "instructions">Votul a fost înregistrat cu succes!</p>
            <Link to="/">
                <Button text = "Finalizare"/>
            </Link>
        </div>
    );
}