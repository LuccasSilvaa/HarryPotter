import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Staff() {
  const [staff, setStaff] = useState([])
  const api = 'https://hp-api.herokuapp.com/api/characters/staff'

  useEffect(() => {
    axios.get(api).then(res => {
      console.log(res)
      setStaff(res.data)

    }).catch(err => {console.log(err)})
  }, [api])

  return (
    <>
    <div>Staff</div>
    {staff.map((item) => (
      <ul>
        <img src={item.image} alt="staff" />
        <p>name</p>
        <li>{item.name}</li>
        <p>patronus</p>
        <li>{item.patronus}</li>
        <p>specie</p>
        <li>{item.species}</li>
      </ul>
    ))}
    <Link to='/'>Home</Link>    
    </>
  )
}
