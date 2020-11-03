import React from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';

import './table.scss'

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

export const DenseTable = ({ setTotal, showproductDetail, tableHeadings, tableColumn, tableData, removeRow }) => {
    var subtotal = 0
    var rows
    var total_amount

    rows = tableData && tableData.map(item => {
        item.amount ?
            total_amount = item.amount :
            total_amount = item.quantity * item.unit_price
        subtotal = total_amount + subtotal
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
                            {tableHeadings.map(heading => <TableCell>{heading}</TableCell>)}
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.map((row) => (
                            <TableRow key={row.name} onClick={() => showproductDetail(row)} hover>
                                {tableColumn.map(columnKey => <TableCell>{row.[columnKey]}</TableCell>)}
                                <TableCell >{row.total_amount}</TableCell>
                                <TableCell align="right" className={classes.actionIcon} onClick={() => removeRow(row.id)}><RemoveCircleTwoToneIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}
