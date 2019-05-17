import React from "react";

const TodaysOffer = props => {
    return (
        <div>
            <form action="">
                <div className="offer-container flex">
                    <div className="offer-box">
                        <div className="offer-box-contant">
                            <div className="offer-img offer-img1"></div>
                            <div className="reiting">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div> <br />
                            <span className="offer-title">Roasted Broccoli–Artichoke Dip</span> <br />
                            <div className="offer-price">
                                <span className="price">14.70$</span>
                                <span className="sale">9.90$</span>
                            </div>
                            <div className="offer-btns">
                                <button className="details-btn">Details</button>
                                <button className="add-btn">Add to chat</button>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box">
                        <div className="offer-box-contant">
                            <div className="offer-img offer-img2"></div>
                            <div className="reiting">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div> <br />
                            <span className="offer-title">Creamy Broccolini Pasta with...</span> <br />
                            <div className="offer-price">
                                <span className="price">12.30$</span>
                                <span className="sale">6.50$</span>
                            </div>
                            <div className="offer-btns">
                                <button className="details-btn">Details</button>
                                <button className="add-btn">Add to chat</button>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box">
                        <div className="offer-box-contant">
                            <div className="offer-img offer-img3"></div>
                            <div className="reiting">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div> <br />
                            <span className="offer-title">Parmesan Roasted Asparagus</span> <br />
                            <div className="offer-price">
                                <span className="price">18.10$</span>
                                <span className="sale">9.50$</span>
                            </div>
                            
                            <div className="offer-btns">
                                <button className="details-btn">Details</button>
                                <button className="add-btn">Add to chat</button>
                            </div>
                        </div>
                    </div>
                    <div className="offer-box">
                        <div className="offer-box-contant">
                            <div className="offer-img offer-img4"></div>
                            <div className="reiting">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div> <br />
                            <span className="offer-title">Spring Vegetable Pizza </span> <br />
                            <div className="offer-price">
                                <span className="offer-price">11.70$</span>
                                <span className="sale">7.40$</span>
                            </div>
                            
                            <div className="offer-btns">
                                <button className="details-btn">Details</button>
                                <button className="add-btn">Add to chat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default TodaysOffer;