import React, { useState, useEffect } from 'react';
import './SliderStyle.css';

import { TransitionGroup } from 'react-transition-group';
import '@fortawesome/react-fontawesome/index';

const Slider = (props) => {

    const [images, setImages] = useState([
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg",
        "https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
        "https://natgeo.imgix.net/factsheets/thumbnails/01-balance-of-nature.adapt.jpg?auto=compress,format&w=1600&h=900&fit=crop",
        "https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/23_660x371.jpg"
    ]);

    const [sliderIndex, setSliderIndex] = useState(0);

    const handleNextButton = () => {
        if (sliderIndex === images.length - 1) {
            setSliderIndex(0);
            return;
        }
        setSliderIndex(sliderIndex + 1);
    }

    const handlePrevButton = () => {
        if (sliderIndex === 0) {
            setSliderIndex(images.length - 1);
            return;
        }
        setSliderIndex(sliderIndex - 1);
    }

    return (
        <>
            <div
                style={{ backgroundImage: `url(${images[sliderIndex]})` }}
                className="slider">

                <div className="sliderButtonHolder">
                    <div
                        onClick={handlePrevButton}
                        id="sliderNext"
                        className="sliderButton">
                        <TransitionGroup>
                            <img
                                style={{ height: 60, width: 50, color: "white" }}
                                src="https://cdn2.iconfinder.com/data/icons/music-player-icons-line/48/Back_Button-512.png" />
                        </TransitionGroup>
                    </div>

                    <div
                        onClick={handleNextButton}
                        id="sliderPrev"
                        className="sliderButton">
                        <img
                            style={{ height: 60, width: 50, color: "white" }}
                            src="https://image.flaticon.com/icons/png/512/130/130884.png"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;
