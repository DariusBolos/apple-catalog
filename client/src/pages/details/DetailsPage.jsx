import ProductForm from '../../components/ProductForm.jsx';
import './details.css';
import LanguageSelector from '../../components/LanguageSelector.jsx';
import { useTranslation } from 'react-i18next';

const DetailsPage = () => {
    const { t, i18n } = useTranslation('details');

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="details-page">
            <LanguageSelector currentLang={i18n.language} onChange={handleLanguageChange} />
            <ProductForm />
        </div>
    );
};

export default DetailsPage;
