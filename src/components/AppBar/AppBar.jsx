import './AppBar.css'
import BackButton from '../../assets/back.png';
import HelpButton from '../../assets/help.png';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function AppBar(props) {
    let BackButtonList = ["/", "/registration1", "/registration2"]

    return (
        <div class="app-bar">
            <Link to={BackButtonList[props.index]}>
                <button class="appbar-button">
                    <img src={BackButton} alt="Back" />
                </button>
            </Link>
            <ProgressBar activeSteps={props.activeSteps} />
            <button class="appbar-button">
                <img src={HelpButton} alt="Help" />
            </button>
        </div>
    );
}