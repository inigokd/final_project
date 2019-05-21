import React from "react"
import "./Product.css";
import { Link, Router } from '@reach/router';
import Header from "../main/Header";

const Product = props => {
    return (
        <div>
            <Header />
            <div id="productInfo" className="main-product ">
                <section className="conteiner-product">
                    <div className="img-of-product"></div>
                    <div className="description-product">
                        <form action="">
                            <h2 id="name" className="m-b-5">Roasted Broccoli–Artichoke Dip </h2>
                            <div className="reiting m-b-30">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p id="description" className="m-b-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                                quasi at numquam qui perspiciatis possimus, sequi est totam sunt animi voluptatum ipsa, quidem,
                                    mollitia magnam earum! Quisquam facilis blanditiis quidem?</p>
                            
                            <span id="price" className="price m-b-30">14.70 $</span>
                        </form>
                        <button id="add-basket">Add to basket</button>
                    </div>
                </section>
            </div>
            <div className="comment-content">
                <form action="comment">
                    <div className="comment-value m-top-20">
                        <span>Comments (2)</span><br />
                        <textarea name="comment" id="comment-value" className="m-top-10" autofocus
                            placeholder="Write your comment...." cols="80" rows="2"></textarea>
                        <br />
                        <button id="submit-btn" className="m-top-10" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product;