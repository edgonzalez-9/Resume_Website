import React from 'react';

function SocialCard(props) {
    let info = props.info
    return(
        <div className='info-card'>
                <img src={info.image} alt='' />
                <a href={info.link}>
                    <h5>{info.link}</h5>
                </a>
        </div>
    )
}

export default SocialCard