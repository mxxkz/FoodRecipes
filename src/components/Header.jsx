function Header() {
  return (
    <div className="w-full mb-10 relative">
      <img
        className="object-cover w-full h-96 contrast-75 brightness-50"
        src="pic/food.jpg"
        alt=""
      />
      <p className="absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black z-30 drop-shadow-lg shadow-amber-400 text-neutral-100">
        Good Food Good Life
      </p>
    </div>
  )
}

export default Header
