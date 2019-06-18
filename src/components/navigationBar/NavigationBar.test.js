import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavigationBar } from './NavigationBar';

configure({ adapter: new Adapter() });

describe('Does NavigationBar Component Render', () => {
    let nav = mount(<NavigationBar />);

    it('Navigation renders Boostrap NavBar', () => {
        expect(nav.find('Bootstrap(undefined)')).toHaveLength(1);
    });
})