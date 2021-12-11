import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Ecommerce from "./components/Ecommerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme/theme.js";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Ecommerce />
            <Footer />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
