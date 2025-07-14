

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AOS from 'aos';                // ✅ AOS JS import
import 'aos/dist/aos.css';           // ✅ AOS CSS import

import './App.css';
import Navbar from './Components/Navbar.jsx';
// import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import SmoothScroll from './Components/SmoothScroll.jsx';

import Hero from './Components/Hero.jsx';
import Services from "./Components/Services.jsx";
import Studies from "./Components/Studies.jsx";
import WorkingProcess from "./Components/WorkingProcess.jsx";
import Team from "./Components/Team.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import ContactUs from "./Components/ContactUs.jsx";

import AboutUsPage from './Pages/AboutUsPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';
import UseCasesPage from './Pages/UseCasesPage.jsx';
import PricingPage from './Pages/PricingPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [location.pathname]);



    return (
        <main className="App">
            <SmoothScroll />
            <Navbar />
            <ScrollToTop />

            <Routes>
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

                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/use-cases" element={<UseCasesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>

            {/*<Footer />*/}
        </main>
    );
};

export default App;

