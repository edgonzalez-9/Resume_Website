import React from 'react';

function Front(props){
    return(
        <div onClick={() => props.handleClick()}>
            <h1>{props.project.name}</h1>
            <img src={props.project.image} alt=''/>
        </div>
    )
}

export default Front;