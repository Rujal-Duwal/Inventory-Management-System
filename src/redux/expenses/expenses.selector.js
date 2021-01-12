import { createSelector } from 'reselect'

const expenses = state => state.expenses;

export const getExpensess = createSelector(
    [expenses],
    (expenses) => expenses.expenses
)


