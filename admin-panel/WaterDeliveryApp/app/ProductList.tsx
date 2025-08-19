import React from 'react'; 
 
const products = [ 
  { id: 1, name: 'Su 1L', price: 5 }, 
  { id: 2, name: 'Su 5L', price: 20 }, 
  { id: 3, name: 'Su 10L', price: 35 } 
]; 
 
export default function ProductList() { 
  return ( 
        {products.map(product =
        ))} 
  ); 
} 
