import { GET_USERS } from './users.types';
import axios from 'axios'

export const getUsers = () => (dispatch) => {
    axios.get('/users').then((res) => {
        dispatch({
            type: GET_USERS,
            payload: res.data,
        })
    })

}