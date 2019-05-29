import React from "react";
import Admin from "./Admin";
import "./admin.css"

const Offer = props => {
    return (
        <div>
            <Admin />
            <div className="add-container">
                <form action="" method="POST">
                    <div className="add-contant">
                        <div className="add-box">
                            <input type="text" placeholder="Product name"/>
                            <input type="aria-label" placeholder="Image"/>
                            <textarea name="" id="" cols="15" rows="2">Description</textarea>
                            <input type="number" placeholder="Price"/>
                            <input type="number" placeholder="Sale Price" />
                            <input type="number" placeholder="Duration"/>
                            <button className="wid-20">Add</button>
                        </div>
                        <div className="product add-box">
                            <div className="img-box">image</div>
                            <span>Name</span>
                            <span>price</span>
                            <div>
                                <button className="wid-20">edit</button>
                                <button className="wid-20">delete</button>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Offer;