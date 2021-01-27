import React from 'react';

function Header(props){
    return(
        <div>
            <h1>{props.candidate.name}</h1>
            <div className='container'>
                <div className='item'>Technical Experience</div>
                <div className='item'>Projects</div>
                <div className='item'>Contact Information</div>
            </div>
        </div>
    )
}

export default Header;