import React, { useState, useEffect } from 'react'
import MaskedInput from 'react-text-mask';
import { Input, List, ListItem, ListItemText, TextField, Paper, Grid, Container, makeStyles, Divider, IconButton } from '@material-ui/core';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'

import { addexpenses, removeexpenses } from '../../redux/expenses/expenses.action'
import { DenseTable } from '../../components/table/table';
import './expenses.scss'
import { MaxHeightTextarea } from '../../components/textArea/textArea';
import { BasicTextFields } from '../../components/textField/textField';
import { getexpensess } from '../../redux/expenses/expenses.selector'


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
        height: '100%',
        display: 'flex'
    },

    search: {
        width: '100 %',
    },

    divider: {
        height: 50,
        margin: 4,
    },
}));


function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

const tableHeadings = ["Category", "Cost", "Date", "Total Amount"]
const tableColumn = ["catagory", "cost", "date"]

export default function Expenses() {
    const [totalvalue, setTotalvalue] = useState(0);
    const [otherCharges, setOtherCharges] = useState(10);
    const [discount, setDiscount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState();
    const [grandTotal, setGrandTotal] = useState(0);
    const [expensesDetail, setExpensesDetail] = useState();
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => { dispatch(addexpenses()) }, [])
    const expensesData = useSelector(getexpensess)

    function setTotal(total) {
        setTotalvalue(total)
        let grandTotal = totalvalue + otherCharges - discount
        setGrandTotal(grandTotal)
    }

    function handleDiscountChange(e) {
        setDiscount(parseFloat(e.target.value))
        setDiscountPercentage('')
    }

    function showExpensesDetail(product) {
        setExpensesDetail(product)
    }

    function removeSales(id) {
        dispatch(removeexpenses(id));
    }

    return (
        <div className="expenses">
            <form className={classes.root} noValidate autoComplete="off">
                <Paper className={classes.paper} m={10}>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <div className="category">
                                <TextField type='search' size="small" id="standard-basic" label="Suppliar Name" required />
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <PersonAddTwoToneIcon />
                                </IconButton>
                            </div>
                            <BasicTextFields type="number" label="Cost" size="small" />
                            <TextField
                                label="Date"
                                type="date"
                                defaultValue={Moment(new Date()).format('YYYY-MM-DD')}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField size="small" id="standard-basic" label="Bill no." type="number" />
                        </Grid>
                        <Grid item xs={4}>
                            <MaxHeightTextarea />
                        </Grid>
                    </Grid>
                </Paper>

                <Paper>
                    <Container maxWidth='sm'>
                        <TextField
                            className={classes.search}
                            label="  Search By Bar code/item Name/Item code"
                            variant="outlined"
                            id="mui-theme-provider-outlined-input"
                        />
                        {/* <label>Search </label> */}
                        {/* <input name='search' type='search' value='' placeholder='' /> */}
                        {/* <TextField id="filled-basic" label="Filled" variant="filled" size="small" /> */}
                    </Container >
                    {/* <TextField label="Standard" /> */}

                    <DenseTable
                        setTotal={setTotal}
                        showRowDetail={showExpensesDetail}
                        tableData={expensesData}
                        tableHeadings={tableHeadings}
                        tableColumn={tableColumn}
                        removeRow={removeSales}
                    />

                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <List className={classes.listItem}>
                                <ListItem >
                                    <ListItemText primary="Bill No:" secondary={expensesDetail ? expensesDetail.bill_number : null} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Details:" secondary={expensesDetail ? expensesDetail.details : null} />
                                </ListItem>
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
                                        <Input type="number" size='small' name='other charges' value={discount.toFixed(2)} onChange={(e) => handleDiscountChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label>Debit Amount</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Input
                                            type="number"
                                            size='small'
                                            name='Debit Amount'
                                            value={otherCharges}
                                            onChange={(e) => setOtherCharges(parseFloat(e.target.value))} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label>Credit Amount</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Input
                                            type="number"
                                            size='small'
                                            name='Credit Amount'
                                            value={otherCharges}
                                            onChange={(e) => setOtherCharges(parseFloat(e.target.value))} />
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