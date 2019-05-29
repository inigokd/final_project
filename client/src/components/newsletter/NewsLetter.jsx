import React from "react";
import "./Newsletter.css"

const Newsletter = props => {
    return(
        <div>
            <div className="letter-contant">
                <div className="letter-box">
                    <form action="" method="get">
                        <i class="far fa-envelope-open"></i>
                        <div className="letter-title">
                            <span className="font-40">Newsletter</span> < br />
                            <span className="font-25">Subscibe for latest news, updates and special offers.</span>
                        <div className="letter-email">
                            <input type="text" placeholder="Email"/>
                            <button name="subscribe-btn">Subscribe</button>
                        </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )

}

export default Newsletter;