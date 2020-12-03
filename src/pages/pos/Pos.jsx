import {
    AppBar,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    ListItem,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Toolbar,
    Typography,
    List,
    TableHead, Link
} from '@material-ui/core';
import React from 'react';
import red from '@material-ui/core/colors/red';
import {useStyles} from "./pos.styles";
import BillPrint from '../../components/bill/BillPrint'

import './pos.scss'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yogurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

let componentRef = 0;

/**
 *
 * @returns {*}
 * @constructor
 */
function Pos() {
    const classes = useStyles();

    return (
        <div className={classes.pos}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Typography variant="p"  >
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
                            <Paper square className={classes.items} style={{ padding: '2px 5px 2px 30px' }}>
                                <Grid item container style={{ padding: '4px' }} spacing={2}>
                                    <Grid item xs={4}>
                                        <TextField id="itemCode" variant={"outlined"} label="Item Code" style={{ width: '100%' }} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="itemCode" variant={"outlined"} label="Item Name" style={{ width: '100%' }} />
                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField id="itemCode" variant={"outlined"} label="Rate" />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField id="itemCode" variant={"outlined"} label="Discount" style={{ width: '100%' }} />
                                    </Grid>
                                    {/* <Grid item xs={2}></Grid> */}
                                    <Grid item xs={3}>
                                        <TextField id="itemCode" label="Quantity" variant={"outlined"} style={{ width: '100%' }} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Packet"
                                            labelPlacement="start"
                                            style={{ marginLeft: '0px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={3} alignItems="right" style={{ paddingRight: '0vw' }}>
                                        <Button
                                            style={{ top: '-20px', backgroundColor: '#5087c9', color:'white' }}
                                            variant="contained"
                                        >
                                            Add to Purchased
                                             </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <TableContainer
                                component={Paper}
                                style={{ width: 'auto', height: '71vh' }}
                                ref={el => (componentRef = el)}>
                                <Table  size="small" aria-label="a dense table" >
                                    <TableHead style={{ backgroundColor: '#5188CA' }}>
                                        <TableRow>
                                            <TableCell align='center'>S.N</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Code No.</TableCell>
                                            <TableCell align="right">Rate</TableCell>
                                            <TableCell align="right">Quantity</TableCell>
                                            <TableCell align="right">Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell align="center">1</TableCell>
                                                <TableCell scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.customer} container direction="column" spacing={1}>
                        <Grid item >
                            <Paper square>
                                <Typography variant="subtitle1" align='center'>Customer Details</Typography>
                                <div style={{padding:4}}>
                                    <TextField id="itemCode" variant={"outlined"} label="Code" style={{ width: '100%' }} />
                                    <TextField id="itemCode" variant={"outlined"} label="Customer Name" style={{ width: '100%' }} />
                                    <TextField id="itemCode" variant={"outlined"} label="Company" style={{ width: '100%' }} />
                                    <TextField id="itemCode" variant={"outlined"} label="Phone" style={{ width: '100%' }} />
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
                                        <ListItemText primary="10.00" style={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Sub Total" />
                                        <ListItemText primary="40.00" style={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Other Charges" />
                                        <ListItemText primary="20.00" style={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Total" />
                                        <ListItemText primary="64.00" style={{ textAlign: 'right' }} />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <BillPrint componentRef={componentRef} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default Pos;