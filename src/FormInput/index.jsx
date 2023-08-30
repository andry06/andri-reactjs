import React from "react";
import Register from "./Register";
import NavbarCom from "./NavbarCom";

export default class FormInput extends React.Component {
    render(){
        return (
            <div>
                <NavbarCom />
                <Register />
            </div>
        )
    }
}