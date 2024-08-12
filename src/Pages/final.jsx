import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'

export function Final() {
    return (
        <div className="App">
            Final
            <Link to="/">
                <Button text = "Finalizare"/>
            </Link>
        </div>
    );
}