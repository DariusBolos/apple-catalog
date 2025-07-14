import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAddProduct, useGetProductById, useUpdateProduct } from '../hooks/productHooks.js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProductForm = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [requestType, setRequestType] = useState('');
    const navigate = useNavigate();
    const { data, isLoading, isError } = useGetProductById(id);
    const addProductMutation = useAddProduct();
    const editProductMutation = useUpdateProduct();
    const { t } = useTranslation('details');

    const type = !id || isError ? 'add' : 'update';

    useEffect(() => {
        if (data) {
            reset(data);
        }

        setRequestType(type);
    }, [isError, data, reset]);

    const handleProductAdd = (product) => {
        addProductMutation.mutate(product);
    };

    const handleProductUpdate = (id, product) => {
        editProductMutation.mutate({ id: id, product: product });
    };

    const onSubmit = (data) => {
        if (requestType === 'add') {
            const prodId = uuidv4();
            handleProductAdd({ id: prodId, ...data });
            navigate('/');
            return;
        }

        handleProductUpdate(id, { ...data });
        navigate('/');
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div className="form-wrapper">
            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title">{`${t('details')} - ${t(requestType)}`}</h2>

                <label>{t('name')}</label>
                <input {...register('name', { required: true })} />

                <label>{t('type')}</label>
                <select {...register('type', { required: true })}>
                    <option value="">{t('select')}</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Mac">Mac</option>
                    <option value="Watch">Watch</option>
                    <option value="AirPods">AirPods</option>
                </select>

                <label>{t('price')}</label>
                <input type="number" {...register('price', { required: true, min: 0 })} />

                <label>{t('currency')}</label>
                <input {...register('currency', { required: true })} />

                <label>{t('color')}</label>
                <input {...register('color', { required: true })} />

                <label>{t('storage')}</label>
                <input {...register('storage', { required: true })} />

                <label>{t('url')}</label>
                <input type="url" {...register('image', { required: true })} />

                <label>{t('description')}</label>
                <textarea {...register('description', { required: true })}></textarea>

                <label>{t('release_date')}</label>
                <input type="date" {...register('release_date', { required: true })} />

                <button type="submit">{t('submit')}</button>
            </form>
        </div>
    );
};

export default ProductForm;
