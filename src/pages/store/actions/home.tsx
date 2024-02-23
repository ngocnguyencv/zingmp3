import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import actionTypes from '../actions/actionType';
import * as apis from '../../../api';

interface HomeData {
    err: number;
    data: {
        items: any[];
    };
}

export const getHome = () => async (dispatch: Dispatch<any>) => {
    try {
        const response = await apis.getHome() as AxiosResponse<HomeData>;
        if (response?.data?.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: response.data.data.items,
            });
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null,
        });
    }
};