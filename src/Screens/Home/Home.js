import React, { Component } from 'react';
import Header from '../Header/header';
import Navigator from '../Navigator/navigator';
import Slider from '../Slider/slider';
import Content from '../Content/Content';

import './HomeStyle.css'
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Navigator />
                <Slider />
                <Content />
            </div>
        )
    }
}

export default Home;