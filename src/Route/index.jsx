import AboutRoute from "./AboutRoute";
import ContactRoute from "./ContactRoute";
import HomeRoute from "./HomeRoute";
import ProjectRoute from "./ProjectRoute";

const { BrowserRouter, Routes, Route } = require("react-router-dom")

const RouteTugas = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />}>
                <Route path="HomeRoute" ></Route>
                <Route path="AboutRoute" element={<AboutRoute />}></Route>
                <Route path="ProjectRoute" element={<ProjectRoute />}></Route>
                <Route path="ContactRoute" element={<ContactRoute />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default RouteTugas;