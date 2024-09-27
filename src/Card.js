import React from 'react';

const Card = (props) => {
    return (
        <div className="cardContainer">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <h3>{props.role}</h3>
            <button>Edit</button>
        </div>
    )
}

export default Card;