import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Активен');
  const [guards, setGuards] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, status, guards: Number(guards) };
    try {
      await axios.post('http://localhost:5000/checkpoints', JSON.stringify(newItem), {
        headers: { "Content-Type": "application/json" }
      });
      navigate('/');
    } catch (error) {
      console.error("Ошибка создания:", error);
    }
  };

  return (
    // Добавлен flex-контейнер для центрирования
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      {/* Карточка формы с белым фоном и тенью */}
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ borderBottom: '2px solid #f0f2f5', paddingBottom: '10px', marginTop: 0 }}>
          Добавление нового КПП
        </h2>
        
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>Название объекта:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          
          <div className="form-group">
            <label>Текущий статус:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Активен">Активен</option>
              <option value="На ремонте">На ремонте</option>
              <option value="Отключен">Отключен</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Количество охранников:</label>
            <input type="number" value={guards} onChange={(e) => setGuards(e.target.value)} required min="0" />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Сохранить объект
          </button>
        </form>

      </div>
    </div>
  );
};

export default Form;
