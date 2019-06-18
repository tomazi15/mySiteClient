import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoMatch from './NoMatch';

configure({ adapter: new Adapter() });

describe('Does no match component render', () => {
    let noMatch = mount(<NoMatch />);

    it('', () => {
        expect(noMatch.find('p').text()).toEqual('No Match Page!!!!!!!')
    });
});
