import React from "react";
import { Link, Router } from "@reach/router";

import TodaysOffer from "../todaysOffer/TodaysOffer";
import Popular from "../popular/Popular";
import NewArrival from "../newArrival/NewArrival";

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div className="manu-nav">
                    <Link to="/offer" className="manu-bar">Today's Offer</Link>
                    <Link to="/popular" className="manu-bar m-l-30">Popular</Link>
                    <Link to="/new" className="manu-bar m-l-30">New Arrival</Link>
                </div>
                
                <Router>
                    <TodaysOffer path="/offer" />
                    <Popular path="/popular" />
                    <NewArrival path="/new" />
                </Router>
            </div>
        )
    }
}
export default Navigation;