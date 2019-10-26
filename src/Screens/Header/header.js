import React from 'react';
import './headerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const header = (props) => {
    return (
        <div className="header">
            <div className="headerLogo">
                <img
                    id="logoImage"
                    src={require('../../assets/logo192.png')} />
            </div>

            <div
                id="searchIcon"
            >
                <FontAwesomeIcon
                    icon="search"
                    color="black"
                    style={{height: "30px", width: "30px"}}
                />
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