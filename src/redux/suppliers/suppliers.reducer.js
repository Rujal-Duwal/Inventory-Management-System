import { GET_SUPPLIERS, REMOVE_ID } from './suppliers.types'

const INITIAL_STATE = {
    suppliers: []
};

const SuppliersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload,
            }
        case REMOVE_ID:
            console.log(action.payload)
            return {
                ...state,
                suppliers: state.suppliers.filter((items) => items.id !== action.payload),
            }
        default:
            return state;
    }
}

export default SuppliersReducer