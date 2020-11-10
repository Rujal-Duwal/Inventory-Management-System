import { createSelector } from 'reselect'

const users = state => state.users;

export const usersSelector = createSelector(
    [users],
    (users) => users.users
)


