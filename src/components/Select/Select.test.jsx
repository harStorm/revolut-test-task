import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
    it('renders Select component', () => {
        const wrapper = shallow(<Select />);

        expect(wrapper.find('.currency__choose-item').length).toEqual(1);
    });
    it('renders wrapper component with not enough balance', () => {
        const isSelectedCurrency = true;
        const wrapper = shallow(<Select isSelectedCurrency={isSelectedCurrency} />);

        expect(wrapper.find('.currency__choose-item').hasClass('base')).toEqual(true);
    });
    it('should lift click event up', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Select updateCurrency={onClick} />);
    
        wrapper.find('.currency__choose-item').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
