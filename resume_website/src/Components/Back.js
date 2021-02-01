import React from 'react';

function Back(props){
    return(
        <div onClick={() => props.handleClick()}>
            <h3>{props.project.description}</h3>
            <ul>
                {props.project.bulletPoints.map(point => <li>{point}</li>)}
            </ul>
        </div>
    )
}

export default Back;