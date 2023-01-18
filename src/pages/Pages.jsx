import { Route, Routes } from 'react-router-dom'

import Cuisine from './Cuisine'
import Home from './Home'
import React from 'react'
import Recipe from './Recipe'
import Search from './Search'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:menu" element={<Search />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  )
}

export default Pages
