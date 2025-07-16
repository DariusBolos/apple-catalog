import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants/languages.js';

export default function LanguageSelector({ currentLang }) {
    const [open, setOpen] = useState(false);

    const { i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang).then(() => {
            setOpen(false);
            localStorage.setItem('i18nextLng', lang);
        });
    };

    return (
        <div className="language-selector" tabIndex={0} onBlur={() => setOpen(false)}>
            <div className="selector-button" onClick={() => setOpen(!open)}>
                <span className="flag">{LANGUAGES[currentLang].flag}</span>
                <span className="label">{LANGUAGES[currentLang].name}</span>
                <span className="arrow">▼</span>
            </div>

            {open && (
                <ul className="dropdown-menu">
                    {Object.entries(LANGUAGES).map(([code, { name, flag }]) => (
                        <li key={code} onClick={() => handleLanguageChange(code)}>
                            <span className="flag">{flag}</span>
                            <span className="label">{name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
