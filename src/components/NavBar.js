import React from "react";
import Resume from "../assets/Resume.pdf";
function NavBar({ currentPage, handlePageChange }) {

    return (
        <header>
            <h1>David Gutierrez</h1>
            <nav>
                <ul>
                    <a href="#about" onClick={() => handlePageChange("About")}>
                        <li className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</li>
                    </a>
                    <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
                        <li className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</li>
                    </a>
                    <a href="#contact" onClick={() => handlePageChange("Contact")}>
                        <li className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</li>
                    </a>
                    <li><a href={Resume} download={Resume}>Resume</a></li>


                </ul>
            </nav>
        </header>

    );
}




export default NavBar;