import Product from './Product.jsx';
import { useGetProducts } from '../hooks/productHooks.js';

const Catalog = () => {
    const { data, isPending } = useGetProducts();

    if (isPending) {
        return <span>Loading...</span>;
    }

    return (
        <div className="catalog-container">
            <table className="product-table">
                <caption>Product Information</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => (
                        <Product key={product.id} productInformation={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Catalog;
