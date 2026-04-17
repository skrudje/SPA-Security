import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Form from './pages/Form';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

const App = () => {
  
  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    window.location.href = '/login';
  };

  const isAuthenticated = localStorage.getItem('isAuth') === 'true';

  return (
    <Router>
      <div className="navbar">
        <h2>🛡️ SecurityOS</h2>
        <nav>
          {isAuthenticated ? (
            <>
              <Link to="/">Объекты</Link>
              <Link to="/add">Добавить КПП</Link>
              <button onClick={handleLogout} className="btn btn-danger" style={{ marginLeft: '20px', padding: '5px 10px' }}>
                Выйти
              </button>
            </>
          ) : (
            <span style={{ color: '#ecf0f1', fontSize: '0.9rem' }}>Требуется авторизация</span>
          )}
        </nav>
      </div>

      <div className="container">
        <Routes>
          {/* Открытый маршрут (доступен всем) */}
          <Route path="/login" element={<Login />} />

          {/* Защищенные маршруты (только после входа) */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          
          <Route path="/detail/:id" element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          } />
          
          <Route path="/add" element={
            <ProtectedRoute>
              <Form />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;