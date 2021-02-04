import React from 'react';

function LanguageCard(props){
    let language = props.language
    return(
        <div className='language-card'>
            <div className='language-container'>
                <h3>{language.name}</h3>
                <img src={language.logo} alt='' />
            </div>
        </div>
    )
}

export default LanguageCard