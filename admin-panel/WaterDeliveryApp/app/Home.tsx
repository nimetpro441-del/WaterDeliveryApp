import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm"; // RegistrationForm component’in yolunu kontrol et
import ProductList from "./ProductList";
import OrderPanel from "./OrderPanel";

const Home: React.FC = () => {
  // Eğer kayıt verilerini burada tutmak istersen state ekleyebilirsin
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleRegister = (name: string, email: string) => {
    setUserData({ name, email });
    alert(`Welcome, ${name}! Your registration is complete.`);
  };

  return (
    <div>
      <h1>Welcome to Water Delivery App</h1>

      {/* Registration Panel */}
      <section>
        <h2>Register</h2>
        <RegistrationForm onRegister={handleRegister} />
      </section>

      {/* Product Listing */}
      <section>
        <h2>Products</h2>
        <ProductList />
      </section>

      {/* Order Panel */}
      <section>
        <h2>Your Cart</h2>
        <OrderPanel />
      </section>
    </div>
  );
};

export default Home;
