import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';

export function Vote1() {
    return (
        <div className="App">
            <ProgressBar activeSteps = {4}/>
            Vote1
            <Link to="/vote2">
                <Button text = "Continuă"/>
            </Link>
        </div>
    );
}