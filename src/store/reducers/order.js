import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHARSE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                purchased: true
            };
        case actionTypes.PURCHARSE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.PURCHARSE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                error: true
            }
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: false
            }
        case actionTypes.CLEAR_ORDERS:
            return {
                ...state,
                orders: []
            }
        default: 
            return state;
    }
}

export default reducer;