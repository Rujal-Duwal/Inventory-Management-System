import { ADD_PRODUCT_ITEM } from './product-item.types';
import items from '../../server/product-items'


export const addItem = () => (dispatch) => {
    console.log(ADD_PRODUCT_ITEM);
    dispatch({
        type: ADD_PRODUCT_ITEM,
        payload: items,
    })
}