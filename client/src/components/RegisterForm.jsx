import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterUser } from '../hooks/userHooks.js';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const userMutation = useRegisterUser();

    const onSubmit = (user) => {
        userMutation.mutate(user);
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-title">Create Account</h2>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="yourname"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div>

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

                <div className="form-group">
                    <label htmlFor="birthdate">Date of Birth</label>
                    <input
                        id="birthdate"
                        type="date"
                        {...register('birthdate', { required: 'Date of birth is required' })}
                    />
                    {errors.birthdate && <p className="error">{errors.birthdate.message}</p>}
                </div>

                <button type="submit" className="form-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
