import React from "react";
import { Link } from "@reach/router";
import Categories from "./categories/Categories";


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-contant">
                    <div className="flex">
                        <div className="inner-logo">
                            <a href="/">
                                <div className="logo">
                                    <i class="fas fa-seedling"></i>
                                    <span className="logo-txt">Green Food</span>
                                </div>
                            </a>
                        </div>
                        <nav className="header-nav">
                            <form action="">
                                <div className="header-top flex m15">
                                    <div className="delivery">
                                        <a href="/" className="color-w">
                                            <i class="fas fa-dolly-flatbed font-12"></i>
                                            <span className="m-l-10 font-15">Free Delivery</span></a>
                                    </div>

                                    <div className="contact m-l-25">
                                        <a href="/" className="color-w">
                                            <i class="fas fa-headset font-12"></i>
                                            <span className="m-l-10 font-15">Online Support :  032 951402</span></a>
                                    </div>
                                </div>

                                <div className="header-down flex m15">
                                    <div className="search ">
                                        <input type="text" className="search-input" />
                                        <button className="btn">
                                        {/* <i class="fas fa-search font-35 m-l-30"></i> */}
                                        <i class="fas fa-arrow-circle-right font-35"></i>
                                        </button>
                                    </div>
                                    <div className="account">
                                        <Link to="/auth">
                                            <button className="btn">
                                                <i class="fas fa-user-circle font-15 m-l-30"></i>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="cart">
                                        <Link to="/cart">
                                            <button className="btn">
                                                <i class="fas fa-shopping-cart font-15 m-l-30">
                                                    <span className="counter-number">0</span>
                                                </i>

                                            </button>
                                        </Link>
                                    </div>
                                    <div className="admin">
                                        <Link to="/admin">
                                            <button className="btn">
                                            <i class="fas fa-user-lock font-15 m-l-30"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </nav>
                    </div>
                    <Categories />
                </div>
            </header>
        )
    }

}

export default Header;