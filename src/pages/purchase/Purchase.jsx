import React, { useState, useEffect } from 'react'
import MaskedInput from 'react-text-mask';
import {
    Input,
    List,
    ListItem,
    ListItemText,
    TextField,
    Paper,
    Grid,
    Container,
    makeStyles,
    Divider,
    IconButton,
    FormControl,
    InputLabel
} from '@material-ui/core';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'


import { DenseTable } from '../../components/table/table';
import './purchase.scss'
import { getproductItems } from '../../redux/prooduct_item/product-item.selectors'
import { addItem, removeItem } from '../../redux/prooduct_item/product-item.action'

const tableHeadings = ["Product Name", "Unit Price", "Quantity", "Total Amount"]
const tableColumn = ["product_name", "unit_price", "quantity"]


const useStyles = makeStyles((theme) => ({
    root: {

        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
    },

    paper: {
        padding: theme.spacing(0),
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

export default function Purchase() {
    const [totalvalue, setTotalvalue] = useState(0);
    const [otherCharges, setOtherCharges] = useState(10);
    const [discount, setDiscount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState();
    const [grandTotal, setGrandTotal] = useState(0);
    const [product, setProduct] = useState();
    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '1320',
    });

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

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="purchase">
            <form className={classes.root} noValidate autoComplete="off">
                <Paper className={classes.paper} m={10}>
                    <div className="suppliar">
                        <TextField type='search' size="small" id="standard-basic" label="Suppliar Name" required />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                            <PersonAddTwoToneIcon />
                        </IconButton>
                    </div>
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
                    <FormControl>
                        <InputLabel htmlFor="formatted-text-mask-input">VAT/PAN</InputLabel>
                        <Input
                            value={values.textmask}
                            onChange={handleChange}
                            name="textmask"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
                    <TextField size="small" id="standard-basic" label="Bill no." type="number" />
                </Paper>

                <Paper>
                    <Container maxWidth='sm'>
                        <TextField
                            className={classes.search}
                            label="  Search By Bar code/item Name/Item code"
                            variant="outlined"
                            id="mui-theme-provider-outlined-input"
                        />
                    </Container >

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