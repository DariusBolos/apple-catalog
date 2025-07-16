import './navbar.css';
import LanguageSelector from '../LanguageSelector.jsx';
import logo from '../../assets/apple-seeklogo.png';

const Navbar = () => {
    const lang = localStorage.getItem('i18nextLng');
    const token = localStorage.getItem('token');

    const handleSignOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img alt="apple logo" src={logo} width={45} />
                </div>
                <ul className="navbar-links">
                    <LanguageSelector currentLang={lang} />
                    {!!token && (
                        <button className="btn-signout" onClick={handleSignOut}>
                            Sign out
                        </button>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
