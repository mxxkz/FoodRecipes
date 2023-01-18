import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import React from 'react'
import { motion } from 'framer-motion'

function Cuisine() {
  let params = useParams()
  const [cuisine, setCuisine] = useState([])
  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])
  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=20`
    )
    const recipes = await api.json()
    setCuisine(recipes.results)
  }
  return (
    <div className="flex flex-col items-center mt-10 w-4/5 gap-8">
      <h1 className="font-bold text-3xl">{params.type} cuisine</h1>
      <div className="grid grid-cols-4 gap-4">
        {cuisine.map((items) => {
          return (
            <div key={items.id}>
              <Link to={'/recipe/' + items.id}>
                <img
                  className="rounded-2xl shadow-lg"
                  src={items.image}
                  alt={items.title}
                />
                <p className="text-center font-semibold mt-1">{items.title}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cuisine
