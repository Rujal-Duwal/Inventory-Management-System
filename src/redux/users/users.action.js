import { GET_USERS,ADD_USER } from './users.types';
import axios from 'axios'

export const getUsers = () => (dispatch) => {
    axios.get('/users').then((res) => {
        dispatch({
            type: GET_USERS,
            payload: res.data,
        })
    })
}

export const addUser = (user) => (dispatch) => {
    console.log(user)
    axios.post('/users', user).then(res => {
        dispatch({
            type: ADD_USER,
            payload: res.data
        })
        console.log(res.data)
    }).catch(err=>console.log(err.response))
}