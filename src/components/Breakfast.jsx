import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function Breakfast() {
  const [breakfast, setBreakfast] = useState([])
  useEffect(() => {
    getBreakfast()
  }, [])
  const getBreakfast = async () => {
    const check = localStorage.getItem('breakfast')
    if (check) {
      setBreakfast(JSON.parse(check))
      console.log('breakfast', breakfast)
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=11&type=breakfast`
      )
      const data = await api.json()
      localStorage.setItem('breakfast', JSON.stringify(data.recipes))
      setBreakfast(data.recipes)
    }
  }
  return (
    <>
      <div className="w-4/5">
        <h1 className="text-3xl font-semibold mb-3">
          What do you want for breakfast
        </h1>
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
          {breakfast.map((recipe) => {
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

export default Breakfast
