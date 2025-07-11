import Product from './Product.jsx';
import { useGetProducts } from '../hooks/productHooks.js';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ProductFilter from './ProductFilter.jsx';

const Catalog = () => {
    const { t, i18n } = useTranslation('common');
    const { data, isLoading } = useGetProducts();
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
        if (data) {
            setFiltered(data);
        }
    }, [data]);

    const handleFilter = (filters) => {
        const filteredProducts = data.filter((p) => {
            const price = parseFloat(p.price);
            return (
                p.name.toLowerCase().includes(filters.name.toLowerCase()) &&
                p.type.toLowerCase().includes(filters.type.toLowerCase()) &&
                p.color.toLowerCase().includes(filters.color.toLowerCase()) &&
                (!filters.minPrice || price >= parseFloat(filters.minPrice)) &&
                (!filters.maxPrice || price <= parseFloat(filters.maxPrice))
            );
        });
        setFiltered(filteredProducts);
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <ProductFilter onFilter={handleFilter} />
            <div className="catalog-container">
                <table className="product-table">
                    <caption>{t('table_caption')}</caption>
                    <thead>
                        <tr>
                            <th>{t('name')}</th>
                            <th>{t('type')}</th>
                            <th>{t('price')}</th>
                            <th>{t('color')}</th>
                            <th>{t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered?.map((product) => (
                            <Product key={product.id} productInformation={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Catalog;
