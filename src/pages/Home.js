import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Home = () => {
  const [checkpoints, setCheckpoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Новые состояния для поиска и фильтрации
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Все');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 500)); 
      const response = await axios.get("http://localhost:5000/checkpoints");
      setCheckpoints(response.data);
    } catch (err) {
      setError("Не удалось загрузить данные с сервера.");
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот КПП?')) return;
    try {
      await axios.delete(`http://localhost:5000/checkpoints/${id}`);
      setCheckpoints(checkpoints.filter(item => item.id !== id));
    } catch (err) {
      alert("Ошибка при удалении КПП.");
    }
  };

  const getStatusClass = (status) => {
    if (status === 'Активен') return 'status-badge status-active';
    if (status === 'На ремонте') return 'status-badge status-repair';
    return 'status-badge status-offline';
  };

  // Логика фильтрации и поиска
  const filteredCheckpoints = checkpoints.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Все' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f0f2f5', paddingBottom: '15px' }}>
        <h1 style={{ margin: 0 }}>Список КПП</h1>
        <Link to="/add" className="btn btn-primary">+ Добавить объект</Link>
      </div>

      {/* Панель фильтров */}
      {!loading && !error && (
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #e1e4e8' }}>
          <div className="form-group" style={{ margin: 0, flex: 1 }}>
            <input 
              type="text" 
              placeholder="Поиск по названию..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ margin: 0, width: '200px' }}>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="Все">Все статусы</option>
              <option value="Активен">Активен</option>
              <option value="На ремонте">На ремонте</option>
              <option value="Отключен">Отключен</option>
            </select>
          </div>
        </div>
      )}

      {loading && <Spinner />}
      {error && <div style={{ color: 'red', marginTop: '15px' }}><strong>Ошибка:</strong> {error}</div>}
      
      {!loading && !error && filteredCheckpoints.length === 0 && (
        <p style={{ marginTop: '20px', color: '#666' }}>Объекты не найдены. Попробуйте изменить параметры поиска.</p>
      )}

      {!loading && !error && filteredCheckpoints.length > 0 && (
        <div className="card-grid">
          {filteredCheckpoints.map(item => (
            <div className="card" key={item.id}>
              <h3 className="card-title">{item.name}</h3>
              <p className="card-info">
                Статус: <span className={getStatusClass(item.status)}>{item.status}</span>
              </p>
              <p className="card-info">👥 Охрана: {item.guards} чел.</p>
              
              <div className="card-actions">
                <Link to={`/detail/${item.id}`} className="btn btn-primary" style={{ padding: '5px 10px' }}>Изменить</Link>
                <button onClick={() => deleteItem(item.id)} className="btn btn-danger" style={{ padding: '5px 10px' }}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
