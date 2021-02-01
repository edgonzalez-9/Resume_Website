import React from 'react';
import ProjectCard from './ProjectCard';

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardIsFront: true
        }
    };

    render(){
        return(
            <div>
                <ProjectCard project={this.props.project}/>
            </div>
        )
    }
}
// function Display(props){

//     let project = props.project
//     return(
//         <div className='project-card'>
//             <h1>{project.name}</h1>
//             <h3>{project.description}</h3>
//             <ul>
//             {project.bulletPoints.map(point => <li>{point}</li>)}
//             </ul>
//         </div>
//     )
// }

export default Display;