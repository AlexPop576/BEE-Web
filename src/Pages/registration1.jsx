import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import AnimationSquare from '../components/AnimationSquare/AnimationSquare.jsx';
import AppBar from '../components/AppBar/AppBar.jsx';

export function Registration1() {
    return (
        <div className="App">
            <ul>
                <AppBar index={0} activeSteps = {1}/>
                <ul className='instructions'>Introduceți actul de identitate în interiorul dispozitivului</ul>
                <ul class='center'><AnimationSquare /></ul>
                <ul><Link to="/registration2">
                    <Button text="Continuă" />
                </Link></ul>
            </ul>
        </div>
    );
}