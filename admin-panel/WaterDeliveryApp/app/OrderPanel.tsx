import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface OrderPanelProps {
  cart: Product[];
}

const OrderPanel: React.FC<OrderPanelProps> = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '300px',
      marginTop: '20px'
    }}>
      <h2>Sepetiniz</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Toplam: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default OrderPanel;
