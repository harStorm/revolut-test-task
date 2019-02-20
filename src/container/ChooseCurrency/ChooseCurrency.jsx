//@flow
import React, { Component } from 'react';
import Select from '../../components/Select';
import Other from '../../components/Other';
import { OPPOSITE_CURRENCIES, DEFAULT_CURRENCIES, BASE_NAME } from '../../services/constants';

type ChooseCurrencyProps = {
    baseCurrency: Object,
    currencyType: string,
    getCurrency: Function,
    getCurrencyBalance: Function,
    hideChooseCurrency: Function,
    items: Array<Object>,
    receiveCurrency: Object,
    revertCurrencies: Function,
    updateBaseCurrency: Function,
    updateReceiveCurrency: Function,
    selectedCurrencyName: string,
}

class ChooseCurrency extends Component<ChooseCurrencyProps> {

    updateCurrency = (value: string) => {
        const {
            currencyType,
            receiveCurrency,
            revertCurrencies,
            hideChooseCurrency,
            getCurrency,
            updateBaseCurrency,
            updateReceiveCurrency,
        } = this.props;

        const oppositeCurrencyType = OPPOSITE_CURRENCIES[currencyType];

        if (this.props[oppositeCurrencyType].name === value) {
            const revertValue = this.getCorrectCurrencyType(currencyType, oppositeCurrencyType);

            revertCurrencies(...revertValue);
        } else {
            const newCurrency = getCurrency(value);

            if (currencyType === BASE_NAME) {
                updateBaseCurrency(newCurrency.name, receiveCurrency.name);
            } else {
                updateReceiveCurrency(newCurrency);
            }

        }
        hideChooseCurrency();
    }

    getCorrectCurrencyType(current: string, opposite: string) {
        const revertValue = [
            this.props[current].name,
            this.props[opposite].name,
        ]

        if (current === BASE_NAME) {
            revertValue.reverse();
        }

        return revertValue;
    }

    render() {
        const {
            items,
            getCurrencyBalance,
            hideChooseCurrency,
            selectedCurrencyName,
        } = this.props;

        return (
            <div className="currency__choose--wrapper">
                <div
                    onClick={hideChooseCurrency}
                    className="currency__choose-empty-space"
                />
                <div className="currency__choose">
                    <h2 className="currency__choose-title">Choose currency:</h2>
                    {items.map(({name, flag}) => {
                        if (DEFAULT_CURRENCIES.indexOf(name) >= 0) {
                            return (
                                <Select
                                    key={name}
                                    flag={flag}
                                    name={name}
                                    balance={getCurrencyBalance(name) || 0}
                                    isSelectedCurrency={selectedCurrencyName === name}
                                    updateCurrency={() => this.updateCurrency(name)}
                                />
                            );
                        }
                        return null;
                    })}
                    <Other />
                </div>
            </div>
        )
    }
}

export default ChooseCurrency;