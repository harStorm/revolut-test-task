//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import { CurrencyContainer } from './CurrencyContainer';
import { getCurrentCurrencyName, getReceiveCurrencyName } from '../../services/currency/selectors';
import { getUserBalance } from '../../services/balance/selectors';
import { updateBalance } from '../../services/balance/actions';

const mapDispatchToProps = (dispatch) => ({
    updateBalance: (value) => dispatch(updateBalance(value)),
})

const mapStateToProps = (state) => ({
    baseCurrency: getCurrentCurrencyName(state),
    receiveCurrency: getReceiveCurrencyName(state),
    userBalance: getUserBalance(state),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);