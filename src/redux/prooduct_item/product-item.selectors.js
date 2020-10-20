import { createSelector } from 'reselect'

const productItems = state => state.productItems;

export const getproductItems = createSelector(
    [productItems],
    (productItems) => productItems.productItems
)


