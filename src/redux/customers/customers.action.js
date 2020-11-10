import { GET_CUSTOMERS } from './customers.types';
import axios from 'axios'

export const getCustomers = () => (dispatch) => {
    axios.get('http://localhost:3004/customers').then((res) => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data,
        })
    })

}