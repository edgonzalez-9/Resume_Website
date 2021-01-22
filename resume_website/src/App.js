import './App.css';
import Projects from './Containers/Projects';
import Candidate from './data.js'

function App(){
  return(
    <div>
    <div className="header">
      <h1>{Candidate.name}</h1>
      <h2>{Candidate.location}</h2>
      <h3>{Candidate.phoneNumber}</h3>
      <div>
        {Candidate.socialLinks.map(link => <div>{link}</div>)}
      </div>
    </div>
      <div>{Candidate.description}</div>
      <div>{Candidate.languages}</div>
      <div>
        <h1>Projects</h1>
        <Projects projects={Candidate.projects}/>
      </div>
    </div>
  )
}

export default App;
