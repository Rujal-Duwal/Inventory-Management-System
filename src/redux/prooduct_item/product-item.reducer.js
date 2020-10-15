import { ADD_PRODUCT_ITEM } from './product-item.types'

const INITIAL_STATE = {
    productItems: []
};

const ProductItemsReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_PRODUCT_ITEM:
            return {
                ...state,
                productItems: action.payload,
            }
        default:
            return state;
    }
}

export default ProductItemsReducer