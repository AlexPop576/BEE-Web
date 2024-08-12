import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'

export function Vote2() {
    return (
        <div className="App">
            Vote2
            <Link to="/final">
                <Button text = "Continuă"/>
            </Link>
        </div>
    );
}