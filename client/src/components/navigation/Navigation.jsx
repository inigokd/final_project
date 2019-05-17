import React from "react";
import { Link, Router } from "@reach/router";

import TodaysOffer from "./TodaysOffer";
import Popular from "./Popular";
import NewArrival from "./NewArrival";

class Navigation extends React.Component {
constructor(props) {
    super(props);
    this.state = {active: false};
}

click() {
    this.setState({active: true});
}

    render() {
        return (
            <div>
                <div className="manu-nav">
                    <button style={{backgroundColor: "black", color: "white"}} onClick={this.state.active}>
                        <Link to="/offer" className="manu-bar">Today's Offer</Link>
                    </button>
                    <button>
                        <Link to="/popular" className="manu-bar m-l-30">Popular</Link>
                    </button>
                    <button>
                        <Link to="/new" className="manu-bar m-l-30">New Arrival</Link>
                    </button>
                </div>
                
                <Router>
                    <TodaysOffer path="/" />
                    <TodaysOffer path="/offer" />
                    <Popular path="/popular" />
                    <NewArrival path="/new" />
                </Router>
            </div>
        )
    }
}
export default Navigation;