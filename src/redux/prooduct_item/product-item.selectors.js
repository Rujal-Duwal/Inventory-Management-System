import { createSelector } from 'reselect'

const selectCart = state => state.productItems;

export const selectprodutcItems = createSelector(
    [selectCart],
    (productItems) => productItems.productItems
)
