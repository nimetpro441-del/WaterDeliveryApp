import React from 'react';
import RegistrationPanel from './RegistrationPanel';
import ProductList from './ProductList'; // Eğer ürün listesi component’in varsa, yoksa bunu kaldırabilirsin

export default function Home() {
  return (
    <div>
      <h1>Welcome to Water Delivery App</h1>
      <ProductList />
      <RegistrationPanel />
    </div>
  );
}
