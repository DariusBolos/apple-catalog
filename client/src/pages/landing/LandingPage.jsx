import React from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.jsx';

const LandingPage = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <div className="landing-wrapper">
                <div className="landing-content">
                    <h1 className="landing-title">{t('welcome')}</h1>
                    <p className="landing-subtitle">{t('experience')}</p>
                    <div className="button-group">
                        <button className="btn login-btn" onClick={() => navigate('/login')}>
                            {t('login')}
                        </button>
                        <button className="btn signup-btn" onClick={() => navigate('/register')}>
                            {t('signup')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
