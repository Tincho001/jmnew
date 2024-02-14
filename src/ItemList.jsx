import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items?offset=50&limit=50');
        setItems(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.item}</strong> - {item.cod_item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
