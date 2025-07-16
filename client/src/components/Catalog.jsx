import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetProducts } from '../hooks/productHooks.js';
import Product from './product/Product.jsx';
import ProductFilter from './product/ProductFilter.jsx';

const Catalog = () => {
    const { t } = useTranslation('common');
    const { data, isLoading } = useGetProducts();
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
        if (data) {
            setFiltered(data);
        }
    }, [data]);

    const handleFilter = (filters) => {
        const filteredProducts = data.filter((product) => {
            const price = parseFloat(product.price);
            return (
                product.name.toLowerCase().includes(filters.name.toLowerCase()) &&
                product.type.toLowerCase().includes(filters.type.toLowerCase()) &&
                product.color.toLowerCase().includes(filters.color.toLowerCase()) &&
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
                        {filtered?.length > 0 ? (
                            filtered?.map((product) => <Product key={product.id} productInformation={product} />)
                        ) : (
                            <tr>
                                <th>No product matches your filters</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Catalog;
