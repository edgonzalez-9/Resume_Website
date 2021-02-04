import React from 'react';

function Front(props){
    return(
        <div className='project-card'onClick={() => props.handleClick()}>
            <h2>{props.project.name}</h2>
            <img src={props.project.image} alt=''/>
        </div>
    )
}

export default Front;