//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import Exchange from './Exchange';
import { 
    getCurrentValueForCurrency,
    getCurrentCurrencyName,
    getReceiveCurrencyName,
} from '../../services/currency/selectors';
import {
    initAPI,
} from '../../services/api/actions';
import {
    updateBaseCurrency,
    setBaseCurrency,
    setReceiveCurrency,
} from '../../services/currency/actions';

const mapDispatchToProps = (dispatch) => ({
    initAPI: () => dispatch(initAPI()),
    updateBaseCurrency: (base, receive) => dispatch(updateBaseCurrency(base, receive)),
    setReceiveCurrency: (value) => dispatch(setReceiveCurrency(value)),
    setBaseCurrency: (value) => dispatch(setBaseCurrency(value)),
})

const mapStateToProps = (state) => ({
    receiveCurrency: getReceiveCurrencyName(state),
    baseCurrency: getCurrentCurrencyName(state),
    currency: getCurrentValueForCurrency(state),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Exchange);