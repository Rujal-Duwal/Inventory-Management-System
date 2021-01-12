import {ADD_POS_SALES_ITEM, ADD_POS_SALES_lIST} from "./pos.types";

const INITIAL_STATE={
    posSalesList:[],
    posSalesItem:{
        name:"Name",
        rate:"",
        itemCode:"",
        quantity:""
    }
}

const PosSales =(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case ADD_POS_SALES_ITEM:
            return {
                ...state,
                posSalesItem: action.payload?action.payload:INITIAL_STATE.posSalesItem
            }
        case ADD_POS_SALES_lIST:
            return {
                ...state,
                posSalesList: [...state.posSalesList,action.payload]
            }
        default:
            return state
    }
}

export default PosSales