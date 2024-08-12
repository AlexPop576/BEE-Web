import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'

export function Registration2() {
    return (
        <div className="App">
            <ul>
                <ul>Daca acesta nu este CNP-ul corect, apasați pe butonul de asistență</ul>
                <ul><Link to="/registration3">
                    <Button text="Continuă" />
                </Link></ul>
            </ul>
        </div>
    );
}