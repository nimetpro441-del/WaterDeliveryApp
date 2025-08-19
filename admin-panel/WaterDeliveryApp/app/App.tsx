import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Su Şişesi', price: 5 },
    { id: 2, name: 'Meyve Suyu', price: 3 },
    { id: 3, name: 'Soda', price: 2 }
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '40px' }}>
      
      {/* Ürün Listesi */}
      <div style={{ flex: 1 }}>
        <h2>Ürünler</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
              <strong>{p.name}</strong> - ${p.price}
              <button 
                style={{ marginLeft: '10px', padding: '4px 8px', cursor: 'pointer' }}
                onClick={() => addToCart(p)}
              >
                Ekle
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sepet Paneli */}
      <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '6px', padding: '10px' }}>
        <h2>Sepetiniz</h2>
        {cart.length === 0 ? (
          <p>Sepetiniz boş</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
        <h3>Toplam: ${cart.reduce((sum, item) => sum + item.price, 0)}</h3>
      </div>

    </div>
  );
};

export default App;
