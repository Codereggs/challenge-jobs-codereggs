import React from "react";
import "./App.css";
import Ecommerce from "./components/Ecommerce";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Ecommerce />
      <Footer />
    </div>
  );
}

export default App;
