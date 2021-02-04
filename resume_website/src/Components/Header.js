import React from 'react';

function Header(props){
    return(
        <div className='header'>
            <div className='container'>
            <h1>{props.candidate.name}</h1>
                <button name='skills' onClick={(e) => props.handleClick(e.target.name)}>
                    Technical Skills
                </button>
                <button name='projects' onClick={(e) => props.handleClick(e.target.name)}>
                    Projects
                </button>
                <button name='contact' onClick={(e) => props.handleClick(e.target.name)}>
                    Contact Information
                </button>
            </div>
        </div>
    )
}

export default Header;