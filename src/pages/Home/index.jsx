import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>Home</div>
    <Link to='/characters'>Personagens</Link>
    <Link to='/staff'>Professores</Link>
    <Link to='/students'>Estudantes</Link>
    </>
  )
}
