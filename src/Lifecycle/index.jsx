import React from "react";
import NavbarLifecycle from "./NavbarLifecycle";
import NewsApi from "./NewsApi";

export default class Lifecycle extends React.Component {
    render(){
        return(
            <div> 
                <NavbarLifecycle />
                <NewsApi />
            </div>
        )
    }
}