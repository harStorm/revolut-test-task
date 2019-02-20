//@flow
import React from 'react';

type CurrencyTypeProps = {
    changeCurrencyType: Function,
    currencyName: string,
}

const CurrencyType = ({currencyName, changeCurrencyType}: CurrencyTypeProps) => (
    <div className="currency__name" onClick={changeCurrencyType}>
        {currencyName}
        <span className="currency__name-icon"></span>
    </div>
);

export default CurrencyType;