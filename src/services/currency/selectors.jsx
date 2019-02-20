export const getCurrentValueForCurrency = (state: Object) => ({
    ...state.currencies.currency
});

export const getCurrentCurrencyName = (state: Object) => state.currencies.baseCurrency;
export const getReceiveCurrencyName = (state: Object) => state.currencies.receiveCurrency;
export const getCurrency = (state: Object, currencyName: string) =>
    state.currencies.currency.items.find(item => item.name === currencyName);