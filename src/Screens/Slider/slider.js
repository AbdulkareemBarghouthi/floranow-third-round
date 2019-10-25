import React, { useState, useEffect } from 'react';
import './SliderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';


const Slider = (props) => {
    
    const [images, setImages] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg",
    "https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
    "https://natgeo.imgix.net/factsheets/thumbnails/01-balance-of-nature.adapt.jpg?auto=compress,format&w=1600&h=900&fit=crop",
    "https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/23_660x371.jpg"
    ]);

    const [sliderIndex, setSliderIndex] = useState(0);

    const handleNextButton = ()=>{
        if(sliderIndex === images.length){
            setSliderIndex(0);
            return;
        }
        setSliderIndex(sliderIndex + 1);
    }

    const handlePrevButton = ()=>{
        if(sliderIndex === 0){
            setSliderIndex(images.length - 1);
            return;
        }
        setSliderIndex(sliderIndex - 1);
    }

    return (
        <>
            <div
                style={{ backgroundImage: `url(${images[sliderIndex]})`}}
                className="slider">
                {/* <img
                id="images"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPdg7J_RLcv6m_16nHwGFgm7GNCa_4DeFA_kK9Rw2ZM1QQPQQL"
            /> */}
                <div className="sliderButtonHolder">
                    <div
                        onClick={handlePrevButton}
                        id="sliderNext"
                        className="sliderButton">

                        <img
                            style={{ height: 60, width: 50, color: "white" }}
                            src="https://cdn2.iconfinder.com/data/icons/music-player-icons-line/48/Back_Button-512.png" />

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
