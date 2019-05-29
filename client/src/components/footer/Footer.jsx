import React from "react";
import "./Footer.css"

const Footer = props => {
    return(
        <div className="footer-contant">
            <div className="footer-box">
                <span className="footer-copy">Green Food Co. All Rights Reserved</span>
                <div className="footer-social">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;