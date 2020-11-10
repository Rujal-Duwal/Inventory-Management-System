import { GET_PRODUCTS } from './products.types'

const INITIAL_STATE = {
    products: []
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }

        default:
            return state;
    }
}

export default ProductsReducer