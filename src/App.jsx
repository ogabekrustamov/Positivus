
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Services from "./Components/Services.jsx";
import Studies from "./Components/Studies.jsx";
import WorkingProcess from "./Components/WorkingProcess.jsx";
import Team from "./Components/Team.jsx"
import Testimonials from "./Components/Testimonials.jsx";
import ContactUs from "./Components/ContactUs.jsx";



const App = ()  =>{


  return (
    <main className="App">
        <Navbar />
        <Hero />
        <Services />
        <Studies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactUs />
    </main>
  )
}

export default App
