import './VoteTile.css'
import logoPNL from '../../assets/pnl.png'

export default function VoteTile(props) {
    return (
        <div class="vote-tile">
            <img className="logo" src={logoPNL} alt='logo'/>
            <div class="divider"></div>
            <div class="party-info-container">
            <div class="party-info">
                <h2 id="party">Partidul Național Liberal</h2>
                <p id="name">Adrian Mateo</p>
            </div>
            </div>
        </div>

    );
}