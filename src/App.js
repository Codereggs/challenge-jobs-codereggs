import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Ecommerce from "./components/Ecommerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme/theme.js";
import { store } from "./app/store";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Ecommerce />
          <Footer />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
