import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CommonForm } from './commponForm';

configure({ adapter: new Adapter() });

describe ('Does CommonForm Component Render', () => {
    const form = mount(<CommonForm />)

    it ('It contains form group element', () => {
        expect(form.find('FormGroup').exists()).toBe(true);
    })
})