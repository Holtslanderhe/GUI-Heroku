import {NavLink} from "react-router-dom";

function Tab() {

    let activeStyle = {
        textDecoration: "underline",
    };

    let inactiveStyle = {
        textDecoration: "none",
    };

    return (
        <>
            <nav>
                <ul className={"tabbar"}>
                    <li className={"tab"}>
                        <NavLink
                            to={"/"}
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={"tab"}>
                        <NavLink
                            to={"/projects"}
                            style={({ isActive }) =>
                                isActive ? activeStyle : inactiveStyle
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Tab;