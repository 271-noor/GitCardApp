import React, { useState } from 'react'
import axios from "axios"
import   './Card.css'

function Form(props) {
  const [name, setName] = useState("")
  async function handleSubmit(event){
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${name}`)
    console.log(resp.data)
    props.onSubmit(resp.data)
    setName("")
  }
  return (
    <div className="bg">
      <form onSubmit= {handleSubmit} >
        <input type={"text"} onChange ={(event) => 
          {setName(event.target.value); }}
          value = {name} placeholder='Enter your user Name'>
        </input>
        <button type="submit" className="btn">Add New</button>
        </form>
          
    </div>
  )
}

export default Form
