import style from "./index.module.css";
import foto from "../image/foto2.jpg";
import { Image } from "react-bootstrap";
import NavbarRoute from "./NavbarRoute";
import FooterRoute from "./FooterRoute";
import { Outlet } from "react-router-dom";

const HomeRoute = () => {
    return(
        <div>
        <NavbarRoute />
        <section id="home" className={`${style.jumbotron}`}>
                <Image src={foto} alt="Andri Suryono" width="200" roundedCircle thumbnail/>
                <h1 className="display-4">Andri Suryono</h1>
                <p className="lead"><u>FULL STACK | WEB DEVELOPER</u></p>
        </section>
        <Outlet />
        <FooterRoute />
        </div>
    )
}

export default HomeRoute;