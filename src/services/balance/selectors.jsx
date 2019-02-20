//@flow
export const getUserBalance = (state: Object) => state.balances.balance;
export const getCurrencyBalance = (state: Object, value: string) => getUserBalance(state).items[value];