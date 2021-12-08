import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import Ecommerce from "./components/Ecommerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme/theme.js"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Ecommerce />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
