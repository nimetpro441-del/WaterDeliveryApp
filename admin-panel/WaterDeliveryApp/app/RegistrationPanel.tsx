import React, { useState } from 'react'; 
 
export default function RegistrationPanel() { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
 
  const handleSubmit = (e) =
    e.preventDefault(); 
    alert(`Kay�t ba�ar�l�! Name: ${name}, Email: ${email}`); 
    setName(''); 
    setEmail(''); 
  }; 
 
  return ( 
  ); 
} 
