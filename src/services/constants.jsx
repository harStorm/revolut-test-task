//@flow
export const USER_BALANCE_LIST = {
    PLN: 10,
    USD: 0,
    EUR: 121,
};

export const CURRENCIES_SIMBOLS = {
    PLN: 'zł',
    USD: '$',
    EUR: '€',
}

export const CURRENCIES_FLAGS = {
    PLN: 'red',
    USD: 'green',
    EUR: 'blue',
}

export const DEFAULT_CURRENCIES = ['PLN', 'EUR', 'USD'];

export const DEFAULT_RECEIVE_CURRENCY = 'EUR';
export const DEFAULT_BASE_CURRENCY = 'PLN';

export const BASE_NAME = 'baseCurrency';
export const RECEIVE_NAME = 'receiveCurrency';
export const OPPOSITE_CURRENCIES = {
    [BASE_NAME]: RECEIVE_NAME,
    [RECEIVE_NAME]: BASE_NAME,
}
export const TIMEOUT = 10000;