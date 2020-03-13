import React from 'react';


const Card = (props) => {

    const { styleClass, cardTitle } = props;

    return (
        <div className={"card " + styleClass}>
            <div className="card-header">
                <h3 className="card-title">{cardTitle}</h3>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;