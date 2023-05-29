import React from "react";


function About() {
    return (
        <section id="About" className="justify-items-center align-content-center align-items-center text-center">
            <h2 className=" text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">About Me</h2>

            <img className=" border-2 border-slate-700 rounded-full" src="https://avatars.githubusercontent.com/u/108785241?v=4" width={150} height={150} alt="David Gutierrez" />
            <p>
                Full-stack web developer, seeking an entry-level position where he can apply his technical skills and problem-solving abilities to create engaging and responsive web applications.
            </p>

            <h2>Skills</h2>
            <h3>Technical Languages</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>GraphQL</li>
                <li>C#</li>
            </ul>
            <h3>Libraries and Frameworks</h3>
            <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Handlebars.js</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
                <li>Tailwind</li>
                <li>ASP.NET</li>
            </ul>

            <h3>Socials</h3>
            <ul>
                <li><a href="https://github.com/DavidDontKnow">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/davidpenagutierrez/">LinkedIn</a></li>
                <li><a href="https://twitter.com/DavidDontKnow">Twitter</a></li>
            </ul>


        </section>
    )
}

export default About;