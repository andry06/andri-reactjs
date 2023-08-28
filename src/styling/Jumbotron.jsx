import React from "react";
import style from "./index.module.css";
import foto from "../image/foto2.jpg";
import { Image } from "react-bootstrap";

export default class Jumbotron extends React.Component {
    
    render(){
        return(
            <section id="home" className={`${style.jumbotron}`}>
                <Image src={foto} alt="Andri Suryono" width="200" roundedCircle thumbnail/>
                <h1 className="display-4">Andri Suryono</h1>
                <p className="lead"><u>FULL STACK | WEB DEVELOPER</u></p>
            
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L20,160C40,160,80,160,120,170.7C160,181,200,203,240,208C280,213,320,203,360,197.3C400,192,440,192,480,181.3C520,171,560,149,600,149.3C640,149,680,171,720,160C760,149,800,107,840,106.7C880,107,920,149,960,176C1000,203,1040,213,1080,186.7C1120,160,1160,96,1200,96C1240,96,1280,160,1320,165.3C1360,171,1400,117,1420,90.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
             
            </section>
        )
    }
}