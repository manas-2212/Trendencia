'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('td-user', JSON.stringify({ username }));
      router.push('/dumdum'); // protected home route
    } else {
      alert('Enter both fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Trendencia</h2>
        <input
          className='usertext'
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className='passtext'
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
