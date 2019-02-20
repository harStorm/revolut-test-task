//@flow
import {
    REQUEST_BALANCE,
    RECEIVE_BALANCE,
    UPDATE_BALANCE,
} from '../actions';

import {
    USER_BALANCE_LIST,
} from '../constants';

const requestBalance = () => ({
    type: REQUEST_BALANCE,
});

const receiveBalance = (data) => ({
    type: RECEIVE_BALANCE,
    data,
});

export const updateBalance = (value: Array<Object>) => ({
    type: UPDATE_BALANCE,
    value,
});

export const getUserBalance = () => (
    (dispatch: Function) => {
        dispatch(requestBalance());
        const promise = new Promise((resolve: Function) => {
            resolve(USER_BALANCE_LIST);
        });
        promise
            .then(
              result => dispatch(receiveBalance(result)),
              error => console.error('problems with balance server')
            );
    }
);

