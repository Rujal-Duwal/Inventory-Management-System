import { GET_SUPPLIERS, REMOVE_ID, ADD_SUPPLIERS } from './suppliers.types';
import axios from 'axios'

export const getSuppliers = () => (dispatch) => {
    axios
        .get('/suppliers')
        .then((res) => {
            dispatch({
                type: GET_SUPPLIERS,
                payload: res.data,
            })
        })
}

export const addSuppliers = (supplier) => (dispatch) => {
    axios.post('/suppliers', supplier)
        .then(res => {
            dispatch({
                type: ADD_SUPPLIERS,
                payload: res.data
            })
        })
}

export const removeItem = (id) => (dispatch) => {
    axios
        .delete(`/product_items/${id}`)
        .then((_) => {
            dispatch({
                type: REMOVE_ID,
                payload: id,
            })
        })

}