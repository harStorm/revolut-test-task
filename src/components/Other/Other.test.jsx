import React from 'react';
import { shallow } from 'enzyme';
import Other from './Other';

describe('<Other />', () => {
    it('renders Other component', () => {
        const wrapper = shallow(<Other />);
        
        expect(wrapper.find('.currency__choose-other').length).toEqual(1);
    });
});
