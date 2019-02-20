import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
    it('renders button component', () => {
        const button = shallow(<Button />);
        expect(button.find('.currency__button').length).toEqual(1);
    });
    it('renders button component with active class', () => {
        const isActive = true;
        const button = shallow(<Button isActive={isActive} />);
        expect(button.find('.currency__button').hasClass('active')).toEqual(true);
    });
});
