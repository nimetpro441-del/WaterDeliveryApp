import React, { useState } from 'react';

export default function RegistrationPanel({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onRegister) onRegister({ name, email });
    setName('');
    setEmail('');
    alert('Kayıt başarılı!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}
