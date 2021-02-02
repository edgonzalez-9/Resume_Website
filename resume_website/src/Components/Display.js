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

export default Display;