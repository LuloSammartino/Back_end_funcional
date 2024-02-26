import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {

const [estado, setEstado]=useState('')


  
const handleClick =  () => {
  axios.get('http://localhost:3001/')
  .then(({data}) =>  setEstado(data) )
  
}


  return (
    <>
      <button onClick={() => handleClick()}>crear li</button>
      {estado && <h2>{estado}</h2>  }
    </>
  )
}

export default App
