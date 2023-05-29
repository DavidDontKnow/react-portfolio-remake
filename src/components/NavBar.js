import React from "react";
import Resume from "../assets/Resume.pdf";
function NavBar({ currentPage, handlePageChange }) {

    return (
        <div className="bg-slate-700">
            <header className="mx-auto flex items-center justify-between p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-bold text-transparent sm:text-3xl uppercase tracking-tight">
                <h1> <span className="david">David </span> <span className="max-md:hidden"> Gutierrez</span></h1>
                <nav >
                    <ul className=" flex items-center gap-2 text-md font-large p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
                        <a className="p-2" href="#about" onClick={() => handlePageChange("About")}>
                            <li className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</li>
                        </a>
                        <a className="p-2" href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
                            <li className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</li>
                        </a>
                        <a className="p-2" href="#contact" onClick={() => handlePageChange("Contact")}>
                            <li className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</li>
                        </a>
                        <li className="p-2"><a href={Resume} download={Resume}>Resume</a></li>


                    </ul>
                </nav>
            </header>
        </div>

    );
}




export default NavBar;