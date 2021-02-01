import React from 'react';
import SocialCard from './SocialCard';

function ContactInformation(props){
    let candidate = props.candidate
    return(
        <div>
            <h2>Contact Information</h2>
            <div className='l-container'>
                {candidate.socialLinks.map(info => <SocialCard info={info}/>)}
            </div>
        </div>
    )
}

export default ContactInformation;