import { ADD_PRODUCT_ITEM, REMOVE_ID } from './product-item.types'

const INITIAL_STATE = {
    productItems: []
};

const ProductItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_ITEM:
            return {
                ...state,
                productItems: action.payload,
            }
        case REMOVE_ID:
            console.log(action.payload)
            return {
                ...state,
                productItems: state.productItems.filter((items) => items.id !== action.payload),
            }
        default:
            return state;
    }
}

export default ProductItemsReducer