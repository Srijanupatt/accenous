import React from 'react'
import { useState } from 'react'
function About() {
  const [name, setName] = useState('');
  const [pass, setPassword] = useState('');

  function handleName(){
    setName(event.target.value)
  }

  function handlePassword(){
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
  return (
    <div>
<form onSubmit={handleSubmit}>
  <input type='text' placeholder='Name' value={name} onChange={handleName}/>
  <input type='password' placeholder='Password' value={pass} onChange={handlePassword}/>
 

  <button type='submit'>CLICK</button>

</form>
    </div>
  )

}


export default About;


