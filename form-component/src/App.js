import logo from './logo.svg';
// import './App.css';
import CardList from './components/CardList'
import Form from './components/Form'
import { useState } from "react"
import Card from './components/Card.css'

function App() {
  const [profiles, setProfiles] = useState([])
  function addProfile(profiledata){
    setProfiles([...profiles, profiledata])
  }
  return (
    <div className="App">
      <h1 className="txt">Git Hub App</h1>
      <Form onSubmit = {addProfile} />
      <CardList profiles = {profiles} />
   
    </div>
   
  );
}

export default App;
