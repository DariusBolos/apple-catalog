import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ProtectedRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/');
        }
    }, []);

    return <Outlet />;
};

export default ProtectedRoute;
