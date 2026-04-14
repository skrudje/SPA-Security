import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Form from './pages/Form';
import './index.css'; // Подключаем наши стили

const App = () => {
  return (
    <Router>
      {/* Шапка приложения */}
      <div className="navbar">
        <h2>🛡️ SecurityOS</h2>
        <nav>
          <Link to="/">Объекты</Link>
          <Link to="/add">Добавить КПП</Link>
        </nav>
      </div>

      {/* Основной контент */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
