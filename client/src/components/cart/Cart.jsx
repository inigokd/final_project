import React from "react"
import "./Cart.css";
import { Link, Router } from '@reach/router';
import Header from "../main/Header";

const Cart = props => {
    return (
        <div>
            <Header />
            <div class="cart-conteiner">
                <span class="shopping">Shopping Bag</span>
                <span class="balance">Your Balance:$ <span id="balance">0</span></span>
                <div class="basket-conteiner m-t-30">
                    <div class="shopping-basket">
                        <table class="table">
                            <thead id="cartProducts"></thead>
                        </table>
                        <table class="total">
                            <thead>
                                <tr>
                                    <th class="total-price">Total price</th>
                                    <th id="total-price" class="w-15">$ 0</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="checkout">
                            <button class="continue-btn">
                                <Link to="/">Continue Shopping</Link>
                            </button>
                            <button id="checkOut" class="checkout-btn">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;