import React, { useState } from 'react'; 
import ProductList from './ProductList'; 
 
export default function OrderPanel() { 
  const [order, setOrder] = useState([]); 
 
  const addToOrder = (product) =
    setOrder([...order, product]); 
  }; 
 
  return ( 
        {order.map((item, index) =
        ))} 
  ); 
} 
