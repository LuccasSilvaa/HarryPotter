import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const api = 'https://hp-api.onrender.com/api/characters'
  useEffect(() => {
    axios.get(api).then(res => {console.log(res)
    setCharacters(res.data)
  }).catch(err =>{console.log(err)})}, [api])
  return (
    <div>
      <Link to='/'>Home</Link>
        {characters.map((item)=>(
      <ul>
          <img src={item.image} alt="" />
          <p>name</p>
          <li>{item.name}</li>
          <p>patronus</p>
          <li>{item.patronus}</li>
          <p>species</p>
          <li>{item.species}</li>
      </ul>
        ))}
      <h1>Oi</h1>
      </div>
  )
}
