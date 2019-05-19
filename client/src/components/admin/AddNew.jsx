import React from "react";
import Admin from "./Admin";
import "./admin.css"



class AddNew extends React.Component {
    render() {
        return(
            <div>
            <Admin />
            <div className="add-container">
                <form action="" method="POST">
                    <div className="add-contant">
                        <div className="add-box">
                            <select name="Choose Product" id="" className="select-input">
                                <option value="">{this.props.option1}</option>
                                <option value="">Salad</option>
                                <option value="">Pizza</option>
                                <option value="">Smoothie</option>
                                <option value="">Cookie</option>
                            </select>
                            <input type="text" placeholder="Product Name"/>
                            <input type="aria-label" placeholder="Image"/>
                            <textarea name="" id="" cols="15" rows="2">Description</textarea>
                            <input type="number" placeholder="Price"/>
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
}

AddNew.defaultProps = {
    option1 : "Main Dish"
}
export default AddNew;