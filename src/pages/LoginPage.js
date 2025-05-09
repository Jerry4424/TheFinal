import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import '../App.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = (e) => { // Removed 'async' as we're not fetching
        e.preventDefault();

        // Hardcoded admin credentials
        const adminEmail = 'admin@example.com';
        const adminPassword = 'admin123';

        // Check for admin login
        if (email === adminEmail && password === adminPassword) {
            alert('Admin login successful!');
            setUser({ email, name: 'Admin', isAdmin: true });
            navigate('/admin');
            return;
        }

        // Regular user login
        setUser({ email, name: email.split('@')[0], orders: [] });
        alert('Login successful!');
        navigate('/');
    };

    return (
        <div className="App-login">
            <h2 className="App-login-title">Login</h2>
            <form className="App-login-form" onSubmit={handleLogin}>
                <div className="App-login-inline">
                    <input
                        className="App-login-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="App-login-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="App-login-button" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;