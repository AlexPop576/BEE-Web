import './VoteTile.css'
import PP from '../../assets/Partidul Poporului.png'
import AE from '../../assets/Aurora Economica.png'
import PPR from '../../assets/Partidul Progresului.png'
import PA from '../../assets/Partidul Adevarului.png'
import CA from '../../assets/Coalitia Unire.png'
import AV from '../../assets/Asociatia Vorbelor.png'

let partyLogo = [PP, AE, PPR, PA, CA, AV]

export default function VoteTile(props) {
    const isSeleced = props.selectedTile === props.selectedKey ? 'selected' : 'not-selected';
    if (props.type === 1)
        return (
            <button id = "tile-button" onClick={props.onClick}>
                <div class={isSeleced}>
                    <img className="logo" src={partyLogo[props.selectedKey]} alt='logo' />
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
                <img className="logo" src={partyLogo[props.selectedTile]} alt='logo' />
                <div class="divider"></div>
                <div class="party-info-container">
                    <div class="party-info">
                        <h2 id="party">{props.party}</h2>
                        <p id="name">{props.name}</p>
                    </div>
                </div>
            </div>
        );
}