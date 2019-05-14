import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-contant">
                        <div className="inner-logo">
                            <a href="/">
                                <div className="logo">
                                    <i class="fas fa-seedling"></i>
                                    <span className="logo-txt">Green Food</span>
                                </div>
                            </a>
                        </div>
                        <nav>
                            <form action="">
                                <div className="header-top flex m15">
                                    <div className="delivery">
                                            <a href="/" className="color-w">
                                            <i class="fas fa-dolly-flatbed font-25"></i>
                                            <span className="m-l-10">Free Delivery</span></a>

                                    </div>

                                    <div className="contact m-l-25">
                                        <a href="/" className="color-w">
                                        <i class="fas fa-headset font-25"></i>
                                        <span className="m-l-10">Online Support :  032 951402</span></a>

                                    </div>
                                </div>
                                <div className="header-down flex m15">
                                    <div className="search ">
                                        <input type="text" className="search-input" />
                                        <button className="btn"><i class="fas fa-arrow-circle-right font-35"></i></button>

                                    </div>
                                    <div className="account">
                                        <button className="btn"><i class="fas fa-user-circle font-35 m-l-30"></i></button>

                                    </div>
                                    <div className="chart">
                                        <button className="btn"><i class="fas fa-shopping-cart font-35 m-l-30"></i></button>

                                    </div>
                                </div>
                            </form>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }

}

export default Header;