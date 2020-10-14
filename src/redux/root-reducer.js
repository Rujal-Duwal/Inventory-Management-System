import { combineReducers } from 'redux'

import productItemsReducer from './prooduct_item/product-item.reducer'

export default combineReducers({
    productItems: productItemsReducer
})