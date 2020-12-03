import { Grid, Paper, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Divider } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@material-ui/icons';
import ReactToPrint from "react-to-print";
import PrintIcon from '@material-ui/icons/Print';

const useStyles = makeStyles({
    billHeader: {
        backgroundColor: '#E1E9EA'
    },
    billBody: {
        color: '#7D7D7D',
        height: '60%'
    },
    root: {
        width: '0.6em'
    }
});

var componentRef


function Bill(props) {
    const classes = useStyles();

    return (
        <div >
            <div style={{ display: 'none' }}>
                <Grid container direction="column" justify="center" alignItems="center" ref={el => (componentRef = el)} >
                    <Grid item justify='center'>
                        <Typography variant="h5" style={{ marginTop: '40px' }} align='center'>Checkout</Typography>
                    </Grid>
                    <Grid item xs={12} container spacing={1}>
                        <Grid item container className={classes.billHeader}>
                            <Grid item xs={6}>
                                <Typography align='center'>Name</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>QTY</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Price</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.billBody} >
                            <Grid item container>
                                <Grid item xs={6}>
                                    <Typography align='center' variant='body2'>Wai Wai instant noodles</Typography>
                                </Grid>
                                <Grid item xs={3}  >
                                    <AddCircleOutlineOutlined style={{ width: '1rem', height: '1rem', color: '1AA7C6' }} />
                                    <Typography variant='body2' component="span"> 1 </Typography>
                                    <RemoveCircleOutlineOutlined style={{ width: '1rem', height: '1rem', color: '1AA7C6' }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant='body2'>20</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>

                            <Grid item container className={classes.billBody} >
                                <Grid item xs={6}>
                                    <Typography align='center' variant='body2'>Wai Wai instant noodles</Typography>
                                </Grid>
                                <Grid item xs={3}  >
                                    <AddCircleOutlineOutlined style={{ width: '1rem', height: '1rem', color: '1AA7C6' }} />
                                    <Typography variant='body2' component="span"> 1 </Typography>
                                    <RemoveCircleOutlineOutlined style={{ width: '1rem', height: '1rem', color: '1AA7C6' }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant='body2'>20</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                discount
                    </Grid>
                        </Grid>
                        {/* <TableContainer fullwidth component={Paper} >
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <AddCircleOutlineOutlined />
                                        </IconButton>
                                        {row.calories}
                                        <IconButton>
                                            <RemoveCircleOutlineOutlined />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}
                    </Grid>
                </Grid>
            </div>
            <ReactToPrint
                trigger={() =>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#36C590', width: '100%', fontSize: '0.8rem' }}
                        startIcon={<PrintIcon />}>
                        Print Bill
                                    </Button>}
                content={() => componentRef}
            />
        </div>
    );
}

export default Bill;