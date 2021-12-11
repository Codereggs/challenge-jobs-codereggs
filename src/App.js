import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Ecommerce from "./components/Ecommerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme/theme.js";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="product" element={<ProductDetails />} />
              <Route path="buy" element={<ShoppingCart />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
