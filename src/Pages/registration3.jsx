import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'

export function Registration3() {
    return (
        <div className="App">
            <ul>
                <ul>Verificare identitate</ul>
                <ul><Link to="/vote1">
                    <Button text="Continuă" />
                </Link></ul>
            </ul>
        </div>
    );
}