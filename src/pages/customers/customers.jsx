import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import MuiDataTable from '../../components/muiDataTable/muiDataTable'
import { useSelector, useDispatch } from 'react-redux'

import { getCustomers } from '../../redux/customers/customers.action'
import { customersSelector } from '../../redux/customers/customers.selectors'


const tableHeadings = ["Name", "Category", "Contact Numbers", "Credit Amount", "Information"]


export default function Customers() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getCustomers()) }, [])
    const customers = useSelector(customersSelector)

    return (
        <div className='suppliers'>
            <Button color='primary' variant="contained">Add Customer</Button>
            <Button color='secondary' variant="contained">Import</Button>
            <MuiDataTable tableHeadings={tableHeadings} tableData={customers} />
        </div>
    )
}