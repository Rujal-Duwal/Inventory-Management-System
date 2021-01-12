import { GET_PRODUCTS,ADD_PRODUCT } from './products.types';
import axios from 'axios'

export const getProducts = () => (dispatch) => {
    axios.get('/products').then((res) => {
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        })
    })
}
export const addProduct = (product) => (dispatch) => {
    axios.post('/products', product)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        })
}