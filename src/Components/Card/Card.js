import React from 'react';
import "./cardStyle.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="cardContent">
                <div className="infoHolder">
                    <div className="cardImage">
                        <img
                            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                            src={props.image}
                        />
                    </div>

                    <div className="cardInfo">
                        <div className="infoContent">
                            <p
                                id="titleStyle"
                                className="pStyle">{props.name}</p>

                            <p
                                className="pStyle">{props.id}</p>
                        </div>
                        <div className="buttonHolder">
                            <div
                                id="addButton"
                                className="buttonStyle">
                                Add
                            </div>

                            <div
                                id="compareButton"
                                className="buttonStyle"
                            >
                                Compare
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;