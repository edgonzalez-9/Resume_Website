import React from 'react';
import Front from './Front';
import Back from './Back';

class ProjectCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isCardFront: true
        }
    }

    handleClick = () => {
        this.setState({
            isCardFront: !this.state.isCardFront
        })
    }

    render(){
        return(
            <div >
                {this.state.isCardFront ? 
                    <Front project={this.props.project} handleClick={this.handleClick}/>
                    :   
                    <Back project={this.props.project} handleClick={this.handleClick}/>
                }
            </div>
        )
    }
}

export default ProjectCard;