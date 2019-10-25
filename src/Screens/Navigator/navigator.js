import React from 'react';
import './navigatorStyle.css'

const navigator = (props) => {
    return (
        <div className="navigator">
            <div 
            className="navigatorItem"
            id="navigatorHome">
                <p>Home</p>
            </div>
            <div 
            className="navigatorItem"
            id="navigatorProducts">
                <p>Products</p>
            </div>
            <div 
            className="navigatorItem"
            id="navigatorAboutus">
                <p>About us</p>
            </div>
        </div>
    )
}

export default navigator;