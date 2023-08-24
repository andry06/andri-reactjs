import React from "react";
import NavbarComponent from "./NavbarComponent";
import ClassComponent from "./ClassComponent";

export default class Component extends React.Component {

    render(){
        return(
            <div>
                <NavbarComponent title = "Eduwork" menu1 = "Home" menu2 = "Kelas" menu3 = "Hubungi Kami" menu4 = "Register"/>
                <ClassComponent />
            </div>
        )
    }
}