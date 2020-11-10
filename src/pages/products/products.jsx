import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import MuiDataTable from '../../components/muiDataTable/muiDataTable'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../redux/products/products.action'
import { productsSelector } from '../../redux/products/products.selectors'


const tableHeadings = ["Product Name", "Quantity", "Rate", "Amount", "Category", "MFD", "ExpD"]


export default function Products() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProducts()) }, [])
    const products = useSelector(productsSelector).map((product) => {
        const amount = product.rate * product.quantity
        return ({ ...product, amount })
    })
    console.log(products);
    return (
        <div className='suppliers'>
            <Button color='primary' variant="contained">Add Product</Button>
            <Button color='primary' variant="contained">Import</Button>
            <MuiDataTable tableHeadings={tableHeadings} tableData={products} />
        </div>
    )
}