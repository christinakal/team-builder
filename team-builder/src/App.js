import React, { useState } from 'react';
import './App.css';
import Form from "./Form";
import Members from "./Members";

function App() {
  const uuidv4 = require('uuid/v4');

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Costas",
      email: "costas@thegreek.gr",
      role: "Backend Engineer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }

    setTeamMembers([...teamMembers, newMember]);
  }


  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember}/>
      <Members teamMembers={teamMembers}/>

    </div>
  );
}

export default App;
