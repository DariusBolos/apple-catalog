import './landing.css';
import Catalog from '../../components/Catalog.jsx';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/LanguageSelector.jsx';
import ProductFilter from '../../components/ProductFilter.jsx';

const LandingPage = () => {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="landing-page">
            <div className="nav-container">
                <LanguageSelector currentLang={i18n.language} onChange={handleLanguageChange} />
            </div>
            <div className="title-wrapper">
                <h1>{t('title')}</h1>
                <button onClick={() => navigate('/product')}>{t('button_add')}</button>
            </div>
            <Catalog />
        </div>
    );
};

export default LandingPage;
