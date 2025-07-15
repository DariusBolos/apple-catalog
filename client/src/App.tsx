import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import LandingPage from './pages/landing/LandingPage.jsx';
import DetailsPage from './pages/details/DetailsPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import RegisterPage from './pages/register/RegisterPage.jsx';
import ProductPage from './pages/product/ProductPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = ({ queryClient }) => (
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/products" element={<ProductPage />} />
                        <Route path="/product" element={<DetailsPage />} />
                        <Route path="/product/:id" element={<DetailsPage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);

export default App;
