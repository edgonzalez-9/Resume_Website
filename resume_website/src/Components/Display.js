import React from 'react';

function Display(props){

    let project = props.project
    return(
        <div className='project'>
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
            {project.bulletPoints.map(point => <ul>{point}</ul>)}
        </div>
    )
}

export default Display;