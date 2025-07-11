import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getProducts, deleteProduct, addProduct, getProductById, updateProduct } from '../services/ProductService.js';

const useGetProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });
};

const useGetProductById = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: ({ queryKey }) => getProductById(queryKey[1]),
        enabled: !!id,
    });
};

const useAddProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (product) => addProduct(product),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });
};

const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, product }) => updateProduct(id, product),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });
};

const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deleteProduct(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });
};

export { useGetProducts, useGetProductById, useAddProduct, useUpdateProduct, useDeleteProduct };
