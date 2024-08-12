import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import AnimationSquare from '../components/AnimationSquare/AnimationSquare.jsx';

export function Registration1() {
    return (
        <div className="App">
            <ul>
                <ul className='instructions'>Introduceți actul de identitate în interiorul dispozitivului</ul>
                <ul class='center'><AnimationSquare/></ul>
                <ul><Link to="/registration2">
                    <Button text = "Continuă"/>
                </Link></ul>
            </ul>
        </div>
    );
}