import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as Validator from 'validatorjs';


const ShowErrors = ({errors}) => {
    return (
        <ul style={{ color: 'red' }}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Register extends React.Component{
    state = {
        nama: '',
        email: '',
        no_hp: '',
        password: '',
        kelas: '',
        errors: []
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {nama, email, no_hp, password, kelas} = this.state;
        
        let data = {nama, email, no_hp, password, kelas};
          
        let rules = {
            nama: 'required',
            email: 'required|email',
            no_hp: 'min:10|max:13|required',
            password: 'min:8|required',
            kelas: 'required'
        };
        
        let validation = new Validator(data, rules);
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('email'),
                ...validation.errors.get('no_hp'),
                ...validation.errors.get('password'),
                ...validation.errors.get('kelas'),
            ]
        }, () => {
            if(this.state.errors.length <= 0){
                alert(`
                Nama Lengkap: ${this.state.nama}
                Email: ${this.state.email}
                No Hp: ${this.state.no_hp}
                Password: ${this.state.password}
                Kelas: ${this.state.kelas}
                `);
                this.setState({
                    nama: '',
                    email: '',
                    no_hp: '',
                    password: '',
                    kelas: ''
                });
            }
        });

        
        
    }

    render(){
        return (
         
                 <Container >
                    <Row className="my-3">
                        <Col><h2 className="text-primary">FORM REGISTER</h2></Col>
                    </Row>
                   
                    <Row className="justify-content-center fs-6">
                        <Col md={8} className="mb-3 text-start">
                            {/* ini untuk memunculkan pesan error */}
                            {
                            this.state.errors && <ShowErrors errors={this.state.errors} />
                            }
                              {/* sampai sini untuk memunculkan pesan error */}
                              
                            <Form onSubmit={this.handleSubmit}>
                                
                                <Form.Group className="mb-3 text-start text-primary fw-bold" controlId="name">
                                    <Form.Label className="ms-1">Nama Lengkap</Form.Label>
                                    <Form.Control size="sm" type="text" name="nama" placeholder="Masukan Nama Lengkap"
                                     value={this.state.nama} onChange={e => this.setState({nama: e.target.value})}/>
                                </Form.Group>

                                <Form.Group className="mb-3 text-start text-primary fw-bold" controlId="email">
                                    <Form.Label className="ms-1">Email</Form.Label>
                                    <Form.Control size="sm" type="email" name="email" placeholder="Masukan Email" 
                                     value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
                                </Form.Group>

                                <Form.Group className="mb-3 text-start text-primary fw-bold" controlId="no_hp">
                                    <Form.Label className="ms-1">No Hp</Form.Label>
                                    <Form.Control size="sm" type="number" name="no_hp" placeholder="Masukan No HP"
                                     value={this.state.no_hp} onChange={e => this.setState({no_hp: e.target.value})}  />
                                </Form.Group>

                                <Form.Group className="mb-3 text-start text-primary fw-bold" controlId="password">
                                    <Form.Label className="ms-1">Buat Password</Form.Label>
                                    <Form.Control size="sm" type="password" name="password" placeholder="Buat Password" 
                                     value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                                </Form.Group>

                                <Form.Group className="mb-3 text-start text-primary fw-bold" controlId="kelas">
                                    <Form.Label className="ms-1">Pilih Kelas</Form.Label>
                                    <Form.Select size="sm" aria-label="Default select kelas" value={this.state.kelas}
                                     onChange={e => this.setState({kelas: e.target.value})}>
                                        <option value="" >-- Pilih Kelas --</option>
                                        <option value="Quality Assurance">Quality Assurance</option>
                                        <option value="Programer Laravel x Vue jS">Programer Laravel x Vue jS</option>
                                        <option value="Programer React JS x Node JS">Programer React JS x Node JS</option>
                                        <option value="Desaigner UI/UX">Desaigner UI/UX</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <div className="mb-3 ms-1 text-start">
                                    <Button variant="primary" type="submit">
                                        Kirim
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
   
        )
    }
}