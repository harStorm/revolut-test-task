import React from 'react';
import { shallow } from 'enzyme';
import CurrencyType from './CurrencyType';

describe('<CurrencyType />', () => {
    it('renders CurrencyType component', () => {
        const currencyType = shallow(<CurrencyType />);
        expect(currencyType.find('.currency__name').length).toEqual(1);
    });
    it('should lift click event up', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<CurrencyType changeCurrencyType={onClick} />);
    
        wrapper.find('.currency__name').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
