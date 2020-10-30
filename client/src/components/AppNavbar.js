import React, {Component} from 'react';

import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggle2 = () => {
        this.setState ({
            modal:!this.state.modal
        });
    }

    toggle3 = () => {
        this.setState ({
            modal2:!this.state.modal2
        });
    }

    toggle4 = () => {
        this.setState ({
            modal3:!this.state.modal3
        });
    }

    toggle5 = () => {
        this.setState ({
            modal4:!this.state.modal4
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Blood Bank
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <Button
                            color="dark"
                            onClick={this.toggle4}
                            >
                            Register
                            </Button>
                            <Modal
                            isOpen={this.state.modal3}
                            toggle={this.toggle4}
                            >
                            <ModalHeader toggle={this.toggle4}>
                                Register For Blood Donation
                            </ModalHeader>
                            <ModalBody>
                                <Form onSubmit={()=>{
                                    alert('Registered successfully.');
                                }}>
                                <FormGroup>
                                    <Label for="item">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="item"
                                        placeholder="Enter Your Name"
                                        onChange={this.onChange}
                                    ></Input>
                                    <Label for="item">Email</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="item"
                                        placeholder="Enter Your Email"
                                        onChange={this.onChange}
                                    ></Input>
                                    <Label for="item">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="item"
                                        placeholder="Enter Your Password"
                                        onChange={this.onChange}
                                    ></Input>
                                    <Label for="item">Contact</Label>
                                    <Input
                                        type="text"
                                        name="Contact"
                                        id="item"
                                        placeholder="Enter Your Name"
                                        onChange={this.onChange}
                                    ></Input>
                                    <Button 
                                    color="dark" 
                                    style={{marginTop:'2rem'}}
                                    block
                                    >
                                Register
                            </Button>
                            </FormGroup>
                            </Form>
                            </ModalBody>
                            </Modal>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <Button
                                color="dark"
                                onClick={this.toggle2}
                                >
                                About
                                </Button>
                                <Modal
                                isOpen={this.state.modal}
                                toggle={this.toggle2}
                                >
                                <ModalHeader toggle={this.toggle2}>
                                    About This Website
                                </ModalHeader>
                                <ModalBody>
                                Life-line blood bank is managed by not-for-profit organisation "Navjeevan Sanstha" which operates blood banks in north, south, east and west zones of Jalandhar City respectively. The blood banks have world class infrastructure for blood storage. Blood requirement to donation is managed online. Regular blood donation camps are also.organised from time to time. 
                                    
                                </ModalBody>
                                </Modal>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <Button
                                color="dark"
                                onClick={this.toggle3}
                                >
                                Contact
                                </Button>
                                <Modal
                                isOpen={this.state.modal2}
                                toggle={this.toggle3}
                                >
                                <ModalHeader toggle={this.toggle3}>
                                    Contact
                                </ModalHeader>
                                <ModalBody>
                                    Email: rvnarwal13@gmail.com  <br />
                                    Email: mba.sagar1@gmail.com
                                </ModalBody>
                                </Modal>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <Button
                                color="dark"
                                onClick={this.toggle5}
                                id="logIN"
                                >
                                Login
                                </Button>
                                <Modal
                                isOpen={this.state.modal4}
                                toggle={this.toggle5}
                                >
                                <ModalHeader toggle={this.toggle5}>
                                    Login Details
                                </ModalHeader>
                                <ModalBody>
                                <Form onSubmit={()=>{
                                    const email = document.getElementById('email').value;
                                    const password = document.getElementById('password').value;
                                    if(email=='rvnawal13@gmail.com' && password=='ravi123') {
                                        document.getElementById('logIN').innerHTML='Logout';
                                    } else {
                                        alert('Invalid Email or Password');
                                    }
                                }}>
                                <FormGroup>
                                    <Label for="item">Email</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        onChange={this.onChange}
                                    ></Input>
                                    <Label for="item">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        onChange={this.onChange}
                                    ></Input>
                                    <Button 
                                    color="dark" 
                                    style={{marginTop:'2rem'}}
                                    block
                                    >
                                    Login
                                    </Button>
                                    </FormGroup>
                                </Form>
                                </ModalBody>
                                </Modal>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/rvnarwal13">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}



export default AppNavbar;