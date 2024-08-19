import './VoteTile.css'
import logoPNL from '../../assets/pnl.png'

export default function VoteTile(props) {
    const isSeleced = props.selectedTile == props.selectedKey ? 'selected' : 'not-selected';
    
    if (props.type === 1)
        return (
            <button id = "tile-button" onClick={props.onClick}>
                <div class={isSeleced}>
                    <img className="logo" src={logoPNL} alt='logo' />
                    <div class="divider"></div>
                    <div class="party-info-container">
                        <div class="party-info">
                            <h2 id="party">{props.party}</h2>
                            <p id="name">{props.name}</p>
                        </div>
                    </div>
                </div>
            </button>
        );
    else if (props.type === 2)
        return (
            <div class="not-selected large">
                <img className="logo" src={logoPNL} alt='logo' />
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