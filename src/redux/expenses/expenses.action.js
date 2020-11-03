import { ADD_EXPENSES, REMOVE_EXPENSES } from './expenses.types';
import axios from 'axios'

export const addexpenses = () => (dispatch) => {
    console.log("yes");
    axios.get('http://localhost:3004/expenses').then((res) => {
        dispatch({
            type: ADD_EXPENSES,
            payload: res.data,
        })
    })
}

export const removeexpenses = (id) => (dispatch) => {
    axios.delete(`http://localhost:3004/expenses/${id}`).then((_) => {
        dispatch({
            type: REMOVE_EXPENSES,
            payload: id,
        })
    })
}