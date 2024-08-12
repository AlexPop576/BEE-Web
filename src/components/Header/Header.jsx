import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
    return (
        <header>
            <img className='start-page-logo' src={logo} alt="logo"/>
        </header>
    );
}