import {NavLink} from "react-router-dom";
import APODThumbnail from "../images/APOD.jpg";
import GridThumbnail from "../images/Grid.jpg";

let activeStyle = {
    textDecoration: "underline",
};

let inactiveStyle = {
    textDecoration: "none",
};

function HomeWorkLink({number, desc}) {
    return (
        <nav>
            <NavLink
                to={`/projects/${number}`}
                style={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                }
            >
                Homework: {number} {desc}
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
            <img src={APODThumbnail} className={"thumbnail"}/>
            <HomeWorkLink number={1} desc={"Exploring HTML, CSS, and JavaScript through NASA Astronomy Picture of the Day API!"} />
            <p></p>
            <h2>Homework 2</h2>
            <h3>Exploring React Components</h3>
            <img src={GridThumbnail} className={"thumbnail"}/>
            <HomeWorkLink number={2} desc={"Exploring React components by using CSS Grid Layout!"}/>
            <p></p>
            <h2>Homework 3</h2>
            <h3>Exploring P5</h3>
            <img src={"https://via.placeholder.com/150"} className={"thumbnail"}/>
            <HomeWorkLink number={3} desc={"Exploring p5 by drawing lines on a canvas!"}/>
            <p></p>
            <h2>Homework 4</h2>
            <h3>D3 and Data Visualization</h3>
            <img src={"https://via.placeholder.com/150"} className={"thumbnail"}/>
            <HomeWorkLink number={4} desc={"N/A"}/>
        </div>
    );
}

export default Projects;