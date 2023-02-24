import React from 'react';

const Parent = (props, {FirstName = 'Rahul'}) => {
    return (
        <>
            <div className="homePageContainer">
                <h2 style={{fontSize: props.fontSize}}>FirstName :- {FirstName}</h2>
                <h2>LastName :- {props.LastName}</h2>
                <h3>Age :- {props.age}</h3>
            </div>
        </>
    );
}

export default Parent;