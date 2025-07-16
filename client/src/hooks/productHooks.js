import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getProducts, deleteProduct, addProduct, getProductById, updateProduct } from '../services/ProductService.js';

export const useGetProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });
};

export const useGetProductById = ({ id }) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: ({ queryKey }) => getProductById(queryKey[1]),
        enabled: !!id,
    });
};

export const useAddProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (product) => addProduct(product),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, product }) => updateProduct(id, product),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deleteProduct(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });
};
