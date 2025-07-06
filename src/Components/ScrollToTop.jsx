
// src/Components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // sahifani yuqoriga olib chiqadi
    }, [location.pathname]);

    return null; // hech narsa render qilmaydi
};

export default ScrollToTop;
