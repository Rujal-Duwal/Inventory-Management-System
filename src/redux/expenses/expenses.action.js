import { ADD_EXPENSES, REMOVE_EXPENSES } from './expenses.types';
import axios from 'axios'

export const addexpenses = () => (dispatch) => {
    console.log("yes");
    axios.get('/expenses').then((res) => {
        dispatch({
            type: ADD_EXPENSES,
            payload: res.data,
        })
    })
}

export const removeexpenses = (id) => (dispatch) => {
    axios.delete(`/expenses/${id}`).then((_) => {
        dispatch({
            type: REMOVE_EXPENSES,
            payload: id,
        })
    })
}