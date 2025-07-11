import { set, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAddProduct, useGetProductById, useUpdateProduct } from '../hooks/productHooks.js';
import { useEffect, useState } from 'react';

const ProductForm = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [requestType, setRequestType] = useState('');
    const navigate = useNavigate();

    const { data, isLoading, isError } = useGetProductById(id);
    const addProductMutation = useAddProduct();
    const editProductMutation = useUpdateProduct();

    // switch to constants
    useEffect(() => {
        if (!id || isError) {
            setRequestType('add');
            return;
        }

        if (data) {
            reset(data);
        }

        setRequestType('update');
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
                <h2 className="form-title">{`Product Details - ${requestType.charAt(0).toUpperCase() + requestType.slice(1)}`}</h2>

                <label>Name</label>
                <input {...register('name', { required: true })} />

                <label>Type</label>
                <select {...register('type', { required: true })}>
                    <option value="">Select Type</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Mac">Mac</option>
                    <option value="Watch">Watch</option>
                    <option value="AirPods">AirPods</option>
                </select>

                <label>Price</label>
                <input type="number" {...register('price', { required: true, min: 0 })} />

                <label>Currency</label>
                <input {...register('currency', { required: true })} />

                <label>Color</label>
                <input {...register('color', { required: true })} />

                <label>Storage</label>
                <input {...register('storage', { required: true })} />

                <label>Image URL</label>
                <input type="url" {...register('image', { required: true })} />

                <label>Description</label>
                <textarea {...register('description', { required: true })}></textarea>

                <label>Release Date</label>
                <input type="date" {...register('release_date', { required: true })} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
