import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from './ContactForm';

configure({ adapter: new Adapter() });

describe ('Does ContactForm Component Render', () => {
    let form = mount(<ContactForm />);

    it ('Contact Form does Form exist', () => {
        expect(form.find('Form').exists()).toBe(true);
    });
    
});