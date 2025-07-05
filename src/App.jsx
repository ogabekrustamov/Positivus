

import './App.css'
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

import Hero from './Components/Hero.jsx'
import Services from "./Components/Services.jsx";
import Studies from "./Components/Studies.jsx";
import WorkingProcess from "./Components/WorkingProcess.jsx";
import Team from "./Components/Team.jsx"
import Testimonials from "./Components/Testimonials.jsx";
import ContactUs from "./Components/ContactUs.jsx";

import AboutUsPage from './Pages/AboutUsPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';
import UseCasePage from './Pages/UseCasesPage.jsx';
import PricingPage from './Pages/PricingPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';

const App = () => {
    return (
        <main className="App">
            <Navbar />

            <Routes>
                {/* Bosh sahifa */}
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Services />
                            <Studies />
                            <WorkingProcess />
                            <Team />
                            <Testimonials />
                            <ContactUs />
                        </>
                    }
                />

                {/* Boshqa sahifalar */}
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/use-cases" element={<UseCasePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>

            <Footer />
        </main>
    )
}

export default App;

