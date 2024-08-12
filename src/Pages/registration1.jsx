import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'

export function Registration1() {
    return (
        <div className="App">
            <ul>
                <ul>Introduceți actul de identitate în interiorul dispozitivului</ul>
                <ul><Link to="/registration2">
                    <Button text = "Continuă"/>
                </Link></ul>
            </ul>
        </div>
    );
}