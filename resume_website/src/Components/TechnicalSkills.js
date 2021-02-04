import React from 'react';
import LanguageCard from './LangugageCard';

function TechnicalSkills(props){
    return(
        <div>
            <h3>Technical Experience</h3>
            <div className='project'>
                <div className='project-div'>
                    {props.candidate.description}
                </div>
            </div>
            <h3>Programming Languages</h3>
            <div className='l-container'>
                {props.candidate.languages.map(language => <LanguageCard language={language}/>)}
            </div>
        </div>
    )
}

export default TechnicalSkills;