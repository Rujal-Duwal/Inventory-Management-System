import { createSelector } from 'reselect'

const customers = state => state.customers;

export const customersSelector = createSelector(
    [customers],
    (customers) => customers.customers
)