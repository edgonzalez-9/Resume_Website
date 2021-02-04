import React from 'react';
import Display from '../Components/Display';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null
        }
    }

    render(){
        return(
            <div className='projects-container'>
                <h2>Projects</h2>
                <div className='project-container'>
                    {this.props.projects.map(project => <Display project={project} key={project.name}/>)}
                </div>
            </div>
        )
    }
}

export default Projects;