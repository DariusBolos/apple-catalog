import { useMutation } from '@tanstack/react-query';
import { register, login } from '../services/AuthService.js';

const useRegisterUser = () => {
    return useMutation({
        mutationFn: (user) => register(user),
        onError: (error) => alert(error.message),
        onSuccess: () => (window.location.href = '/login'),
    });
};

const useLoginUser = () => {
    return useMutation({
        mutationFn: (user) => login(user),
        onError: () => alert('Invalid Credentials'),
        onSuccess: (data) => {
            localStorage.setItem('token', `Bearer ${data.token}`);
            window.location.href = '/products';
        },
    });
};

export { useRegisterUser, useLoginUser };
