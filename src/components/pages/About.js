import React from "react";
import github from "../../assets/img/icons8-github-250.png";
import linkedin from "../../assets/img/icons8-linkedin-250.png";
import twitter from "../../assets/img/icons8-twitter-250.png";
import resume from "../../assets/img/icons8-resume-80.png";
import resumePDF from "../../assets/Resume.pdf";




function About() {
    return (

        <section id="About" className=" text-center h-screen">
            <h2 className=" text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">About Me</h2>

            <img className="mx-auto my-4 border-2 border-slate-700 rounded-full" src="https://avatars.githubusercontent.com/u/108785241?v=4" width={150} height={150} alt="David Gutierrez" />


            <div>
                <div className="w-4/5 mx-auto lg:w-3/4 md:w-3/4">
                    <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                        <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
                            id="headerTerminal">
                            <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                                id="closebtn">
                            </div>
                            <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                            </div>
                            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                            </div>
                            <div className="mx-auto pr-16" id="terminaltitle">
                                <p className="text-center text-sm">Terminal</p>
                            </div>
                        </div>
                        <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black min-h-full" id="console">
                            <p className="pb-1">Welcome to: David's Portfolio</p>
                            <br />
                            <p className="pb-1">About: David Gutierrez</p>
                            <br />
                            <p className="pb-1">Summary: Full-stack web developer, seeking an entry-level position where he can
                                apply his technical skills and problem-solving abilities to create engaging and responsive
                                web
                                applications.
                            </p>
                            <br />
                            <p className="pb-1">Skills: HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB,
                                React.js,
                                Bootstrap, Tailwind CSS, Git, GitHub, Heroku, and more.
                            </p>
                            <br />
                            <p className="pb-1">Education: University of Riverside Extension, Full Stack Web Development
                                Bootcamp,
                                2023</p>
                            <br />
                            <p className="pb-1">Hobbies: David enjoys backpacking, hiking, and camping. He also enjoys
                                photography and video making.</p>
                            <br />
                            <p className="pb-1">Email: davidpenagutierrez@gmail.com</p>

                        </div>
                    </div>
                </div>
            </div>


            <h3 className="mt-48 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Socials</h3>

            <div className="flex justify-center mt-4">
                <div
                    className="m-1 transition-all duration-300 hover:rotate-12 transition-all duration-300 hover:scale-110 ">
                    <a href="https://www.linkedin.com/in/davidpenagutierrez/ " target="_blank"
                        rel="noopener noreferrer"><img className="aspect-[2/2] w-16"
                            src={linkedin} alt="linkedin" /></a>
                </div>
                <div
                    className="m-1 transition-all duration-300 hover:rotate-12 transition-all duration-300 hover:scale-110">
                    <a href="https://github.com/DavidDontKnow" target="_blank" rel="noopener noreferrer"><img
                        className="aspect-[2/2] w-16" src={github} alt="GitHub" /></a>
                </div>
                <div
                    className="m-1 transition-all duration-300 hover:rotate-12 transition-all duration-300 hover:scale-110">
                    <a href="https://twitter.com/DavidDontKnow" target="_blank" rel="noopener noreferrer"><img
                        className="aspect-[2/2] w-16" src={twitter} alt="Twitter" /></a>
                </div>
                <div
                    className="m-1 transition-all duration-300 hover:rotate-12 transition-all duration-300 hover:scale-110">
                    <a href="https://docs.google.com/document/d/1sVvbc-S7Tor4lv4aAxIdudP4EfrUE3OoMIZLHy1yE84/edit?usp=sharing"
                        target="_blank" rel="noopener noreferrer"><img className="aspect-[2/2] w-16"
                            src={resume} download={resumePDF} alt="Resume" /></a>
                </div>
            </div>


        </section>
    )
}

export default About;