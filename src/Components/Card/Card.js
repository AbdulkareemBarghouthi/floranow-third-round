import React from 'react';
import "./cardStyle.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="cardContent">
                <div className="infoHolder">
                    <div
                        style={{ backgroundImage: `url(${props.image})` }}
                        className="cardImage">
                        {props.offer &&
                            <div className="badgeContainer">
                                <div className="badge">
                                    {`${parseInt(Math.random() * 100)}% Off`}
                                </div>
                            </div>
                        }

                    </div>

                    <div className="cardInfo">
                        <div className="infoContent">
                            <p
                                id="titleStyle"
                                className="pStyle">{props.name}</p>

                            <p className="pStyle">
                                {`Product Number: ${props.id + 20}`}</p>

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
                                ignore
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;