import { GET_USERS } from './users.types'

const INITIAL_STATE = {
    users: []
};

const UsersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}

export default UsersReducer