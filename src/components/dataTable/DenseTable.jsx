import React, { useEffect } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
import { createStructuredSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'
import { selectprodutcItems } from '../../redux/prooduct_item/product-item.selectors'
import { addItem } from '../../redux/prooduct_item/product-item.action'


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


// function addRow(row) {
//     row = row.map((data) => createData(data))
//     return row
// }


// function createData({ name, unit_price, quantity, action }) {
//     console.log(quantity);
//     const total_amount = quantity * unit_price;
//     subtotal = total_amount + subtotal
//     return { name, unit_price, quantity, total_amount, action };
// }


function DenseTable({ setTotal, showproductDetail }) {
    var subtotal = 0
    const dispatch = useDispatch()
    useEffect(() => { dispatch(addItem()) }, [])

    const productItems = useSelector(state => state.productItems.productItems)
    const rows = productItems && productItems.map(item => {
        const total_amount = item.quantity * item.unit_price;
        subtotal = total_amount + subtotal;
        return { ...item, total_amount: total_amount }
    })


    const classes = useStyles();
    setTotal(subtotal)
    return (
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
                            <TableCell align="right" className={classes.actionIcon}><RemoveCircleTwoToneIcon /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

// const mapStateToProps = createStructuredSelector({
//     productItems: selectprodutcItems
// })
// const mapDispatchToProps = dispatch => ({
//     addItem: () => dispatch(addItem())
// })

export default DenseTable

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// 
// const TAX_RATE = 0.07;
// 
// const useStyles = makeStyles({
// table: {
// minWidth: 700,
// },
// actionIcon: {
// color: 'green',
// 
// '&:hover': {
// color: 'red'
// }
// }
// });
// 
// function ccyFormat(num) {
// return `${num.toFixed(2)}`;
// }
// 
// function priceRow(qty, unit) {
// return qty * unit;
// }
// 
// function createRow(desc, qty, unit) {
// const price = priceRow(qty, unit);
// return { desc, qty, unit, price };
// }
// 
// function subtotal(items) {
// return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }
// 
// const rows = [
// createRow('Paperclips (Box)', 100, 1.15),
// createRow('Paper (Case)', 10, 45.99),
// createRow('Waste Basket', 2, 17.99),
// ];
// 
// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;
// 
// export default function SpanningTable() {
// const classes = useStyles();
// 
// return (
// <TableContainer component={Paper}>
{/* <Table className={classes.table} aria-label="spanning table"> */ }
{/* <TableHead> */ }
{/* <TableRow> */ }
{/* <TableCell align="center" colSpan={3}> */ }
{/* Details */ }
{/* </TableCell> */ }
{/* <TableCell align="right">Price</TableCell> */ }
{/* </TableRow> */ }
{/* <TableRow> */ }
{/* <TableCell>Desc</TableCell> */ }
{/* <TableCell align="right">Qty.</TableCell> */ }
{/* <TableCell align="right">Unit</TableCell> */ }
{/* <TableCell align="right">Sum</TableCell> */ }
{/* <TableCell align="right">Action</TableCell> */ }
{/* </TableRow> */ }
{/* </TableHead> */ }
{/* <TableBody> */ }
{/* {rows.map((row) => ( */ }
// <TableRow key={row.desc}>
{/* <TableCell>{row.desc}</TableCell> */ }
{/* <TableCell align="right">{row.qty}</TableCell> */ }
{/* <TableCell align="right">{row.unit}</TableCell> */ }
{/* <TableCell align="right">{ccyFormat(row.price)}</TableCell> */ }
{/*  */ }
{/* <TableCell align="right" className={classes.actionIcon}><RemoveCircleTwoToneIcon /></TableCell> */ }
{/* </TableRow> */ }
// ))}
{/*  */ }
{/* <TableRow> */ }
{/* <TableCell rowSpan={3} colSpan={2} /> */ }
{/* <TableCell colSpan={2}>Subtotal</TableCell> */ }
{/* <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell> */ }
{/* </TableRow> */ }
{/* <TableRow> */ }
{/* <TableCell>Tax</TableCell> */ }
{/* <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell> */ }
{/* <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell> */ }
{/* </TableRow> */ }
{/* <TableRow> */ }
{/* <TableCell colSpan={2}>Total</TableCell> */ }
{/* <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell> */ }
{/* </TableRow> */ }
{/* </TableBody> */ }
{/* </Table> */ }
{/* </TableContainer> */ }
    // );
// }
// 