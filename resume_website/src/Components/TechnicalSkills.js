import React from 'react';
import LanguageCard from './LangugageCard';

function TechnicalSkills(props){
    return(
        <div>
            <h2>Technical Experience</h2>
            <div className='project'>
                {props.candidate.description}
            </div>
            <h3>Programming Languages</h3>
            <div className='l-container'>
                {props.candidate.languages.map(language => <LanguageCard language={language}/>)}
            </div>
        </div>
    )
}

export default TechnicalSkills;