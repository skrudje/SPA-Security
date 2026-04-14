import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', status: '', guards: 0 });

  useEffect(() => {
    const loadItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/checkpoints/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    };
    loadItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/checkpoints/${id}`, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" }
      });
      alert("Данные КПП успешно обновлены!");
      navigate('/');
    } catch (error) {
      console.error("Ошибка обновления:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    // Тот же flex-контейнер
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      {/* Карточка формы */}
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ borderBottom: '2px solid #f0f2f5', paddingBottom: '10px', marginTop: 0 }}>
          Редактирование КПП
        </h2>
        
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>Название объекта:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label>Статус:</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Активен">Активен</option>
              <option value="На ремонте">На ремонте</option>
              <option value="Отключен">Отключен</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Количество охранников:</label>
            <input type="number" name="guards" value={formData.guards} onChange={handleChange} required min="0" />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Сохранить изменения
          </button>
        </form>

      </div>
    </div>
  );
};

export default Detail;
