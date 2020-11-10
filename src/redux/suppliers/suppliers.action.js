import { GET_SUPPLIERS, REMOVE_ID } from './suppliers.types';
import axios from 'axios'

export const getSuppliers = () => (dispatch) => {
    axios.get('http://localhost:3004/suppliers').then((res) => {
        dispatch({
            type: GET_SUPPLIERS,
            payload: res.data,
        })
    })

}

export const removeItem = (id) => (dispatch) => {
    axios.delete(`http://localhost:3004/product_items/${id}`).then((_) => {
        dispatch({
            type: REMOVE_ID,
            payload: id,
        })
    })

}