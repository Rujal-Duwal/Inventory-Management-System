import { GET_USERS } from './users.types';
import axios from 'axios'

export const getUsers = () => (dispatch) => {
    axios.get('http://localhost:3004/users').then((res) => {
        dispatch({
            type: GET_USERS,
            payload: res.data,
        })
    })

}