import Tab from "./Header"
import Foot from "./Footer"
import {Outlet} from "react-router-dom"

function Page() {
    return (
        <>
            <Tab />
            <Outlet />
            <Foot />
        </>
    );
}

export default Page;