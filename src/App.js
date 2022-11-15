import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/footer";
//import Home from "./home";
import { ThemeProvider } from "styled-components";
import Services from "./services";
import Orders from "./orders";
import Account from "./account";
import Cart from "./cart";
import Product from "./product";
import Err from "./err";

const App = () => {

  const custTheme = {
    colors: {
      text: "lime",
    },
  };
  return (
    <ThemeProvider theme={custTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Err />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
