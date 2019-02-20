//@flow
import React, { Component } from 'react';
import Currency from '../../components/Currency';
import Button from '../../components/Button';

import {
    BASE_NAME,
    RECEIVE_NAME,
    OPPOSITE_CURRENCIES,
} from '../../services/constants';

type CurrencyContainerProps = {
    baseCurrency: Object,
    changeCurrencyType: Function,
    currency: Object,
    receiveCurrency: Object,
    updateBalance: Function,
    userBalance: Object,
    stopUpdateExchange: Function,
    isUpdateExchange: boolean,
}

type CurrencyContainerState = {
    baseCurrency: string,
    receiveCurrency: string,
    exchangeCurrencies: Array<Object>,
    isNotEnoughBalance: boolean,
}

export class CurrencyContainer extends Component<CurrencyContainerProps, CurrencyContainerState> {
    constructor(props: CurrencyContainerProps) {
        super(props);

        this.state = {
            baseCurrency: '',
            receiveCurrency: '',
            exchangeCurrencies: [],
            isNotEnoughBalance: false,
            isButtonAvailable: false,
        }
    }

    componentDidUpdate(prevProps: CurrencyContainerProps) {
        const {
            baseCurrency,
            receiveCurrency,
        } = this.props;

        if (prevProps.baseCurrency.name !== baseCurrency.name ||
            prevProps.receiveCurrency.name !== receiveCurrency.name) {

            if (this.state.baseCurrency !== '') {
                const newReceiveCurrency = (parseFloat(this.state.baseCurrency) * receiveCurrency.value).toFixed(2);
    
                this.setState({
                    receiveCurrency: newReceiveCurrency,
                })
            }
        }
    }

    static getDerivedStateFromProps(props: CurrencyContainerProps, state: CurrencyContainerState) {
        const {
            userBalance,
            baseCurrency,
        } = props;

        const {
            baseCurrency: stateBaseCurrency,
        } = state;

        const baseValue = parseFloat(stateBaseCurrency);
        const baseBalanceValue = userBalance.items[baseCurrency.name];
        const isButtonAvailable = stateBaseCurrency.length > 0 && stateBaseCurrency !== '.';

        return {
            isButtonAvailable,
            isNotEnoughBalance: baseValue > baseBalanceValue,
        }
    }

    exchangeCurrencyHandle = (event: SyntheticInputEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        this.exchangeCurrency(name, value);
    }

    exchangeCurrency = (name: string, value: string) => {
        const {
            receiveCurrency,
        } = this.props;

        const oppositeName = OPPOSITE_CURRENCIES[name];
        const validateValue = value.toString().replace(/[^0-9\\.]/, '');

        if (validateValue === '') {
            this.setState({
                [name]: '',
                [oppositeName]: '',
            });
    
            return false
        }

        if (/\.$/.test(validateValue)) {
            this.setState({
                [name]: validateValue,
                [oppositeName]: this.state[oppositeName],
            });
    
            return false
        }
        
        const exchangeRate = receiveCurrency.value;
        const oppositeValue = name === BASE_NAME ? 
                    parseFloat(validateValue) * exchangeRate :
                    parseFloat(validateValue) / exchangeRate;

        this.setState({
            [name]: validateValue,
            [oppositeName]: oppositeValue.toFixed(2),
        });
    }

    handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const {
            updateBalance,
            baseCurrency,
            receiveCurrency,
        } = this.props;
        const {
            baseCurrency: stateBaseCurrency,
            receiveCurrency: stateReceiveCurrency,
        } = this.state;

        const newBaseBalance = 
            parseFloat(this.getCurrencyBalance(baseCurrency.name)) - parseFloat(stateBaseCurrency);
        const newReceiveBalance = 
            parseFloat(this.getCurrencyBalance(receiveCurrency.name)) + parseFloat(stateReceiveCurrency);

        updateBalance({
            [baseCurrency.name]: newBaseBalance.toFixed(2),
            [receiveCurrency.name]: newReceiveBalance.toFixed(2),
        });

        this.setState({
            baseCurrency: '',
            receiveCurrency: '',
        });
    };

    getCurrencyBalance(value: string) {
        const { userBalance } = this.props;

        return userBalance.items[value]
    }

    render() {
        const {
            baseCurrency,
            receiveCurrency,
            changeCurrencyType,
        } = this.props;

        const {
            isNotEnoughBalance,
            isButtonAvailable,
        } = this.state;

        return (
            <div className="currency--wrapper">
                <Currency
                    currencyName={baseCurrency.name}
                    changeCurrencyType={() => changeCurrencyType(BASE_NAME)}
                    balanceName={baseCurrency.simbol}
                    balanceAmount={this.getCurrencyBalance(baseCurrency.name)}
                    handleChange={this.exchangeCurrencyHandle}
                    value={this.state.baseCurrency}
                    name={BASE_NAME}
                    isInputSimbol={!!this.state.baseCurrency.length}
                    inputSimbolType="-"
                    isNotEnoughBalance={isNotEnoughBalance}
                />
                <Currency
                    currencyName={receiveCurrency.name}
                    changeCurrencyType={() => changeCurrencyType(RECEIVE_NAME)}
                    balanceName={receiveCurrency.simbol}
                    balanceAmount={this.getCurrencyBalance(receiveCurrency.name)}
                    handleChange={this.exchangeCurrencyHandle}
                    value={this.state.receiveCurrency}
                    name={RECEIVE_NAME}
                    isInputSimbol={!!this.state.receiveCurrency.length}
                    inputSimbolType="+"
                />
                <Button
                  isActive={isButtonAvailable && !isNotEnoughBalance}
                  handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
