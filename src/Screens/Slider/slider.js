import React, { useState, useEffect } from 'react';
import './SliderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransitionGroup } from 'react-transition-group';

const Slider = (props) => {

    const [images, setImages] = useState([
        "https://image.shutterstock.com/image-photo/wide-angle-panorama-autumn-forestmisty-260nw-1195159864.jpg",
        "https://cdn.photographypro.com/wp-content/uploads/2018/01/shoot-panoramic-photos-2@2x-1.jpg",
        "https://image.shutterstock.com/image-photo/wide-panorama-sunset-sky-clouds-260nw-731576737.jpg",
        "https://image.shutterstock.com/image-photo/wide-aerial-panorama-sydney-city-260nw-1028645098.jpg"
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
                        
                        <FontAwesomeIcon 
                            icon="chevron-left"
                            color="white"
                            style={{height: 60, width: 60}}
                        />
                    </div>

                    <div
                        onClick={handleNextButton}
                        id="sliderPrev"
                        className="sliderButton">
                        
                        <FontAwesomeIcon 
                            icon="chevron-right"
                            color="white"
                            style={{height: 60, width: 60}}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;
