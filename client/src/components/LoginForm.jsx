import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginUser } from '../hooks/userHooks.js';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate: login, isLoading } = useLoginUser();

    const onSubmit = (credentials) => {
        login(credentials);
    };

    return isLoading ? <span>Signing in...</span> : (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="login-title">Login</h2>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
            </div>

            <button type="submit" className="login-button">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
