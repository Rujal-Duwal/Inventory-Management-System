import React, { useState, useEffect } from 'react'
import Moment from 'moment';
import { Input, List, ListItem, ListItemText, TextField, Paper, Grid, Container, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'

import { getproductItems } from '../../redux/prooduct_item/product-item.selectors'
import { DenseTable } from '../../components/table/table';
import { addItem, removeItem } from '../../redux/prooduct_item/product-item.action'


import './sales.scss'

const tableHeadings = ["Product Name", "Unit Price", "Quantity", "Total Amount"]
const tableColumn = ["name", "unit_price", "quantity"]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },

    paper: {
        padding: theme.spacing(0),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 20,
        height: '100%'
    },

    search: {
        width: '100 %',
    },
}));


export default function Sales() {
    const [totalvalue, setTotalvalue] = useState(0);
    const [otherCharges, setOtherCharges] = useState(10);
    const [discount, setDiscount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState();
    const [grandTotal, setGrandTotal] = useState(0);
    const [product, setProduct] = useState();

    const classes = useStyles();
    const productItems = useSelector(getproductItems)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(addItem()) }, [])

    function setTotal(total) {
        setTotalvalue(total)
        let grandTotal = totalvalue + otherCharges - discount
        setGrandTotal(grandTotal)
    }

    function handleDiscountChange(e) {
        setDiscount(parseFloat(e.target.value))
        setDiscountPercentage('')
    }

    function showproductDetail(product) {
        setProduct(product)
    }


    function removePurchase(id) {
        dispatch(removeItem(id));
    }


    return (
        <div className="sales">
            <form className={classes.root} noValidate autoComplete="off">
                <Paper className={classes.paper} m={10}>
                    <TextField size="small" id="standard-basic" label="Name" />
                    <TextField
                        id="datetime-local"
                        label="Date"
                        type="date"
                        defaultValue={Moment(new Date()).format('YYYY-MM-DD')}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField size="small" id="standard-basic" label="Status" />

                    <TextField size="small" id="standard-basic" label="Reference no." />
                </Paper>

                <Paper>
                    <Container maxWidth='sm'>
                        <label>Search </label>
                        <input name='search' value='Bar code/item Name/Item code' />
                        {/* <TextField id="filled-basic" label="Filled" variant="filled" size="small" /> */}
                    </Container >
                    {/* <TextField label="Standard" /> */}
                    <DenseTable
                        setTotal={setTotal}
                        showRowDetail={showproductDetail}
                        tableHeadings={tableHeadings}
                        tableColumn={tableColumn}
                        tableData={productItems}
                        removeRow={removePurchase}
                    />
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <List className={classes.listItem}>
                                <ListItem >
                                    <ListItemText primary="Brand:" secondary={product ? product.brand : null} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Category:" secondary={product ? product.category : null} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Expiry Date:" secondary={product ? product.exp_date : null} />
                                </ListItem>
                                {/* <ListItem>
                                    <ListItemText primary="Product Name:" secondary={product ? product.name : null} />
                                </ListItem> */}
                            </List>
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4}>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <label>Total</label>
                                    </Grid>
                                    <Grid item xs={6}><label>{totalvalue}</label></Grid>
                                    <Grid item xs={6}>
                                        <label>Other Charges</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Input
                                            type="number"
                                            size='small'
                                            name='other charges'
                                            value={otherCharges}
                                            onChange={(e) => setOtherCharges(parseFloat(e.target.value))} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label>Discounts</label>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Input
                                            type="number"
                                            size='small'
                                            name='other charges'
                                            placeholder="%"
                                            value={discountPercentage}
                                            onChange={(e) => setDiscount((e.target.value) / 100 * totalvalue)} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Input
                                            type="number"
                                            size='small'
                                            name='other charges'
                                            value={discount.toFixed(2)}
                                            onChange={(e) => handleDiscountChange(e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label>Grand Total</label>
                                    </Grid>
                                    <Grid item xs={6}><label>{grandTotal}</label></Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>

                </Paper>
            </form >
        </div >
    )
}