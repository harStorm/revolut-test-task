import React from 'react';
import { shallow } from 'enzyme';
import RevertContainer from './RevertContainer';

describe('<RevertContainer />', () => {
    it('renders RevertContainer component', () => {
        const revertCurrencies = () => {};
        const wrapper = shallow(<RevertContainer revertCurrencies={revertCurrencies} />);
        
        expect(wrapper.find('Revert').exists()).toBeTruthy();
    });
});
