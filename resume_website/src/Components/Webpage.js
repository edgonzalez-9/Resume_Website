import React from 'react';
import Projects from '../Containers/Projects';
import ContactInformation from './ContactInformation';
import Header from './Header';
import TechnicalSkills from './TechnicalSkills';
import Data from '../data'

class Webpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            candidate: Data,
            nowShowing: 'skills', 
        };
    };

    handleClick = (e) => {
        if (e === 'skills'){
            this.setState({
                nowShowing: 'skills'
            });
        } else if (e === 'projects'){
            this.setState({
                nowShowing: 'projects'
            });
        } else if (e === 'contact'){
            this.setState({
                nowShowing: 'contact'
            })
        }
    }

    render(){
        if (this.state.nowShowing === 'skills') {
            return(
                <div>
                    <Header candidate={this.state.candidate} handleClick={this.handleClick}/>
                    <TechnicalSkills candidate={this.state.candidate}/>
                </div>
            );
        } else if(this.state.nowShowing === 'projects') {
            return(
                <div>
                    <Header candidate={this.state.candidate} handleClick={this.handleClick}/>
                    <Projects projects={this.state.candidate.projects}/>
                </div>
            );
        } else if (this.state.nowShowing === 'contact') {
            return(
                <div>
                    <Header candidate={this.state.candidate} handleClick={this.handleClick}/>
                    <ContactInformation candidate={this.state.candidate}/>
                </div>
            );
        };
    };
}

export default Webpage;