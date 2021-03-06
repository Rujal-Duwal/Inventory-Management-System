import { ADD_PRODUCT_ITEM, REMOVE_ID } from './product-item.types';
import axios from 'axios'

export const addItem = () => (dispatch) => {
    axios.get('/product_items').then((res) => {
        dispatch({
            type: ADD_PRODUCT_ITEM,
            payload: res.data,
        })
    })

}

export const removeItem = (id) => (dispatch) => {
    axios.delete(`/product_items/${id}`).then((_) => {
        dispatch({
            type: REMOVE_ID,
            payload: id,
        })
    })

}