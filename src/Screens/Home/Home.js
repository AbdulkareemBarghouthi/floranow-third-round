import React, { Component } from 'react';
import Header from '../Header/header';
import Navigator from '../Navigator/navigator';
import './HomeStyle.css'
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Navigator />
            </div>
        )
    }
}

export default Home;