import React from "react";
import Admin from "./Admin";
import "./admin.css"



class AddNew extends React.Component {
    render() {
        return (
            <div>
                <Admin />
                <div className="add-container">
                    <div className="add-contant">
                        <div className="add-box">
                            <select name="ChooseProduct" className="select-input">
                                <option value="Main Dish">Main Dish</option>
                                <option value="Sanal">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Smoothie">Smoothie</option>
                                <option value="Cookie">Cookie</option>
                            </select>
                            <input name="prodtName" type="text" placeholder="Product Name" />
                            <input name="prodImg" type="aria-label" placeholder="Image" />
                            <textarea name="prodDesc" cols="15" rows="2">Description</textarea>
                            <input name="prodPrice" type="number" placeholder="Price" />
                            <button onClick={(e) => this.changeBG(0)} className="wid-20">Add</button>
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
                </div>
            </div>
        )
    }
}


export default AddNew;