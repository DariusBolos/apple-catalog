import { useDeleteProduct } from 'client/src/hooks/productHooks.js';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Product = ({ productInformation }) => {
    const navigate = useNavigate();
    const { mutate: deleteProduct } = useDeleteProduct();
    const { t } = useTranslation();

    const handleProductRemoval = () => {
        deleteProduct(productInformation.id);
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
                    {t('button_edit')}
                </button>
                <button className="btn-delete" onClick={handleProductRemoval}>
                    {t('button_delete')}
                </button>
            </td>
        </tr>
    );
};

export default Product;
