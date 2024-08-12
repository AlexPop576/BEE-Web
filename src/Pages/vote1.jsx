import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'

export function Vote1() {
    return (
        <div className="App">
            Vote1
            <Link to="/vote2">
                <Button text = "Continuă"/>
            </Link>
        </div>
    );
}