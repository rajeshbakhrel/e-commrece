import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './Components/Navbar'
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Footer from './Components/Footer'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'

function App() {

  return (
    <div className="App">
     
     
      <Router>
         <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
            <Route path='*' element={<Error/>}/>
            
        </Routes>

        <Footer/>
      </Router>
  
    </div>
  )
}

export default App
