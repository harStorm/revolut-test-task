import React from 'react';
import { shallow } from 'enzyme';
import Revert from './Revert';

describe('<Revert />', () => {
    it('renders Revert component', () => {
        const wrapper = shallow(<Revert />);
        
        expect(wrapper.find('.currency__revert').length).toEqual(1);
    });
});
