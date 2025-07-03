
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Services from "./Components/Services.jsx";
import Studies from "./Components/Studies.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = ()  =>{


  return (
    <main className="App">
        <Navbar />
        <Hero />
        <Services />
        <Studies />
    </main>
  )
}

export default App
