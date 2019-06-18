import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from './Article';

configure({ adapter: new Adapter() });

const props = { title: 'My Title', text: 'My Text' }

describe ('Does Article Component Render', () => {
    
    let article = mount(<Article {...props} />);

    it('Article renders title' ,() => {
        expect(article.find('h1').text()).toEqual(props.title);
    });
    it('Article renders text' ,() => {
        expect(article.find('p').text()).toEqual(props.text);
    });
});