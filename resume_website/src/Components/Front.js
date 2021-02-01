import React from 'react';

function Front(props){
    return(
        <div onClick={() => props.handleClick()}>
            <h1>{props.project.name}</h1>
        </div>
    )
}

export default Front;