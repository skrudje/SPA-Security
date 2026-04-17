import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'xadmin' && password === 'xservice54') {
      localStorage.setItem('isAuth', 'true');
      window.location.href = '/';
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Вход в SecurityOS</h2>
        
        {error && <div style={{ color: '#e74c3c', backgroundColor: '#fdf0ed', padding: '10px', borderRadius: '4px', marginBottom: '15px', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Логин:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              placeholder="Введите логин"
            />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Введите пароль"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '15px', padding: '10px' }}>
            Войти в систему
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;