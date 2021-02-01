import React from 'react';

function LanguageCard(props){
    let language = props.language
    return(
        <div className='language-card'>
            <div className='language-container'>
                {language.name}
                <img src={language.logo} alt='' />
            </div>
        </div>
    )
}

export default LanguageCard