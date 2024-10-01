import './Button.css';

export default function Button(props) {
    const activated = props.active === 1 ? 'not-active' : 'active';
    return(
        <button id={activated} className='main-button' onClick={props.onClick}>{props.text}</button>
    );
}