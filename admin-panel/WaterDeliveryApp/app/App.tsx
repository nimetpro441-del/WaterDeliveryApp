import React, { useState } from 'react';
import ProductList from './ProductList';
import OrderPanel from './OrderPanel';

const App: React.FC = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Su Şişesi', price: 5 },
    { id: 2, name: 'Meyve Suyu', price: 3 },
    { id: 3, name: 'Soda', price: 2 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <ProductList products={products} addToCart={addToCart} />
      <OrderPanel cart={cart} />
    </div>
  );
};

export default App;
