import './App.css';
import Candidate from './data.js'

function App(){
  return(
    <div>
    <div className="header">
      <h1>{Candidate.name}</h1>
      <div>
        {Candidate.socialLinks.map(link => <div>{link}</div>)}
      </div>
    </div>
      {Candidate.languages.map(language => <div>{language}</div>)}
    </div>
  )
}

export default App;
