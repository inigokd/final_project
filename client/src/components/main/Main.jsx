import React from "react";
import Header from "./Header";
import Slider from "./Slider"
import Navigation from '../navigation/Navigation';

const Main = props => {
    return (
        <div>
            <Header />
            <Slider />
            <Navigation />
        </div>
    )
}


export default Main;