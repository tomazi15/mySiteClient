import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class ContactForm extends Component {
    constructor () {
        super();

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit (e) {
        // console.log('SUBMIT');
        e.preventDefault();
        const { name, email, message } = this.state;
        const form = await axios.post('/api/form', {
            name, email, message
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor='name'>Name: </Form.Label>
                                <Form.Control 
                                    type='text'
                                    name='name'
                                    onChange={this.handleChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='email'>Email: </Form.Label>
                                <Form.Control  
                                    type='email'
                                    name='email'
                                    onChange={this.handleChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='message'>Message: </Form.Label>
                                <Form.Control  
                                    type='textarea'
                                    name='message'
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ContactForm;