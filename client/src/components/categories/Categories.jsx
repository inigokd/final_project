import React from "react";
import { Link, Router } from '@reach/router';



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
      </div>
    )

  }

}
export default MainManu;