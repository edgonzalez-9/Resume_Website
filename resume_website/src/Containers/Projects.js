import React from 'react';
import Display from '../Components/Display';

function Projects(props){
    return(
        <div>
            <h2>Projects</h2>
            <div className='project-container'>
                {props.projects.map(project => <Display project={project}/>)}
            </div>
        </div>
    )
}

export default Projects;