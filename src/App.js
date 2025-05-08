import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import GetProducts from "./Components/GetProducts";
import AddProduct from "./Components/AddProduct";
import Payment from "./Components/Payment";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import { CartProvider, useCart } from "./Components/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const { cartItems } = useCart();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Seteque CarryVogue Atelier</h1>
        <nav className="nav-links">
          <Link className="link" to="/getproducts">
            Home
          </Link>
          <Link className="link" to="/signup">
            Signup
          </Link>
          <Link className="link" to="/signin">
            Signin
          </Link>
          <Link className="link" to="/addproduct">
            Upload~item
          </Link>
          <Link className="link" to="/cart">
            Cart 🛒 <span>({cartItems.length})</span>
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/getproducts" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/getproducts" element={<GetProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />

      <style>
  {`
    .app-container {
     background: linear-gradient(135deg, #4d5552 0%, #2f3432 50%, #161917 100%);
      min-height: 60vh;
      color: #f0f0f0;
      text-align: center;
      padding: 30px 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .app-header h1 {
      margin-bottom: 20px;
      font-size: 2.5rem;
      color: #ffffff;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
      letter-spacing: 1.2px;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .link {
      color: #ffffff;
      text-decoration: none;
      font-size: 1.1rem;
      padding: 10px 18px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }

    .link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .app-header h1 {
        font-size: 2rem;
      }
      .nav-links {
        flex-direction: column;
        gap: 1px;
      }
      .link {
        font-size: 1rem;
        padding: 9px;
        width: 100%;
        text-align: center;
      }
    }

    @media (max-width: 576px) {
      .app-header h1 {
        font-size: 1.5rem;
      }
      .link {
        font-size: 0.95rem;
        padding: 10px;
      }
    }
  `}
</style>




    </div>
  );
};

export default App;
