//@flow
import React from 'react';

type ButtonProps = {
    isActive: boolean,
    handleSubmit: Function,
}

const Button = ({
    isActive,
    handleSubmit,
}: ButtonProps) => (
    <button
        className={`currency__button ${isActive ? 'active' : ''}`}
        type="Submit"
        form="exchangeForm"
        onClick={handleSubmit}
    >
        Exchange
    </button>
)

export default Button;