//@flow
import {
    REQUEST_DATA,
    RECEIVE_DATA,
    GET_RECEIVE_CURRENCY,
    GET_BASE_CURRENCY,
    UPDATE_RECEIVE_CURRENCY,
    SET_BASE_CURRENCY,
    SET_RECEIVE_CURRENCY,
} from '../actions';

function fetching(
    state,
    action
) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
            ...state,
                currency: {
                    isLoaded: false,
                    items: [],
                }
            }
        case RECEIVE_DATA:
            return {
            ...state,
                currency : {
                    isLoaded: true,
                    items: action.data,
                }
            }
        default:
            return state
    }
}
  
export function currencies(state: Object = {}, action: Object) {
    switch (action.type) {
        case RECEIVE_DATA:
        case REQUEST_DATA:
            const currency = fetching(state, action)
            return {
                ...currency,
            }
        case SET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.value,
            }
        case GET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: state.baseCurrency,
            }
        case SET_RECEIVE_CURRENCY:
            return {
                ...state,
                receiveCurrency: action.value,
            }
        case GET_RECEIVE_CURRENCY:
            return {
                ...state,
                receiveCurrency: state.receiveCurrency,
            }
        case UPDATE_RECEIVE_CURRENCY:
            return {
                ...state,
                receiveCurrency: action.value,
            }
        default:
            return state
    }
}