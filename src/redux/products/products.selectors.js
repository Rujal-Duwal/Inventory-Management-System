import { createSelector } from 'reselect'

const products = state => state.products;

export const productsSelector = createSelector(
    [products],
    (products) => products.products
)


