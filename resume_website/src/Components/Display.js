import React from 'react';

function Display(props){

    let project = props.project
    return(
        <div>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <div>{project.bulletPoints.map(point => <div>{point}</div>)}</div>
        </div>
    )
}

export default Display;