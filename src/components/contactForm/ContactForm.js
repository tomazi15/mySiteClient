import React, { Component } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { CommonForm } from '../commonComponents/form/commponForm';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const Style = styled.div`
    background-color: #212121;
`;

const SubmitButton = styled(Button)`
    margin: 16px 0 32px 0;
`;

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
        console.log('SUBMIT');
        e.preventDefault();
        const { name, email, message } = this.state;
        const form = await axios.post('https://tomazi-website-be.herokuapp.com', {
            name, email, message
        });
        console.log('WDF', form);
    }

    render() {
        console.log('EVNET', this.state.name);
        return (
            <Style>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <CommonForm name='name' type='text' event={this.handleChange} />
                                <CommonForm name='email' type='eamil' event={this.handleChange} />
                                <CommonForm as='textarea' rows='4' name='message' type='message' event={this.handleChange} />
                                <SubmitButton type="submit">Submit</SubmitButton>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Style>
        );
    }
}
export default ContactForm;