import React from 'react';

function ContactInformation(props){
    return(
        <div>
            <h2>Contact Information</h2>
            <div className='container'>
                {props.candidate.socialLinks.map(link => <div>{link}</div>)}
            </div>
        </div>
    )
}

export default ContactInformation;