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
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price.toFixed(2)}
          <button onClick={() => addToCart(product)}>Ekle</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
