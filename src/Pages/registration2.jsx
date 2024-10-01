import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import AppBar from '../components/AppBar/AppBar.jsx';
import CnpBox from '../components/CnpBox/CnpBox.jsx';

export function Registration2() {
    return (
        <div className="App">
            <AppBar index={1} activeSteps = {2}/>
                <p className='instructions'>Daca acesta nu este CNP-ul corect, apasați pe butonul de asistență</p>
                <CnpBox/>
                <Link to="/registration3">
                    <Button text="Continuă" />
                </Link>
        </div>
    );
}