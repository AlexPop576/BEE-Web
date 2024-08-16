import './VoteTile.css'
import logoPNL from '../../assets/pnl.png'

export default function VoteTile(props) {
    if(props.type==1)
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
    else if(props.type==2)
        return (
            <div class="vote-tile large">
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