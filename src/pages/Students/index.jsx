import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom' 

export default function Students() {
 const [students, setStudents] = useState([])
 const api = 'https://hp-api.herokuapp.com/api/characters/students'
 useEffect(()=>{
  axios.get(api).then(res => {
    console.log(res)
    setStudents(res.data)
  })
},[api])

  return (
    <>
    <div>Students</div>
    <Link to='/'>Home</Link>
    {students.map((item) => (
      <ul>
        <img src={item.image} alt="students" />
        <p>name</p>
          <li>{item.name}</li>
          <p>patronus</p>
          <li>{item.patronus}</li>
          <p>species</p>
          <li>{item.species}</li>
      </ul>
    ))}
    </>
  )
}
