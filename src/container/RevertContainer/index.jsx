//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import RevertContainer from './RevertContainer';
import { revertCurrencies } from '../../services/currency/actions';

const mapDispatchToProps = (dispatch) => ({
    revertCurrencies: (base, receive) => dispatch(revertCurrencies(base, receive)),
})

export default connect(null, mapDispatchToProps)(RevertContainer);