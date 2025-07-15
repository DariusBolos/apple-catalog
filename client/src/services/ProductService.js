const API_URL = import.meta.env.VITE_API_URL;
const PRODUCT_URL = `${API_URL}/products`;

const getProducts = async () => {
    const response = await fetch(`${PRODUCT_URL}/all`);
    return await response.json();
};

const getProductById = async (id) => {
    const response = await fetch(`${PRODUCT_URL}/${id}`);
    return await response.json();
};

const addProduct = async (product) => {
    const response = await fetch(PRODUCT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    return await response.json();
};

const updateProduct = async (id, product) => {
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    return await response.json();
};

const deleteProduct = async (id) => {
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
