import React from 'react';
import { shallow } from 'enzyme';
import CurrencyBalance from './CurrencyBalance';

describe('<CurrencyBalance />', () => {
    it('renders CurrencyBalance component', () => {
        const currencyBalance = shallow(<CurrencyBalance />);
        expect(currencyBalance.find('.currency__balance').length).toEqual(1);
    });
    it('renders CurrencyBalance component with not enough balance', () => {
        const isNotEnoughBalance = true;
        const currencyBalance = shallow(<CurrencyBalance isNotEnoughBalance={isNotEnoughBalance} />);
        expect(currencyBalance.find('.currency__balance').hasClass('red')).toEqual(true);
    });
});
