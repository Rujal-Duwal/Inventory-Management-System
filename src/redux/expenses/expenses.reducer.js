import { GET_EXPENSES, REMOVE_EXPENSES } from './expenses.types'

const INITIAL_STATE = {
    expenses: []
};

const ExpensesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_EXPENSES:
            return {
                ...state,
                expenses: action.payload,
            }
        case REMOVE_EXPENSES:
            console.log(action.payload)
            return {
                ...state,
                expenses: state.expenses.filter((items) => items.id !== action.payload),
            }
        default:
            return state;
    }
}

export default ExpensesReducer