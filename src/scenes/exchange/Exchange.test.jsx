import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Exchange from './Exchange';

const props = {
    currency: {
        isLoaded: true,
    },
    receiveCurrency: {
        flag: "blue",
        name: "USD",
        simbol: "$",
        value: 1,
    },
    baseCurrency: {
        flag: "red",
        name: "PLN",
        simbol: "zł",
        value: 1,
    },
    initAPI: jest.fn(),
    updateBaseCurrency: jest.fn(),
}

describe('<Exchange />', () => {
    it('renders Exchange screen', () => {
        const wrapper = shallow(<Exchange {...props} />);
        expect(wrapper.find('#exchangeForm').length).toEqual(1);
    });
    it('not renders Exchange screen', () => {
        const wrapper = shallow(<Exchange {...props} />);
        wrapper.setProps({
            currency: {
                isLoaded: false,
            },
        })

        expect(wrapper.find('#exchangeForm').length).toEqual(0);
    });
    it('call initAPI only once', () => {
        const spy = sinon.spy(props, 'initAPI');

        expect(spy.calledOnce);
    });
    it('call updateBaseCurrency with correnct params', () => {
        const spy = sinon.spy(props, 'updateBaseCurrency');

        expect(spy.calledWith('PLN', 'USD'));
    });
    it('check if we can open choose popup', () => {
        const wrapper = shallow(<Exchange {...props} />);
        const instance = wrapper.instance()

        expect(instance.state.isChooseCurrency).toEqual(false);
        instance.changeCurrencyType('baseCurrency');
        expect(instance.state.isChooseCurrency).toEqual(true);
    })
});
