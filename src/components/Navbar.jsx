import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-12 bg-white flex justify-between items-center px-12">
      <Link to="/">
        <h1 className="font-bold text-3xl font-logo">Mook Recipes</h1>
      </Link>
    </div>
  )
}

export default Navbar
