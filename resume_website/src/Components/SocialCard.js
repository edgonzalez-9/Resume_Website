import React from 'react';

function SocialCard(props) {
    let info = props.info
    return(
        <div className='info-card'>
            <a href={info.link}>
            <img src={info.image} alt='' />
            </a>
        </div>
    )
}

export default SocialCard