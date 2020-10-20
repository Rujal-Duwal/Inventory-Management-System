import React, { useEffect } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
import { createSelector } from 'reselect'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { addItem, removeItem } from '../../redux/prooduct_item/product-item.action'
import { getproductItems } from '../../redux/prooduct_item/product-item.selectors'

import './dense_Table.scss'

const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
    actionIcon: {
        color: 'green',

        '&:hover': {
            color: 'red'
        }
    }
});

const DenseTable = ({ setTotal, showproductDetail }) => {
    var subtotal = 0

    const dispatch = useDispatch()

    const productItems = useSelector(getproductItems)

    useEffect(() => { dispatch(addItem()) }, [])

    const rows = productItems && productItems.map(item => {
        const total_amount = item.quantity * item.unit_price;
        subtotal = total_amount + subtotal;
        return { ...item, total_amount: total_amount }
    })

    const classes = useStyles();

    setTotal(subtotal)
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Unit Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total AMount</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.map((row) => (
                            <TableRow key={row.name} onClick={() => showproductDetail(row)} hover>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.unit_price}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.total_amount}</TableCell>
                                <TableCell align="right" className={classes.actionIcon} onClick={() => dispatch(removeItem(row.id))}><RemoveCircleTwoToneIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}

export default DenseTable