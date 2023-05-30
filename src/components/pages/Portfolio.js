
import Project from "../Project.js";



const projects = [
    {
        name: "Bootleg Twitter",
        image: "https://via.placeholder.com/150",
        description: "Like Twitter but worse",
        technologies: ["HTML", "CSS", "JavaScript", "Express", "MySQL"],
        stack: "FullStack",
        deployed: "https://bootleg-twitter.herokuapp.com/login",
        github: "https://github.com/DavidDontKnow/BootlegTwitter"
    }, {
        name: "Shoppers on the Go",
        image: "https://via.placeholder.com/150",
        description: "A frontend webpage that gets users a recipe ingredients, and displays nearby stores",
        technologies: ["HTML", "CSS", "JavaScript", "Bulma", "jQuery", "APIs"],
        stack: "Frontend",
        deployed: "https://daviddontknow.github.io/shoppers-on-the-go/",
        github: "https://github.com/DavidDontKnow/shoppers-on-the-go"
    }, {
        name: "Project 3",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 3",
        technologies: ["HTML", "CSS", "JavaScript"],
        deployed: "",
        github: ""
    }, {
        name: "Project 4",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 4",
        technologies: ["HTML", "CSS", "JavaScript"],
        deployed: "",
        github: ""
    }, {
        name: "Project 5",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 5",
        technologies: ["HTML", "CSS", "JavaScript"],
        deployed: "",
        github: ""
    }, {
        name: "Project 6",
        image: "https://via.placeholder.com/150",
        description: "This is a description of Project 6",
        technologies: ["HTML", "CSS", "JavaScript"],
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
