import React, { useState } from 'react';
import ProductList from './ProductList';
import OrderPanel from './OrderPanel';

const products = [
  { id: 1, name: 'Su 1L', price: 2 },
  { id: 2, name: 'Su 5L', price: 5 },
];

const Home: React.FC = () => {
  const [cart, setCart] = useState<typeof products>([]);

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Ürünler</h1>
      <ProductList products={products} addToCart={addToCart} />
      <OrderPanel cart={cart} />
    </div>
  );
};

export default Home;
