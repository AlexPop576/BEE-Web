import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import AppBar from '../components/AppBar/AppBar.jsx';

export function Registration3() {
    return (
        <div className="App">
            <ul>
               <AppBar index={2} activeSteps = {3}/>
                <ul className='instructions'>Verificare identitate</ul>
                <ul><Link to="/vote1">
                    <Button text="Continuă" />
                </Link></ul>
            </ul>
        </div>
    );
}