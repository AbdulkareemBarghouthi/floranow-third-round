import React from 'react';
import './headerStyle.css';

const header = (props) => {
    return(
        <div className="header">
            <div className="headerLogo">
                <img 
                id="logoImage"
                src={require('../../assets/logo192.png')} />
            </div>
            <div className="searchBar">
                <input 
                id="textInputSearch"
                type="text" 
                placeholder="Search for products"
                />
            </div>
        </div>
    )
}

export default header;