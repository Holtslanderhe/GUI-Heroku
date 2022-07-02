import {NavLink} from "react-router-dom";

let activeStyle = {
    textDecoration: "underline",
};

let inactiveStyle = {
    textDecoration: "none",
};

function HomeWorkLink({number}) {
    return (
        <nav>
            <NavLink
                to={`/projects/${number}`}
                style={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                }
            >
                Homework: {number}
            </NavLink>
        </nav>
    );
}

function Projects() {

    return (
        <div>
            <h1>Intro to GUI Homeworks</h1>
            <h2>Homework 1</h2>
            <h3>Exploring HTML, CSS, and JavaScript</h3>
            <HomeWorkLink number={1} />
            <p></p>
            <h2>Homework 2</h2>
            <h3>Exploring React Components</h3>
            <HomeWorkLink number={2} />
            <p></p>
            <h2>Homework 3</h2>
            <h3>Exploring P5</h3>
            <HomeWorkLink number={3} />
            <p></p>
            <h2>Homework 4</h2>
            <h3>D3 and Data Visualization</h3>
            <HomeWorkLink number={4} />
        </div>
    );
}

export default Projects;