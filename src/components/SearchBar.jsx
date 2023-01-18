import { FaSearch } from 'react-icons/fa'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SearchBar() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/search/' + input)
  }

  return (
    <form
      className="lg:w-1/3 rounded-xl flex justify-center h-10 mb-6 gap-4 bg-orange-400 p-3"
      onSubmit={submitHandler}
    >
      <FaSearch className="text-white" />
      <input
        className="w-full rounded-xl first-letter:h-8 bg-orange-400 text-white focus:outline-none placeholder-white p-2"
        type="text"
        placeholder="Search Delicious Dish"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
