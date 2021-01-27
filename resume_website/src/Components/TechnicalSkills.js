import React from 'react';

function TechnicalSkills(props){
    return(
        <div className='project-container'>
            <h2>Technical Experience</h2>
            <h3>Programming Languages</h3>
            <div className='container'>
                {props.candidate.languages.map(language => <div>{language}</div>)}
            </div>
            <div>{props.candidate.description}</div>
        </div>
    )
}

export default TechnicalSkills;