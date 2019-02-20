import React from 'react';
import { shallow } from 'enzyme';
import Rate from './Rate';

describe('<Rate />', () => {
    it('renders Rate component', () => {
        const wrapper = shallow(<Rate />);
        
        expect(wrapper.find('.currency__rate').length).toEqual(1);
    });
});
