import React from 'react';
import Display from '../Components/Display';

function Projects(props){
    return(
        <div>{props.projects.map(project => <Display project={project}/>)}</div>
    )
}

export default Projects;