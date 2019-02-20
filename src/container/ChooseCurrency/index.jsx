//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import ChooseCurrency from './ChooseCurrency';
import {
    getCurrentCurrencyName,
    getReceiveCurrencyName,
    getCurrency
} from '../../services/currency/selectors';
import { getCurrencyBalance } from '../../services/balance/selectors';
import {
    updateBaseCurrency,
    updateReceiveCurrency,
    revertCurrencies
} from '../../services/currency/actions';

const mapDispatchToProps = (dispatch) => ({
    updateBaseCurrency: (base, receive) => dispatch(updateBaseCurrency(base, receive)),
    updateReceiveCurrency: (value) => dispatch(updateReceiveCurrency(value)),
    revertCurrencies: (base, receive) => dispatch(revertCurrencies(base, receive)),
})

const mapStateToProps = (state) => ({
    baseCurrency: getCurrentCurrencyName(state),
    receiveCurrency: getReceiveCurrencyName(state),
    getCurrency: (value) => getCurrency(state, value),
    getCurrencyBalance: (value) => getCurrencyBalance(state, value),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ChooseCurrency);