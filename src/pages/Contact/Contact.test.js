import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';
import Article from '../../components/article/Article';

configure({ adapter: new Adapter() });

describe('Does Contact Component Render', () => {
    let contact = mount(<Contact />);

    it('Contact renders article component', () => {
        expect(contact.find(Article)).toHaveLength(1);
    });
})