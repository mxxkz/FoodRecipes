import { BrowserRouter } from 'react-router-dom'
import Category from './components/Category'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Pages from './pages/Pages'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App flex flex-col items-center mb-8">
      <BrowserRouter>
        <Navbar />
        <Header />
        <SearchBar />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
