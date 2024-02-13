// En Items.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://erp.duxsoftware.com.ar/WSERP/rest/services/items");
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
        {items.map(item => (
          <li key={item.cod_item}>
            <strong>{item.item}</strong> - Código: {item.cod_item}, Costo: {item.costo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
