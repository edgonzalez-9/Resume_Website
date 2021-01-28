import React from 'react';
import Display from '../Components/Display';

function Projects(props){
    return(
        <div>
            <h2>Projects</h2>
            <div className='project-container'>
                {props.projects.map(project => <Display project={project} key={project.name}/>)}
            </div>
        </div>
    )
}

export default Projects;