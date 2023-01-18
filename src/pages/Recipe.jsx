import { useEffect, useState } from 'react'

import React from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
  let params = useParams()
  const [detail, setDetail] = useState({})
  useEffect(() => {
    getDetails()
  }, [params.name])
  const getDetails = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const details = await api.json()
    setDetail(details)
  }
  return (
    <div className="w-4/5 flex flex-col justify-center mt-6">
      <div className="font-semibold text-2xl">{detail.title}</div>
      <div className="w-4/5 flex gap-20 mt-6">
        <div>
          <img
            className="rounded-2xl shadow-md"
            src={detail.image}
            alt={detail.title}
          />
        </div>
        <div>
          <div className="font-semibold text-xl underline mb-3">
            Ingredients
          </div>
          <ul className="list-disc">
            {detail.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="font-semibold text-xl underline mt-6 mb-3">
          Instructions
        </div>
        <div dangerouslySetInnerHTML={{ __html: detail.instructions }}></div>
      </div>
    </div>
  )
}

export default Recipe
