import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import React from 'react'

function Search() {
  const [recipe, setRecipe] = useState([])
  let params = useParams()
  useEffect(() => {
    getMenu(params.menu)
  }, [params.menu])
  const getMenu = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const recipes = await api.json()
    setRecipe(recipes.results)
  }
  return (
    <div className="flex flex-col items-center mt-10 w-4/5 gap-8">
      <h1 className="font-bold text-3xl">{params.menu}</h1>
      <div className="grid grid-cols-4 gap-4">
        {recipe.map((item) => {
          return (
            <div key={item.id}>
              <Link to={'/recipe/' + item.id}>
                <img
                  className="rounded-2xl shadow-lg"
                  src={item.image}
                  alt={item.title}
                />
                <p className="text-center font-semibold mt-1">{item.title}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search
