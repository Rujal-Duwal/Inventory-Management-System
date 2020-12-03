import { GET_CUSTOMERS, ADD_CUSTOMER } from './customers.types';
import axios from 'axios'

export const getCustomers = () => (dispatch) => {
    axios.get('/customers').then((res) => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data,
        })
    })
}

export const addCustomer = (customer) => (dispatch) => {
    axios.post('/customers', customer).then(res => {
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data
        })
    })
}
