import { ADD_PRODUCT_ITEM } from './product-item.types';
import axios from 'axios'

export const addItem = () => (dispatch) => {
    axios.get('http://localhost:3004/product_items').then((res) => {
        dispatch({
            type: ADD_PRODUCT_ITEM,
            payload: res.data,
        })
    })

}