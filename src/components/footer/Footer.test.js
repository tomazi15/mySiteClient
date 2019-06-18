import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Does Footer Component Render', () => {
    let footer = mount(<Footer />);

    it('Footer element exists', () => {
        expect(footer.find('footer')).toHaveLength(1);
    });
})