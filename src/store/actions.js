import * as actionTypes from './actionTypes';

export const setCart = data => ({
    type: actionTypes.SET_CART,
    payload: data
})
export const setKeyword = data => ({
    type: actionTypes.SET_KEYWORD,
    payload: data
})
export const setSort = data => ({
    type: actionTypes.SET_SORT,
    payload: data
})
export const setProductData = data => ({
    type: actionTypes.SET_PRODUCT_DATA,
    payload: data
})
export const setPage = data => ({
    type: actionTypes.SET_PAGE,
    payload: data
})
export const setBrand = data => ({
    type: actionTypes.SET_BRAND,
    payload: data
})
export const setColor = data => ({
    type: actionTypes.SET_COLOR,
    payload: data
})