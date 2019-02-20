import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { CurrencyContainer } from './CurrencyContainer';

let wrapper;
const props = {
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
    userBalance: {
        isLoaded: true,
        items: {
            EUR: 121,
            PLN: 10,
            USD: 0,
        }
    },
    updateBalance: jest.fn(),
}

describe('<CurrencyContainer />', () => {    
    beforeEach(() => {
        wrapper = shallow(<CurrencyContainer {...props} />);
        
    })
    it('renders CurrencyContainer component', () => {
        expect(wrapper.find('Currency').exists()).toBeTruthy();
    });
    it('update component with new props', () => {
        const spy = sinon.spy(CurrencyContainer.prototype, 'componentDidUpdate');
        wrapper.setState({ baseCurrency: '1' });
        wrapper.setProps({
            receiveCurrency: {
                flag: "blue",
                name: "EUR",
                simbol: "$",
                value: 2,
            }
        });

        expect(spy.calledOnce);
        expect(wrapper.state('receiveCurrency')).toEqual("2.00");
    });
    it('correct baseCurrency input value', () => {
        const event = {
            currentTarget: {
                name: 'baseCurrency',
                value: '123',
            }
        }

        expect(wrapper.state('baseCurrency')).toEqual("");
        wrapper.instance().exchangeCurrencyHandle(event);
        expect(wrapper.state('baseCurrency')).toEqual("123");
    });
    it('incorrect baseCurrency input value', () => {
        const event = {
            currentTarget: {
                name: 'baseCurrency',
                value: 'w',
            }
        }

        expect(wrapper.state('baseCurrency')).toEqual("");
        wrapper.instance().exchangeCurrencyHandle(event);
        expect(wrapper.state('baseCurrency')).toEqual("");
    });
    it('correct receiveCurrency input value', () => {
        const event = {
            currentTarget: {
                name: 'receiveCurrency',
                value: '123',
            }
        }

        expect(wrapper.state('receiveCurrency')).toEqual("");
        wrapper.instance().exchangeCurrencyHandle(event);
        expect(wrapper.state('receiveCurrency')).toEqual("123");
    });
    it('incorrect receiveCurrency input value', () => {
        const event = {
            currentTarget: {
                name: 'receiveCurrency',
                value: 'w',
            }
        }

        expect(wrapper.state('receiveCurrency')).toEqual("");
        wrapper.instance().exchangeCurrencyHandle(event);
        expect(wrapper.state('receiveCurrency')).toEqual("");
    });
    it('submit handle', () => {
        const spy = sinon.spy(props, 'updateBalance');
        const event = {
            preventDefault: () => {}
        }

        wrapper.setState({ 
            baseCurrency: '1',
            receiveCurrency: '2',
        });

        wrapper.instance().handleSubmit(event);
        expect(spy.calledWith({
            baseCurrency: 9,
            receiveCurrency: 2,
        }));
    });
    
});
