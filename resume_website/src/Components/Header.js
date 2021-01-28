import React from 'react';

function Header(props){
    return(
        <div>
            <h1>{props.candidate.name}</h1>
            <div className='container'>
                <button name='skills' onClick={(e) => props.handleClick(e.target.name)}>Technical Skills</button>
                <button name='projects' onClick={(e) => props.handleClick(e.target.name)}>Projects</button>
                <button name='contact' onClick={(e) => props.handleClick(e.target.name)}>Contact Information</button>
            </div>
        </div>
    )
}

export default Header;