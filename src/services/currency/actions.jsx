//@flow
import {
    REQUEST_DATA,
    RECEIVE_DATA,
    GET_RECEIVE_CURRENCY,
    GET_BASE_CURRENCY,
    UPDATE_RECEIVE_CURRENCY,
    SET_RECEIVE_CURRENCY,
    SET_BASE_CURRENCY,
} from '../actions';

import {
    CURRENCIES_SIMBOLS,
    CURRENCIES_FLAGS,
} from '../constants';

export const requestData = () => ({
    type: REQUEST_DATA,
});

const receiveData = (data: Object) => ({
    type: RECEIVE_DATA,
    data,
});

export const updateReceiveCurrency = (value: Object) => ({
    type: UPDATE_RECEIVE_CURRENCY,
    value,
});

export const getReceiveCurrency = () => ({
    type: GET_RECEIVE_CURRENCY,
});

export const getBaseCurrency = () => ({
    type: GET_BASE_CURRENCY,
});

export const setReceiveCurrency = (value: Object) => ({
    type: SET_RECEIVE_CURRENCY,
    value,
});

export const setBaseCurrency = (value: Object) => ({
    type: SET_BASE_CURRENCY,
    value,
});

export const updateBaseCurrency = (newBase: string, receive: string) => (
    async (dispatch: Function) => {
        const { currenciesList } = await dispatch(fetchFX(newBase));
        dispatch(applyNewData(currenciesList, newBase, receive));
    }
);

export const revertCurrencies = (newBase: string, newReceive: string) => (
    async (dispatch: Function) => {
        const { currenciesList } = await dispatch(fetchFX(newBase));
        dispatch(applyNewData(currenciesList, newBase, newReceive));
    }
);

export const applyNewData = (
    currenciesList: Array<Object>,
    newBase: string,
    newReceive: string,
) => (
    (dispatch: Function) => {
        const baseCurrency = getCurrencyItem(currenciesList, newBase);
        const receiveCurrency = getCurrencyItem(currenciesList, newReceive);
        
        dispatch(setReceiveCurrency(receiveCurrency));
        dispatch(setBaseCurrency(baseCurrency));
        dispatch(receiveData(currenciesList));
    }
);

const getCurrencyItem = (currenciesList: Array<Object>, value: string) => 
    currenciesList.find(e => e.name === value);

export const fetchFX = (base: string) => (
    async () => {
        const promise = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
        const response = await promise.json();
        const { rates } = response;
                
        //Fix only for EUR because if set it like base currency array will be without EUR
        if(!rates.EUR) {
            rates.EUR = 1;
        }

        const currenciesList = Object.keys(rates).map<Object>((currency) => ({
            name: currency,
            simbol: CURRENCIES_SIMBOLS[currency] || 0,
            flag: CURRENCIES_FLAGS[currency] || 'black',
            value: rates[currency]
        }));

        return {
            currenciesList,
        }
    }
);