import './Button.css';
import { Link } from 'react-router-dom';

export default function Button(props) {
    const buttonId = props.active === 1 ? 'active' : 'not-active';
    const nextPage = props.page;

    return (
        <>
            {props.active === 0 ? (
                <button id={buttonId} className='main-button' onClick={props.onClick}>
                    {props.text}
                </button>
            ) : (
                <Link to={nextPage}>
                    <button id={buttonId} className='main-button'>
                        {props.text}
                    </button>
                </Link>
            )}
        </>
    );
}
