import './product.css';
import Catalog from '../../components/Catalog.jsx';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/LanguageSelector.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';

const ProductPage = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <div className="product-page">
                <div className="title-wrapper">
                    <h1>{t('title')}</h1>
                    <button onClick={() => navigate('/product')}>{t('button_add')}</button>
                </div>
                <Catalog />
            </div>
        </>
    );
};

export default ProductPage;
