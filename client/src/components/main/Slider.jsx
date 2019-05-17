import React from "react" 

const Slider = props => {
    return (
        <div className="slideshow-imgs">
        <SlideImg />
        <br></br>
    </div>
    )
}

class SlideImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgimg: "img/slider/main3.jpg"
        };
        this.imgs = [
            "/img/slider/main3.jpg",
            "/img/slider/main4.jpg",
            "/img/slider/main2.jpg",
            "/img/slider/main5.jpg"
        ];
        this.text = [
            'Nutrients Over Calories, Eat The Rainbow',
            'For A Long Life, Eat Healthy Foods.',
            'A Healthy Outside Starts From The Inside.',
            'Create Healthy Habits, Not Restrictions.'
        ];
        this.index = 0;
    }

    componentDidMount() {
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);
    }

    changeBGnext() {
        clearTimeout(this.timerID);
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);

        this.index = (this.index + 1 > this.imgs.length - 1) ? 0 : this.index + 1;
        this.setState({
            bgimg: this.imgs[this.index]
        });
    }
    changeBGprev() {
        clearTimeout(this.timerID);
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);

        this.index = (this.index - 1 < 0) ? 2 : this.index - 1;
        this.setState({
            bgimg: this.imgs[this.index]
        });
    }
    changeBG(id) {
        clearTimeout(this.timerID);
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);

        this.index = id;
        this.setState({
            bgimg: this.imgs[this.index]
        });
    }
    
    render() {
        return (
            <div className="mySlides fade" style={{ backgroundImage: `url("${this.state.bgimg}")` }}>
                <div className="slider-contant">
                    <h1 className="slider-title">{this.text[this.index]}</h1>
                    <button className="shopNow-btn">Shop Now</button>
                </div>
                <div className="slider-dots">
                    <span className="dot" onClick={(e) => this.changeBG(0)}></span>
                    <span className="dot" onClick={(e) => this.changeBG(1)}></span>
                    <span className="dot" onClick={(e) => this.changeBG(2)}></span>
                    <span className="dot" onClick={(e) => this.changeBG(3)}></span>
                </div>
            </div>
        );
    }
}

export default Slider;