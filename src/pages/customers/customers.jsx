import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import MuiDataTable from '../../components/muiDataTable/muiDataTable'
import { useSelector, useDispatch } from 'react-redux'

import { getCustomers } from '../../redux/customers/customers.action'
import { customersSelector } from '../../redux/customers/customers.selectors'


const tableHeadings = ["Name", "Category", "Contact Number", "Credit Amount", "Information"]


export default function Customers() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getCustomers()) }, [])
    const customers = useSelector(customersSelector)

    return (
        <div className='suppliers'>
            <MuiDataTable tableHeadings={tableHeadings} tableData={customers} />
        </div>
    )
}