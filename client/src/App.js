import React from 'react';
import './App.css';
import Main from "../src/components/main/Main"
import Auth from "../src/components/auth/Auth"
import Cart from "../src/components/cart/Cart"
import Admin from "./components/admin/Admin"
import AddNew from "./components/admin/AddNew"
import Offer from "./components/admin/Offer"
import { Link, Router } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Auth path="/auth" />
        <Cart path="/cart" />
        <Admin path="/admin" />
        <AddNew path="/addnew" />
        <Offer path="/offer" />
        <Main path="/*" />
      </Router>
    );
  }
}

export default App;
