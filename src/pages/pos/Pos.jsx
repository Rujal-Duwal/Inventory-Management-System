import {
    AppBar,
    Checkbox,
    FormControlLabel,
    Grid,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Toolbar,
    Typography,
    List,
    Link
} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import BillPrint from '../../components/bill/BillPrint'
import {useStyles} from "./pos.styles";
import './pos.scss'
import {getProducts} from "../../redux/products/products.action";
import { posSalesListSelector} from "../../redux/pos/pos.selecotrs";
import PosSalesTable from "../../components/POS/PosSalesTable";
import PosSalesItem from "../../components/POS/PosSalesItem";


/**
 *
 * @returns {*}
 * @constructor
 */
function Pos() {
    const classes = useStyles();
    const dispatch = useDispatch()
    let subTotal=0
    let otherCharges=10
    let discount=10
    let total

    useEffect(() => { dispatch(getProducts()) }, [dispatch])
    const salesList = useSelector(posSalesListSelector)

    salesList.map((row)=>subTotal += row.quantity*row.rate)

    total=subTotal+otherCharges-discount

    return (
        <div className={classes.pos}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Typography variant="p" >
                        <Link href='/' style={{color:'white'}}>
                            IMS POS
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <Grid container spacing={1} >
                    <Grid item xs={8} direction="column" container spacing={1}>
                        <Grid item>
                            <PosSalesItem/>
                        </Grid>
                        <Grid item >
                            <PosSalesTable/>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.customer} container direction="column" spacing={1}>
                        <Grid item >
                            <Paper square>
                                <Typography variant="subtitle1" align='center'>Customer Details</Typography>
                                <div style={{padding:4}}>
                                    <TextField
                                        id="itemCode"
                                        variant={"outlined"}
                                        label="Code"
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        id="itemCode"
                                        variant={"outlined"}
                                        label="Customer Name"
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        id="itemCode"
                                        variant={"outlined"}
                                        label="Company"
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        id="itemCode"
                                        variant={"outlined"}
                                        label="Phone"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper square>
                                <Typography variant="subtitle1" align='center' m={2} >Accessories</Typography>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Bag"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Delivery"
                                    labelPlacement="start"
                                />
                            </Paper>
                        </Grid>
                        <Grid item className={classes.checkout}>
                            <Paper square >
                                <Typography variant="subtitle1" align='center'>Checkout</Typography>
                                <List aria-label="contacts" dense>
                                    <ListItem style={{ fontSize: '15px' }}>
                                        <ListItemText primary="Discount (%)" />
                                        <ListItemText primary={discount} style={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Sub Total" />
                                        <ListItemText primary={subTotal} style={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Other Charges" />
                                        <ListItemText primary={otherCharges} style={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Total" />
                                        <ListItemText primary={total} style={{ textAlign: 'right' }} />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <BillPrint
                                salesList={salesList}
                                subTotal={subTotal}
                                discount={discount}
                                otherCharges={otherCharges}
                                total={total}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default Pos;