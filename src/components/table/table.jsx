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

export const DenseTable = ({ setTotal, showRowDetail, tableHeadings, tableColumn, tableData, removeRow }) => {
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


function createData({ name, catagory, contact_number, credit_amount, information }) {
    return {
        name,
        catagory,
        contact_number,
        credit_amount,
        information,
        history: [
            { date: '2020-01-05', customerId: '11091700', amount: 3 },
            { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
        ],
    };
}

function Row(props) {
    const { row } = props;
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
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.catagory}</TableCell>
                <TableCell align="right">{row.contact_number}</TableCell>
                <TableCell align="right">{row.credit_amount}</TableCell>
                <TableCell align="right">{row.information}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
              </Typography>
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
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export function CollapsibleTable({ tableHeadings, tableData }) {
    var rows
    rows = tableData && tableData.map(supplier => createData(supplier))
    // console.log(rows);

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
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
