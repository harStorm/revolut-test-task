//@flow
import {
    DEFAULT_RECEIVE_CURRENCY,
    DEFAULT_BASE_CURRENCY,
} from '../constants';

import { getUserBalance } from '../balance/actions';
import { requestData, fetchFX, applyNewData } from '../currency/actions';

export const initAPI = () => (
    async (dispatch: Function) => {
        dispatch(requestData());
        dispatch(getUserBalance());
        const { currenciesList } = await dispatch(fetchFX(DEFAULT_BASE_CURRENCY));
        dispatch(applyNewData(currenciesList, DEFAULT_BASE_CURRENCY, DEFAULT_RECEIVE_CURRENCY));
    }
);
