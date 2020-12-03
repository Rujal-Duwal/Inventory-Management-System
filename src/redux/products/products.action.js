import { GET_PRODUCTS } from './products.types';
import axios from 'axios'

export const getProducts = () => (dispatch) => {
    axios.get('/products').then((res) => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        })
    })
}
