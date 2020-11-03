import { createSelector } from 'reselect'

const expenses = state => state.expenses;

export const getexpensess = createSelector(
    [expenses],
    (expenses) => expenses.expenses
)


