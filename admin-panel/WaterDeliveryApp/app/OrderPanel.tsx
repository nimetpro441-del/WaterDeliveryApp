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
  return (
    <div>
      <h2>Sipariş Paneli</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPanel;
