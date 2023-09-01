import style from "./index.module.css";
import project1 from "../image/project1.jpg";
import project2 from "../image/project2.jpg";
import project3 from "../image/project3.jpg";
import project4 from "../image/project4.jpg";
import project5 from "../image/project5.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProjectRoute = () => {
    return (
        <section id="project" className={style.projectStyle}>
        <Container >
           <Row >
               <Col><h2>Project</h2></Col>
           </Row>

           <Row className="mt-4 justify-content-center fs-6 text-center">
               <Col md={4} className="mb-3"> 
                   <Card>
                       <Card.Img variant="top" src={project1} alt="project1" height="200px" />
                       <Card.Body>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                       </Card.Body>
                    </Card>
               </Col>
               <Col md={4} className="mb-3"> 
                   <Card>
                       <Card.Img variant="top" src={project2} alt="project1" height="200px"/>
                       <Card.Body>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                       </Card.Body>
                    </Card>
               </Col>
               <Col md={4} className="mb-3"> 
                   <Card>
                       <Card.Img variant="top" src={project3} alt="project3" height="200px"/>
                       <Card.Body>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                       </Card.Body>
                    </Card>
               </Col>
               <Col md={4} className="mb-3"> 
                   <Card>
                       <Card.Img variant="top" src={project4} alt="project3" height="200px"/>
                       <Card.Body>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                       </Card.Body>
                    </Card>
               </Col>
               <Col md={4} className="mb-3"> 
                   <Card>
                       <Card.Img variant="top" src={project5} alt="project3" height="200px"/>
                       <Card.Body>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                       </Card.Body>
                    </Card>
               </Col>
            
           </Row>
       </Container>
   </section>
    )
}

export default ProjectRoute;