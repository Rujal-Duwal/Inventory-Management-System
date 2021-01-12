import { GET_EXPENSES,ADD_EXPENSE, REMOVE_EXPENSES } from './expenses.types';
import axios from 'axios'

export const getExpenses = () => (dispatch) => {
    console.log("yes");
    axios.get('/expenses').then((res) => {
        dispatch({
            type: GET_EXPENSES,
            payload: res.data,
        })
    })
}

export const addExpense = (expense) => (dispatch) => {
    axios.post('/expenses', expense).then(res => {
        dispatch({
            type: ADD_EXPENSE,
            payload: res.data
        })
    })
}

export const removeExpenses = (id) => (dispatch) => {
    axios.delete(`/expenses/${id}`).then((_) => {
        dispatch({
            type: REMOVE_EXPENSES,
            payload: id,
        })
    })
}