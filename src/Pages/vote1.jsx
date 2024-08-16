import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';
import VoteTile from '../components/VoteTile/VoteTile.jsx';

export function Vote1() {
    return (
        <div className="App">
            <ProgressBar activeSteps = {4}/>
            <div className='grid-container'>
                <VoteTile party="Partidul Social Democrat" name="Ion" type={1}/>
                <VoteTile party="Partidul Social Democrat" name="Ion" type={1}/>
                <VoteTile party="Partidul Social Democrat" name="Ion" type={1}/>
                <VoteTile party="Partidul Social Democrat" name="Ion" type={1}/>
                <VoteTile party="Partidul Social Democrat" name="Ion" type={1}/>
                <VoteTile party="Partidul Social Democrat" name="Ion" type={1}/>
            </div>
            <Link to="/vote2">
                <Button text = "Continuă"/>
            </Link>
        </div>
    );
}