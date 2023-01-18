import { GiHamburger, GiNoodles, GiSushis } from 'react-icons/gi'

import { CiPizza } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import React from 'react'

function Category() {
  return (
    <div className="flex gap-4">
      <NavLink to={'/cuisine/american'}>
        <button className="flex flex-col items-center text-sm text-white justify-center rounded-full bg-orange-400 w-20 h-20 hover:bg-orange-600 hover:scale-110 ease-in-out delay-100">
          <GiHamburger />
          <p>American</p>
        </button>
      </NavLink>
      <NavLink to={'/cuisine/japanese'}>
        <button className="flex flex-col items-center text-sm text-white justify-center rounded-full bg-orange-400 w-20 h-20 hover:bg-orange-600 hover:scale-110 ease-in-out delay-100">
          <GiSushis />
          <p>Japanese</p>
        </button>
      </NavLink>
      <NavLink to={'/cuisine/chinese'}>
        <button className="flex flex-col items-center text-sm text-white justify-center rounded-full bg-orange-400 w-20 h-20 hover:bg-orange-600 hover:scale-110 ease-in-out delay-100">
          <GiNoodles />
          <p>Chinese</p>
        </button>
      </NavLink>
      <NavLink to={'/cuisine/italian'}>
        <button className="flex flex-col items-center text-sm text-white justify-center rounded-full bg-orange-400 w-20 h-20 hover:bg-orange-600 hover:scale-110 ease-in-out delay-100">
          <CiPizza />
          <p>Italian</p>
        </button>
      </NavLink>
    </div>
  )
}

export default Category
