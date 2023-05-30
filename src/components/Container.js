import React, { useState } from "react";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";


function Container() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="bg-slate-800 h-screen w-screen">
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default Container;

