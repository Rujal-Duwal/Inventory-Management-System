import {createSelector} from 'reselect'

const extractPosSalesList = ({posSales}) => posSales.posSalesList
const extractPosSalesItem = ({posSales}) => posSales.posSalesItem

export const posSalesListSelector = createSelector(
    [extractPosSalesList],
    (extractPosSalesList) => extractPosSalesList
)

export const posSalesItemSelector = createSelector(
    [extractPosSalesItem],
    (extractPosSalesItem) => extractPosSalesItem
)
