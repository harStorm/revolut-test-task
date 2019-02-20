//@flow
import React from 'react';
import Input from '../Input';
import CurrencyType from './CurrencyType';
import CurrencyBalance from './CurrencyBalance';
//$FlowFixMe
import './currencies.scss';

type CurrencyProps = {
    currencyName: string,
    changeCurrencyType: Function,
    balanceName: string,
    balanceAmount: string,
    handleChange: Function,
    value: string,
    name: string,
    isInputSimbol: boolean,
    inputSimbolType: string,
    isNotEnoughBalance?: boolean,
}

const Currency = ({ 
    currencyName,
    changeCurrencyType,
    balanceName,
    balanceAmount,
    handleChange,
    value,
    name,
    isInputSimbol,
    inputSimbolType,
    isNotEnoughBalance,
}: CurrencyProps) => (
    <div className="currency">
        <CurrencyType
            currencyName={currencyName}
            changeCurrencyType={changeCurrencyType}
        />
        <CurrencyBalance
            balanceAmount={balanceAmount}
            balanceName={balanceName}
            isNotEnoughBalance={isNotEnoughBalance}
        />
        <div className="currency__input--wrapper">
            <div className="currency__input-value">
                {isInputSimbol && <span className="currency__input-simbol">{inputSimbolType}</span>}
                {value}
            </div>
            <Input
                onChange={handleChange}
                value={value}
                name={name}
            />
        </div>
    </div>
);

export default Currency;