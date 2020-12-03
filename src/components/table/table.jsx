import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Collapse,
    IconButton,
    Typography
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp, RemoveCircleTwoTone } from '@material-ui/icons';

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


/**
 *
 * @param setTotal
 * @param showRowDetail
 * @param tableHeadings
 * @param tableColumn
 * @param tableData
 * @param removeRow
 * @returns {*}
 * @constructor
 */
export const DenseTable = ({ setTotal, showRowDetail, tableHeadings, tableColumn, tableData, removeRow }) => {
    let subtotal = 0

    let total_amount


    const rows = tableData && tableData.map(item => {
        // item.amount ?
        //     total_amount = item.amount :
        //     total_amount = item.quantity * item.unit_price
        total_amount = item.amount ? item.amount : item.quantity * item.unit_price
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
                            <TableRow key={row.name} onClick={() => showRowDetail(row)} hover>
                                {tableColumn.map(columnKey => <TableCell>{row[columnKey]}</TableCell>)}
                                <TableCell >{row.total_amount}</TableCell>
                                <TableCell align="right" className={classes.actionIcon} onClick={() => removeRow(row.id)}>
                                    <RemoveCircleTwoTone />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}

/************************* */
// Code for CollapsibleTable
/************************* */

// style for CollapsibleTable

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

/**
 *
 * @param supplier
 * @param supplier.companyName - The name of company on the supplier
 * @param supplier.category
 * @param supplier.phoneNumber
 * @param supplier.email
 * @param supplier.credit
 * @param supplier.information
 * @param supplier.owner
 * @returns {*}
 * @constructor
 */

function Row({ supplier }) {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {supplier.companyName}
                </TableCell>
                <TableCell align="right">{supplier.category}</TableCell>
                <TableCell align="right">{supplier.phoneNumber}<br/>{supplier.email}</TableCell>
                <TableCell align="right">{supplier.credit}</TableCell>
                <TableCell align="right">{supplier.information}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">Owner info</Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {console.log({supplier})}
                                        <TableRow key={supplier.owner && supplier.owner.name}>
                                            <TableCell component="th" scope="row">
                                                {supplier.owner &&supplier.owner.name}
                                            </TableCell>
                                            <TableCell>{supplier.owner &&supplier.owner.mobileNumber}</TableCell>
                                            <TableCell align="right">{supplier.owner &&supplier.owner.address}</TableCell>
                                            <TableCell align="right">
                                            </TableCell>
                                        </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

/**
 *
 * @param tableHeadings
 * @param tableData
 * @returns {*}
 * @constructor
 */

export function CollapsibleTable({ tableHeadings, tableData }) {
    const rows = tableData && tableData

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {tableHeadings.map(heading => <TableCell>{heading}</TableCell>)}
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <Row key={row.name} supplier={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
