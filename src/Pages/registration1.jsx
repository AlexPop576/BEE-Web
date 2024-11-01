import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import AnimationSquare from '../components/AnimationSquare/AnimationSquare.jsx';
import AppBar from '../components/AppBar/AppBar.jsx';

export function Registration1() {
    return (
        <div className="App">
                <AppBar index={0} activeSteps = {1}/>
                <p className='instructions'>Introduceți actul de identitate în interiorul dispozitivului</p>
                <div class='center'><AnimationSquare /></div>
                <Button text="Continuă" page="/registration2" active={1}/>
        </div>
    );
}