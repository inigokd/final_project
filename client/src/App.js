import React from 'react';
import './App.css';
import Main from "../src/components/main/Main"
import Auth from "../src/components/auth/Auth"
import Cart from "../src/components/cart/Cart"
import Admin from "./components/admin/Admin"
import AddNew from "./components/admin/AddNew"
import AddOffer from "./components/admin/AddOffer"
import Product from "./components/product/Product"
import { Router } from "@reach/router";
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Auth path="/auth" />
        <Cart path="/cart" />
        <Admin path="/admin" />
        <AddNew path="/addnew" />
        <AddOffer path="/addoffer" />
        <Product path="/product" />
        <Main path="/*" />
      </Router>
    );
  }
}

export default App;
