import React from 'react';
import { shallow } from 'enzyme';
import Currency from './currency';

describe('<Currency />', () => {
    it('renders Currency component', () => {
        const currency = shallow(<Currency />);
        
        expect(currency.find('.currency').length).toEqual(1);
    });
    it('renders Currency component with not enough balance', () => {
        const isInputSimbol = true;
        const currency = shallow(<Currency isInputSimbol={isInputSimbol} />);

        expect(currency.find('.currency__input-simbol').length).toEqual(1);
    });
});
