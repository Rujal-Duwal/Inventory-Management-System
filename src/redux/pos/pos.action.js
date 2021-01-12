import {ADD_POS_SALES_lIST, ADD_POS_SALES_ITEM} from "./pos.types";


export const addToPosSalesList=(item)=>(dispatch)=>{
    dispatch({
        type:ADD_POS_SALES_lIST,
        payload:item
    })
}

export const addToPosSalesItem=(item)=>(dispatch)=>{
    dispatch({
        type:ADD_POS_SALES_ITEM,
        payload:item
    })
}

