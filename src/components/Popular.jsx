import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function Popular() {
  const [popular, setPopular] = useState([])
  useEffect(() => {
    getPopular()
  }, [])
  const getPopular = async () => {
    const check = localStorage.getItem('popular')
    if (check) {
      setPopular(JSON.parse(check))
      console.log('popular', popular)
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=11`
      )
      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }
  }
  return (
    <>
      <div className="w-4/5 mx-6">
        <h1 className="text-3xl font-semibold mb-3">Popular Recipes</h1>
        <Splide
          options={{
            breakpoints: {
              1920: {
                perPage: 4,
              },
              1440: {
                perPage: 4,
              },
              1280: {
                perPage: 4,
              },
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
            rewind: true,
            gap: '16px',
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div>
                  <Link to={'/recipe/' + recipe.id}>
                    <img
                      className="rounded-2xl shadow-lg"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <p className="text-center font-semibold mt-1">
                      {recipe.title}
                    </p>
                  </Link>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}

export default Popular
