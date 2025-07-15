const API_URL = import.meta.env.VITE_API_URL;
const AUTH_URL = `${API_URL}/auth`;

const register = async (user) => {
    const response = await fetch(`${AUTH_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error('User with this email already exists');
    }
    return await response.json();
};

const login = async (credentials) => {
    const response = await fetch(`${AUTH_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error(`Unauthorized credentials for ${credentials}, ${response.status}`);
    }
    return await response.json();
};

export { register, login };
