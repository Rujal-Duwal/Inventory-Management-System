import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Paper, TextField,Toolbar,Typography, Grid,TextareaAutosize,InputAdornment, Container} from "@material-ui/core";
import {KeyboardDatePicker} from '@material-ui/pickers';

import CreatableSingle from '../../components/select'
import './AddProduct.scss'

const useStyles = makeStyles((theme) => ({
    addProduct: {
        // '& .paper':{
        //     padding:10,
        //     margin:20
        // },
        '& .MuiToolbar-regular':{
            minHeight:44,
            backgroundColor:'#E4ECFF',
            marginTop:10
        },

        //style for shrinking text field
        '& input': {
            height: 1,
        },
        '& label': {
            top: -9
        },

        //style for paper
        '& .MuiPaper-root':{
            margin:"15px 0px"
        }
    },

    /*style for dateInput*/
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        '& input':{
            fontSize:"14px",
            color:"#020202a1"
        }
    },
    /**/
    productMetaData :{
        paddingTop: 10,
        '& .MuiFormControl-root':{
            margin:10
        }
    },

    productCost:{
        padding: "12px 10px 0px 10px",
        '& .MuiFormControl-root':{
            margin:10,
            width: '200px'
        }
    },
    productSystemData:{
        padding:"10px 10px 5px 10px",
        '& .MuiFormControl-root':{
            margin:10
        }
    }
}))

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function AddProduct(props) {
    const classes = useStyles();
    // const [values, setValues] = useState()
    return (
        <div className={`${classes.addProduct} addProduct`}>
            <Paper elevation={1}>
                <Toolbar >
                    <Typography style={{color:"#000047"}}>
                        Product Meta Data
                    </Typography>
                </Toolbar>
                <Container>
                <Grid container spacing={1} className={classes.productMetaData}>
                    <TextField
                        style={{width:"200px", backgroundColor:"rgb(212 212 212 / 33%)"}}
                        label="Item Code"
                        value="10001"
                        // values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        disabled
                        //onChange={handleInputChange}
                    />
                    <TextField
                        style={{width:"42%"}}
                        label="Name"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                    />
                    <TextField
                        style={{width:"30%"}}
                        label="Local Name"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                    />
                    <Grid item  xs={3} style={{padding:"8px"}}>
                        <CreatableSingle placeHolder={"Category"} />
                    </Grid>
                    <Grid item xs={3} style={{padding:"8px" }}>
                        <CreatableSingle placeHolder={"Brand"}/>
                    </Grid>
                    <TextField
                        label="Min. stock Limit"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                    />
                    <TextField
                        style={{width:"22%"}}
                        label="Quantity"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                    />
                    <TextField
                        style={{fontSize:"20px"}}
                        id="date"
                        label="Mfd Date"
                        type="date"
                        variant={"outlined"}
                        defaultValue="2021-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                            fontSize:"20px"
                        }}
                    />
                    <TextField
                        style={{fontSize:"20px"}}
                        id="date"
                        variant={"outlined"}
                        label="Exp Date"
                        type="date"
                        defaultValue="2021-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                    </Container>
            </Paper>
            <Paper elevation={1}>
                <Toolbar >
                    <Typography style={{color:"#000047"}}>
                        Product Cost
                    </Typography>
                </Toolbar>
                <Container>
                <Grid container spacing={2} className={classes.productCost}>
                    <TextField
                        label="Cost Price"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Box Cost Price"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Selling Price"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Box Selling Price"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                        }}
                    />
                </Grid>
        </Container>
            </Paper>
            <Paper>

                <Toolbar >
                    <Typography style={{color:"#000047"}}>
                        Product System Data
                    </Typography>
                </Toolbar>
                <Container>
                <Grid container spacing={1} className={classes.productSystemData}>
                    <TextField
                        label="Quantity"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                    />
                    <TextField
                        disabled
                        label="Bar Code"
                        //values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined"
                        //onChange={handleInputChange}
                        type={"number"}
                    />
                    <Button variant="contained" style={{height: "36px", marginTop: "10px", backgroundColor:" rgb(67 113 233)" ,  fontSize:"12px", borderRadius:"2px", color:"white" }}>
                        Generate Bar Code
                    </Button>
                    <TextareaAutosize style={{width:'100%', background:'#ececec7d', margin:'10px'}} rowsMin={8} aria-label="minimum height"  placeholder="Description" />
                </Grid>
                {/*<Grid container style={{padding:10, float:'right'}}>*/}
                <Box style={{textAlign: 'right',padding:10 }}>
                    <Button variant="outlined" style={{color:"#EB6060", borderColor:"#c64c4c", margin:"10px"}}>
                        Cancel
                    </Button>
                    <Button variant="contained"  style={{backgroundColor:'rgb(65 94 255)', color:'white' }} elevation={3}>
                        Submit
                    </Button>
                </Box>
                {/*</Grid>*/}
                </Container>
            </Paper>
        </div>
    );
}

export default AddProduct;