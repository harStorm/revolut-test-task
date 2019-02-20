import React from 'react';
import { shallow } from 'enzyme';
import ChooseCurrency from './ChooseCurrency';

let wrapper;
const props = {
    items: [
        {
            flag: "red",
            name: "PLN",
            simbol: "zł",
            value: 1,
        },
        {
            flag: "green",
            name: "USD",
            simbol: "$",
            value: 0.2605485962,
        },
        {
            flag: "blue",
            name: "EUR",
            simbol: "€",
            value: 0.2306964727,
        }
    ],
    getCurrencyBalance: () => {},
}

describe('<ChooseCurrency />', () => {
    beforeEach(() => {
        wrapper = shallow(<ChooseCurrency {...props} />);
        
    })
    it('renders ChooseCurrency component', () => {
        expect(wrapper.find('.currency__choose--wrapper').length).toEqual(1);
    });
    it('renders list of currencies', () => {
        expect(wrapper.render().find('.currency__choose-item').length).toEqual(3);
    });
});
