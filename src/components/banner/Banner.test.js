import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Banner } from './Banner';

configure({ adapter: new Adapter() });

describe('Does Banner Component Render', () => {
    let banner = shallow(<Banner />);

    it('Banners render carousel', () => {
        expect(banner.find('Bootstrap(undefined)').exists()).toBe(true);
    });
    it('Banners render carousel item', () => {
        expect(banner.find('CarouselItem').exists()).toBe(true);
    });
    it('Banners render carousel caption', () => {
        expect(banner.find('CarouselCaption').exists()).toBe(true);
    });
});