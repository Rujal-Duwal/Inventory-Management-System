import { createSelector } from 'reselect'

const suppliers = state => state.suppliers;

export const suppliersSelector = createSelector(
    [suppliers],
    (suppliers) => suppliers.suppliers
)


