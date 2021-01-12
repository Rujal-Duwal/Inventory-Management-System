import {
    Grid,
    Button,
    Typography,
    Divider
} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ReactToPrint from "react-to-print";
import PrintIcon from '@material-ui/icons/Print';
import BillLogoSvg from '../../svg/BillLogoSvg';

const useStyles = makeStyles({
    billHeader: {
        marginTop:'8px',
        backgroundColor: '#E1E9EA',
        height:'25px',
        '& p':{
            fontSize:'13px',
            fontWeight:'600',
            fontFamily:'-webkit-body'
        }
    },
    billBody: {
        // color: '#7D7D7D',
        // height: '60%',
        marginButton:'8px',
        '& p,span': {
            fontSize: '0.7rem'
        }
    },
    root: {
        width: '0.6em'
    }
});

let componentRef;


function BillPrint({salesList,discount,subTotal,otherCharges,total}) {
    const classes = useStyles();

    return (
        <div>
            <div style={{display:'none'}}>
                <Grid container direction="column" justify="center" alignItems="center" ref={el => (componentRef = el)}
                      style={{width: '3in', padding:'10px'}}>
                    <Grid item justify='center'>
                        <div style={{marginLeft: '78px'}}>
                            <BillLogoSvg/>
                        </div>
                        <Typography variant="h5" align='center' style={{fontFamily: 'cursive'}}>My Inventory
                            System</Typography>
                    </Grid>
                    <hr style={{width: '90%', backgroundColor: 'black'}}/>
                    <Grid item container style={{fontSize: '10 px', fontFamily: 'monospace', fontWeight: "600", opacity:'0.65'}}>
                        <Grid item xs={6}>
                            Ref No.: 7662<br/>
                            Bill No.:12501251<br/>
                        </Grid>
                        <Grid item xs={6}>
                            Date:2020 Nov 27<br/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container spacing={1}>
                        <Grid item container className={classes.billHeader}>
                            <Grid item xs={6}>
                                <Typography>Item</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align='center'>QTY</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align='center'>Price</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.billBody}>
                            {salesList.map(item=>
                                <Grid item container>
                                    <Grid item xs={6}>
                                        <Typography variant='body2'>{item.name}</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body2' align={'center'}> {item.quantity} </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='body2' align='center'>{item.quantity*item.rate}</Typography>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                        <Grid item container style={{backgroundColor:'#eaeaea', fontSize:'0.7rem', fontWeight:'600'}}>
                            <Grid item xs={6}/>
                            <Grid item xs={3}>
                                Sub Total<br/>
                                Services<br/>
                                Discount<br/>
                                Total<br/>
                            </Grid>
                            <Grid item xs={3} style={{textAlign:'right'}}>
                                {subTotal}<br/>
                                {otherCharges}<br/>
                                {discount}<br/>
                                {total}<br/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'caption'} style={{ opacity: 0.5}}>Thank You & Welcome Again</Typography>
                    </Grid>
                </Grid>

            </div>
            <ReactToPrint
                trigger={() =>
                    <Button
                        variant="contained"
                        style={{backgroundColor: '#5087c9', width: '100%', fontSize: '0.8rem', color:'white'}}
                        startIcon={<PrintIcon/>}
                    >
                        Print Bill
                    </Button>}
                content={() => componentRef}
            />
        </div>
    );
}

export default BillPrint;