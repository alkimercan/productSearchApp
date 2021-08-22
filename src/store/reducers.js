import * as actionTypes from './actionTypes';
const initialState = {
    cart: [],
    products: [],
    keyword: '',
    sort: 0,
    selectedPage: 1,
    brand: '',
    color: '',
};
const setCart = (state, action) => ({
    ...state,
    cart: action.payload
})
const setKeyword = (state, action) => ({
    ...state,
    keyword: action.payload
})
const setSort = (state, action) => ({
    ...state,
    sort: action.payload
})
const setBrand = (state, action) => ({
    ...state,
    brand: action.payload
})
const setColor = (state, action) => ({
    ...state,
    color: action.payload
})
const setProductData = (state, action) => ({
    ...state,
    products: action.payload
})
const setPage = (state, action) => ({
    ...state,
    selectedPage: action.payload
})
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CART:
            return setCart(state, action);
        case actionTypes.SET_KEYWORD:
            return setKeyword(state, action);
        case actionTypes.SET_SORT:
            return setSort(state, action);
        case actionTypes.SET_BRAND:
            return setBrand(state, action);
        case actionTypes.SET_COLOR:
            return setColor(state, action);
        case actionTypes.SET_PRODUCT_DATA:
            return setProductData(state, action);
        case actionTypes.SET_PAGE:
            return setPage(state, action);
        default:
            return state;
    }
};
export default reducer;