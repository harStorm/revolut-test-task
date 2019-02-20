//@flow
import React, { Component } from 'react';
import CurrencyContainer from '../../container/CurrencyContainer';
import ChooseCurrency from '../../container/ChooseCurrency';
import RevertContainer from '../../container/RevertContainer';
import Rate from '../../components/Rate';
import { TIMEOUT } from '../../services/constants';

type ExchangeProps = {
  receiveCurrency: Object,
  baseCurrency: Object,
  currency: Object,
  initAPI: Function,
  updateBaseCurrency: Function,
  setReceiveCurrency: Function,
  setBaseCurrency: Function,
}

type ExchangeState = {
  isChooseCurrency: boolean,
  currencyType: string,
  interval: any,
}

class Exchange extends Component<ExchangeProps, ExchangeState> {
  constructor(props: ExchangeProps) {
    super(props);

    this.state = {
      isChooseCurrency: false,
      currencyType: '',
      interval: '',
    }
  }
  
  componentDidMount() {
    const {
      initAPI,
      updateBaseCurrency,
    } = this.props;

    initAPI();
    const interval = setInterval(() => {
      const {
        baseCurrency,
        receiveCurrency,
      } = this.props;

      updateBaseCurrency(baseCurrency.name, receiveCurrency.name);
      //Just for showing requests ^_^
      console.warn('get new data');
      
    }, TIMEOUT);
    this.setState(() => ({
      interval,
    }));
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  changeCurrencyType = (inputName: string) => {
    this.setState({
      isChooseCurrency: true,
      currencyType: inputName,
    });
  }

  hideChooseCurrency = () => {
    this.setState({
      isChooseCurrency: false,
    });
  }

  render() {
    const {
      receiveCurrency,
      baseCurrency,
      currency,
    } = this.props;
    const {
      isChooseCurrency,
      currencyType,
    } = this.state;

    return currency.isLoaded ? (
      <form id="exchangeForm">
          <CurrencyContainer
            currency={currency}
            changeCurrencyType={this.changeCurrencyType}
          />
          <Rate
            buySimbol={receiveCurrency.simbol}
            saleSimbol={baseCurrency.simbol}
            value={receiveCurrency.value.toFixed(4)}
          />
          <RevertContainer
            baseName={baseCurrency.name}
            receiveName={receiveCurrency.name}
          />
          {isChooseCurrency && 
            <ChooseCurrency
              currencyType={currencyType}
              selectedCurrencyName={this.props[currencyType].name}
              items={currency.items}
              hideChooseCurrency={this.hideChooseCurrency}
            />
          }
      </form>
    ) : (
      <div>Loading</div>
    )
  }
}

export default Exchange;