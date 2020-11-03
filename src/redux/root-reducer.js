import { combineReducers } from 'redux'
import ExpensesReducer from './expenses/expenses.reducer'

import ProductItemsReducer from './prooduct_item/product-item.reducer'


export default combineReducers({
    productItems: ProductItemsReducer,
    expenses: ExpensesReducer
})