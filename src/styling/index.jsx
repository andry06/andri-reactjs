import React from "react"; 
import Navigasibar from "./Navigasibar";
import Jumbotron from "./Jumbotron";
import Aboutme from "./Aboutme";
import Projectme from "./Projectme";
import Contactme from "./Contactme";
import Footer from "./Footer";


export default class Styling extends React.Component {

    render(){
        return (
            <div>
                <Navigasibar title = "Andri Suryono" menu1 = "Home" menu2 = "About" menu3 = "Project" menu4 = "Contact" />
                <Jumbotron />
                <Aboutme />
                <Projectme />
                <Contactme />
                <Footer />
            </div>
        )
    }
}