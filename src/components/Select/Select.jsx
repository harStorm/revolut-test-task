//@flow
import React from 'react';

type SelectProps = {
    name: string,
    flag: string,
    balance: string,
    isSelectedCurrency: boolean,
    updateCurrency: Function,
}

const Select = ({
    name,
    flag,
    balance,
    isSelectedCurrency,
    updateCurrency
}: SelectProps) => (
    <div
        onClick={updateCurrency}
        className={`currency__choose-item ${isSelectedCurrency ? 'base' : ''}`}
    >
        <img src="" alt="" className={`currency__choose-icon ${flag}`}/>
        <span>{name}<em className="currency__choose-separator"/>{balance}</span>
    </div>
);

export default Select;