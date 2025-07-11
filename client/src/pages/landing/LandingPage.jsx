import './landing.css';
import Catalog from '../../components/Catalog.jsx';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <h1>Apple Product Catalog</h1>
            <button onClick={() => navigate('/product')}>Add Product</button>
            <Catalog />
        </div>
    );
};

export default LandingPage;
