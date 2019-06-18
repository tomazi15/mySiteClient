import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';
import Article from '../../components/article/Article';

configure({ adapter: new Adapter() });

const props = { title:'About' };

describe('Does About Component Render', () => {
    const about = mount(<About />);

    it('Contact renders about component', () => {
        expect(about.find(Article)).toHaveLength(1);
    });

    it('Article renders title', () => {
        expect(about.find('h1').text()).toEqual(props.title);
    })

})