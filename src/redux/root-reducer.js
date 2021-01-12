import { combineReducers } from 'redux'

import ExpensesReducer from './expenses/expenses.reducer'
import ProductItemsReducer from './prooduct_item/product-item.reducer'
import SuppliersReducer from './suppliers/suppliers.reducer'
import UsersReducer from './users/users.reducer'
import CustomersReducer from './customers/customers.reducer'
import ProductsReducer from './products/products.reducer'
import PosSales from "./pos/pos.reducer";


export default combineReducers({
    productItems: ProductItemsReducer,
    expenses: ExpensesReducer,
    suppliers: SuppliersReducer,
    users: UsersReducer,
    customers: CustomersReducer,
    products: ProductsReducer,
    posSales:PosSales
})