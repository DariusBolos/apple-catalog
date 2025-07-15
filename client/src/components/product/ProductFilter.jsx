import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProductFilter = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        name: '',
        type: '',
        minPrice: '',
        maxPrice: '',
        color: '',
    });

    const { t } = useTranslation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilter(newFilters);
    };

    return (
        <div className="filter-container">
            <input name="name" placeholder={t('filter.search')} value={filters.name} onChange={handleChange} />

            <input
                type="number"
                name="minPrice"
                placeholder={t('filter.min')}
                value={filters.minPrice}
                onChange={handleChange}
            />
            <input
                type="number"
                name="maxPrice"
                placeholder={t('filter.max')}
                value={filters.maxPrice}
                onChange={handleChange}
            />
            <input name="color" placeholder={t('filter.color')} value={filters.color} onChange={handleChange} />
            <select name="type" value={filters.type} onChange={handleChange}>
                <option value="">{t('filter.select')}</option>
                <option value="iPhone">iPhone</option>
                <option value="Mac">Mac</option>
                <option value="Watch">Watch</option>
                <option value="AirPods">AirPods</option>
            </select>
        </div>
    );
};

export default ProductFilter;
