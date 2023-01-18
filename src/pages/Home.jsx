import Breakfast from '../components/Breakfast'
import Popular from '../components/Popular'

function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Popular />
      <Breakfast />
    </div>
  )
}

export default Home
