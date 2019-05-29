import React from "react";
import Header from "./Header";
import Slider from "./Slider"
import Navigation from '../navigation/Navigation';
import NewsLetter from "../newsletter/NewsLetter";
import Footer from "../footer/Footer";

const Main = props => {
    return (
        <div>
            <Header />
            <Slider />
            <Navigation />
            <NewsLetter />
            <Footer />
        </div>
    )
}


export default Main;