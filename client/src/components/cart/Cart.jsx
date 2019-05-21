import React from "react"
import "./Cart.css";
import { Link, Router } from '@reach/router';
import Header from "../main/Header";

const Cart = props => {
    return (
        <div>
            <Header />
            <div className="cart-conteiner">
                <span className="shopping">Shopping Cart</span>
                <span className="balance">Your Balance:$ <span id="balance">0</span></span>
                <div className="basket-conteiner m-t-30">
                    <div className="shopping-basket">
                        <table className="table">
                            <thead id="cartProducts"></thead>
                        </table>
                        <table className="total">
                            <thead>
                                <tr>
                                    <th className="total-price">Total price</th>
                                    <th id="total-price" className="w-15">$ 0</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="checkout">
                            <button className="continue-btn">
                                <Link to="/">Continue Shopping</Link>
                            </button>
                            <button id="checkOut" className="checkout-btn">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;