
import Project from "../Project.js";

const projects = [
    {
        name: "Project 1",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 1",
        technologies: "HTML, CSS, JavaScript",
        deployed: "",
        github: ""
    }, {
        name: "Project 2",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 2",
        technologies: "HTML, CSS, JavaScript",
        deployed: "",
        github: ""
    }, {
        name: "Project 3",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 3",
        technologies: "HTML, CSS, JavaScript",
        deployed: "",
        github: ""
    }, {
        name: "Project 4",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 4",
        technologies: "HTML, CSS, JavaScript",
        deployed: "",
        github: ""
    }, {
        name: "Project 5",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 5",
        technologies: "HTML, CSS, JavaScript",
        deployed: "",
        github: ""
    }, {
        name: "Project 6",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 6",
        technologies: "HTML, CSS, JavaScript",
        deployed: "",
        github: ""
    }];




function Portfolio() {
    return (
        <section id="Portfolio">
            <h2>Portfolio</h2>
            <Project projects={projects} />
        </section>
    )
}

export default Portfolio;
