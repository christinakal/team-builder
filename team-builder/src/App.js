import React, { useState } from 'react';
import './App.css';
import Form from "./Form";

function App() {
  const uuidv4 = require('uuid/v4');

  const [teamMembers, setTeamMembers] = useState([
    "Team Member 1",
    "Team Member 2",
    "Team Member 3",
    "Team Member 4",
    "Team Member 5"
    // {
    //   id: uuidv4(),
    //   name: "Team member 1"
    // },
    // {
    //   id:  uuidv4(),
    //   name: "Team member 2"
    // },
    // {
    //   id:  uuidv4(),
    //   name: "Team member 3"
    // }
  ]);


  return (
    <div className="App">
    <Form />
      <ul>
        {teamMembers.map(member=> (
          <li>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
