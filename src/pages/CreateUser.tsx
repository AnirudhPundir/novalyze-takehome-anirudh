import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/Logo';

interface CreateUserFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const CreateUser: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<CreateUserFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Partial<CreateUserFormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof CreateUserFormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<CreateUserFormData> = {};

        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            // TODO: Implement your user creation logic here
            console.log('Create user attempt with:', formData);
            // On successful creation:
            navigate('/content');
        } catch (error) {
            console.error('User creation failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Create your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    onChange={handleChange}
                                    value={formData.firstName}
                                    placeholder="First Name"
                                    className={`shadow-sm appearance-none rounded-md relative block w-full px-3 py-2 border
                                        ${errors.firstName ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'}
                                        placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                                        bg-white dark:bg-gray-700`}
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    placeholder="Last Name"
                                    className={`shadow-sm appearance-none rounded-md relative block w-full px-3 py-2 border
                                        ${errors.lastName ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'}
                                        placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                                        bg-white dark:bg-gray-700`}
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                required
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="Email Address"
                                className={`shadow-sm appearance-none rounded-md relative block w-full px-3 py-2 border
                                    ${errors.email ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'}
                                    placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                                    bg-white dark:bg-gray-700`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                onChange={handleChange}
                                value={formData.password}
                                placeholder="Password"
                                className={`shadow-sm appearance-none rounded-md relative block w-full px-3 py-2 border
                                    ${errors.password ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'}
                                    placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                                    bg-white dark:bg-gray-700`}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                            )}
                        </div>
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                onChange={handleChange}
                                value={formData.confirmPassword}
                                placeholder="Confirm Password"
                                className={`shadow-sm appearance-none rounded-md relative block w-full px-3 py-2 border
                                    ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'}
                                    placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                                    bg-white dark:bg-gray-700`}
                            />
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreateUser; 