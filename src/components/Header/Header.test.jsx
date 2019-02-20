import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('renders Header component', () => {
        const header = shallow(<Header />);
        
        expect(header.find('.header').length).toEqual(1);
    });
});
