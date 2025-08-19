// index.tsx
import React from "react";
import RegistrationForm from "../../components/RegistrationForm";

const Home = () => {
  return (
    <div>
      <h1>Hoşgeldiniz!</h1>
      {/* Kayıt paneli ekleniyor */}
      <RegistrationForm />
    </div>
  );
};

export default Home;
