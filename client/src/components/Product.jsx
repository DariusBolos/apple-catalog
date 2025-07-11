import { useDeleteProduct } from '../hooks/productHooks.js';
import { useNavigate } from 'react-router-dom';

const Product = ({ productInformation }) => {
    const navigate = useNavigate();
    const deleteProductMutation = useDeleteProduct();

    const handleProductRemoval = () => {
        deleteProductMutation.mutate(productInformation.id);
    };

    const redirectToDetails = () => {
        navigate('/product/' + productInformation.id);
    };

    return (
        <tr>
            <td>{productInformation.name}</td>
            <td>{productInformation.type}</td>
            <td>{`${productInformation.price} ${productInformation.currency}`}</td>
            <td>{productInformation.color}</td>
            <td className="btn-col">
                <button className="btn-edit" onClick={redirectToDetails}>
                    Edit
                </button>
                <button className="btn-delete" onClick={handleProductRemoval}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Product;
