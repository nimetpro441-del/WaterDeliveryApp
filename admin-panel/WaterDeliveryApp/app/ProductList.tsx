import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map(product => (
        <div 
          key={product.id} 
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            textAlign: 'center',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Ekle
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
