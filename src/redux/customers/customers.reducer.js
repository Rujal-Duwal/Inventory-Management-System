import { GET_CUSTOMERS } from './customers.types'

const INITIAL_STATE = {
    customers: []
};

const CustomersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
            }
        default:
            return state;
    }
}

export default CustomersReducer