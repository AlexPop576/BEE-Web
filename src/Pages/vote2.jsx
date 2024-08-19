import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';
import SignatureBox from '../components/SignatureBox/SignatureBox.jsx';
import VoteTile from '../components/VoteTile/VoteTile.jsx'
import { partyList } from '../App.js'

export function Vote2() {
    let selectedTile = 1;

    return (
        <div className="App">
            <ProgressBar activeSteps={5} />
            <VoteTile
                party={partyList[selectedTile].party}
                name={partyList[selectedTile].name}
                type={2} />
            <p className="instructions" id="vote2">Confirmă votul prin semnătură</p>
            <SignatureBox />
            <Link to="/final">
                <Button text="Continuă" />
            </Link>
        </div>
    );
}