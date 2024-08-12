import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';

export function Vote2() {
    return (
        <div className="App">
            <ProgressBar activeSteps = {5}/>
            Vote2
            <Link to="/final">
                <Button text = "Continuă"/>
            </Link>
        </div>
    );
}