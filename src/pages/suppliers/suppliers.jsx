import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getSuppliers } from '../../redux/suppliers/suppliers.action'
import { suppliersSelector } from '../../redux/suppliers/suppliers.selectors'
import { CollapsibleTable } from '../../components/table/table'
import './suppliers.styles.scss'


const tableHeadings = ["Supplier Name", "Catagory", "Contact Details", "Credit Amount", "Information"]


export default function Suppliers() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getSuppliers()) }, [])
    const suppliers = useSelector(suppliersSelector)

    return (
        <div className='suppliers'>
            <Button color='primary' variant="contained">Add Supplier</Button>
            <Button color='primary' variant="contained">Import</Button>
            <Typography variant='h5' color='primary'>Suppliers List</Typography>
            <CollapsibleTable tableHeadings={tableHeadings} tableData={suppliers} />
        </div>)
}