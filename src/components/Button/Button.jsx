import './Button.css';

export default function Button(props) {

    return(
        <button id='main-button' onClick={props.onClick}>{props.text}</button>
    );
}