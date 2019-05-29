import React from "react";
import { Link, Router } from '@reach/router';
import MainDish from "./MainDish";
import Salads from "./Salads"
import Pizzas from "./Pizzas"
import Pastas from "./Pastas"
import Smoothies from "./Smoothies"
import Cookies from "./Cookies"


class MainManu extends React.Component {
  render() {
    return (
      <div className="categ-nav">
        <nav className="categories">
          <Link to="/maindish">Main Dish</Link>
          <Link to="/salads">Salad</Link>
          <Link to="/pastas">Pasta</Link>
          <Link to="/pizzas">Pizza</Link>
          <Link to="/smoothies">Smoothie</Link>
          <Link to="/cookies">Cookie</Link>
        </nav>
        <Router>
          <MainDish path="/maindish" />;
          <Salads path="/salads" />;
          <Pastas path="/pastas" />
          <Pizzas path="/pizzas" />;
          <Smoothies path="/smoothies" />
          <Cookies path="/cookies" />
        </Router>
      </div>
    )

  }

}
export default MainManu;