import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import{
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
// import {connect} from 'react-redux';
// import {getItems, deleteItem} from '../actions/itemActions';
// import PropTypes from 'prop-types';
import {v1 as uuid} from 'uuid';

class BloodDonate extends Component{
    state = {
        items: [
            { id: uuid(), name:'Ravi'},
            { id: uuid(), name:'Ekta'},
            { id: uuid(), name:'Sudip'},
            { id: uuid(), name:'Priya'}
        ]
    }

    toggle = () => {
        this.setState ({
            modal:!this.state.modal
        });
    }

    // onSubmit = e => {
    //     e.preventDefault();

    //     const newItem = {
    //         id:uuid(),
    //         name: this.state.name
    //     }
    //     this.props.addItem(newItem);
    //     this.toggle();
    // }

    /*
    {()=> {
                        const name = prompt ('Enter Name');
                        if(name) {
                            this.setState(state => ({
                                items : [...state.items,{id:uuid(),name}]
                            }));
                        }
                    }}
    */

    render() {
        
        const { items } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={this.toggle}
                >
                    Donate Blood
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>
                    Add your name to donate blood
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={()=>{
                        alert('Donar is Added successfully.');
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
                            <Label for="item">BloodType</Label>
                            <Input
                            type="text"
                            name="BloodType"
                            id="item"
                            placeholder="Enter Your BloodType"
                            onChange={this.onChange}
                            ></Input>
                            <Button 
                            color="dark" 
                            style={{marginTop:'2rem'}}
                            block
                            >
                                Add Name
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
                <ListGroup>
                    <TransitionGroup className="BloodDonate">
                        {
                            items.map(({id,name}) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={() => {
                                                this.setState(state => ({
                                                    items: state.items.filter(item => item.id !==id)
                                                }));
                                            }}
                                        >
                                            &times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}


export default BloodDonate;