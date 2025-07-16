import './navbar.css';
import LanguageSelector from '../LanguageSelector.jsx';
import logo from '../../assets/apple-seeklogo.png';

const Navbar = () => {
    const lang = localStorage.getItem('i18nextLng');

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img alt="apple logo" src={logo} width={45} />
                </div>
                <ul className="navbar-links">{<LanguageSelector currentLang={lang} />}</ul>
            </div>
        </nav>
    );
};

export default Navbar;
