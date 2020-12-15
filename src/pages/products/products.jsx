import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import MuiDataTable from '../../components/muiDataTable/muiDataTable'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../redux/products/products.action'
import { productsSelector } from '../../redux/products/products.selectors'


const tableHeadings = ["Name", "Quantity", "Unit Price", "Amount", "Category", "MFD", "ExpD"]


/**
 *
 * @returns {*}
 * @constructor
 */
export default function Products() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProducts()) }, [])

    const products = useSelector(productsSelector).map((product) => {
        console.log(product)
        const amount = product.unitPrice * product.quantity
        return ({ ...product, amount })
    })

    return (
        <div className='suppliers'>
            <Button color='primary' href="add-products" variant="contained">Add Product</Button>
            <Button color='primary' variant="contained">Import</Button>
            <MuiDataTable tableHeadings={tableHeadings} tableData={products} />
        </div>
    )
}