import './App.css';
import ContactInformation from './Components/ContactInformation';
import Header from './Components/Header'
import TechnicalSkills from './Components/TechnicalSkills';
import Projects from './Containers/Projects';
import Candidate from './data.js'

function App(){
  return(
    <div>
      <Header candidate={Candidate}/>
      <TechnicalSkills candidate={Candidate}/>
      <Projects projects={Candidate.projects}/>
      <ContactInformation candidate={Candidate}/>
    </div>
  )
}

export default App;
