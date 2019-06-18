import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import Article from '../../components/article/Article';
import Tile from '../../components/tile/Tile';

configure({ adapter: new Adapter() });

const props = { title: 'Home' };

describe('Does Home component render', () => {
    let home = mount(<Home />);

    it('Home renders Article component', () => {
        expect(home.find(Article)).toHaveLength(1);
    });

    it('Home renders Tile component', () => {
        expect(home.find(Tile)).toHaveLength(1);
    });

    it('Home renders Article Title component', () => {
        expect(home.find('h1').at(0).text()).toEqual(props.title);
    });
})