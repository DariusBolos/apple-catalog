import React, { useState } from 'react';

const LANGUAGES = {
    en: { name: 'English', flag: '🇬🇧' },
    de: { name: 'Deutsch', flag: '🇩🇪' },
    fr: { name: 'Français', flag: '🇫🇷' },
    es: { name: 'Español', flag: '🇪🇸' },
    it: { name: 'Italiano', flag: '🇮🇹' },
    ro: { name: 'Română', flag: '🇷🇴' },
    hu: { name: 'Magyar', flag: '🇭🇺' },
    sn: { name: 'Shona', flag: '🇿🇼' },
};

export default function LanguageSelector({ currentLang, onChange }) {
    const [open, setOpen] = useState(false);

    const handleSelect = (lang) => {
        onChange(lang);
        setOpen(false);
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
                        <li key={code} onClick={() => handleSelect(code)}>
                            <span className="flag">{flag}</span>
                            <span className="label">{name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
