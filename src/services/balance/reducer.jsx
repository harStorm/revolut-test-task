//@flow
import {
    REQUEST_BALANCE,
    RECEIVE_BALANCE,
    UPDATE_BALANCE,
} from '../actions';

function fetching(
    state,
    action
) {
    switch (action.type) {
        case REQUEST_BALANCE:
            return {
                ...state,
                balance: {
                    isLoaded: false,
                    items: [],
                }
            }
        case RECEIVE_BALANCE:
            return {
                ...state,
                balance: {
                    isLoaded: true,
                    items: action.data,
                }
            }
        default:
            return state
    }
}

export function balances(state: Object = {}, action: Object) {
    switch (action.type) {
        case REQUEST_BALANCE:
        case RECEIVE_BALANCE:
            const balance = fetching(state, action);
            return {
                ...balance
            }
        case UPDATE_BALANCE:
            return {
                balance: {
                    ...state.balance,
                    items: {
                        ...state.balance.items,
                        ...action.value,
                    }
                }
            }
        default:
            return state
    }
}