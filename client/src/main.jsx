import './index.css';
import './i18n';
import { createRoot } from 'react-dom/client';
import { QueryClient } from '@tanstack/react-query';

import App from './App.tsx';

const queryClient = new QueryClient();

// to overwrite this, for public endpoints, set onError: () => {} for that specific request
queryClient.setDefaultOptions({
    mutations: {
        onError: (error) => {
            if (error?.response?.status === 403 || error?.response?.status === 401) {
                // logout the user
            }
        },
    },
});

// OR
// use this instead of fetch()
export const fetchWithAuth = async (input, init = {}) => {
    const response = await fetch(input, {
        ...init,
        credentials: 'same-origin',
    });

    if (response.status === 403 || response.status === 401) {
        // logout
    }
    return response;
};

// do not send props like this - as I do
createRoot(document.getElementById('root')).render(<App queryClient={queryClient} />);
