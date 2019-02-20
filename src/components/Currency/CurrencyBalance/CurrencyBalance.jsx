//@flow
import React from 'react';

type CurrencyBalanceProps = {
    isNotEnoughBalance?: boolean,
    balanceAmount: string,
    balanceName: string,
}

const CurrencyBalance = ({
    balanceAmount,
    balanceName,
    isNotEnoughBalance
}: CurrencyBalanceProps) => 
    <span className={`currency__balance ${isNotEnoughBalance ? 'red' : ''}`}>
        {`Balance: ${balanceAmount} ${balanceName}`}
    </span>;

export default CurrencyBalance;