import { DELETE_FAVOURITE, GET_FAVOURITE } from '../constants/constants';

export const getFavourite = (data) => ({ type: GET_FAVOURITE, payload: data });
export const deleteFavourite = (data) => ({ type: DELETE_FAVOURITE, payload: data });
