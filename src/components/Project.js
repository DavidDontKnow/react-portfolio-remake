import React from "react";

function Project(props) {
    return (
        <div className="project-group">
            {props.projects.map(item => (
                <div id={item.name} key={item.name}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name} />
                    <p>{item.description}</p>
                    <p>{item.technologies}</p>
                    <a href={item.deployed}>Deployed Application</a>
                    <a href={item.github}>GitHub Repository</a>
                </div>
            ))}
        </div>
    );
}

export default Project;