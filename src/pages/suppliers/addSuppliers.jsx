import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, Paper, Typography, Container, TextField, Box, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

import {addSuppliers} from "../../redux/suppliers/suppliers.action";


AddSuppliers.propTypes = {
    vatNumber:PropTypes.string,
    mobileNumber:PropTypes.number
};

const useStyles = makeStyles((theme) => ({
    addSuppliers:{
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
            margin:"15px 0px",
        },
        '& .MuiButton-contained':{
            margin:10,
            background:"#3D73FF",
            color:"white"
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
    suppliers :{
        paddingTop: 10,
        '& .MuiFormControl-root':{
            margin:10
        }
    },

    supplierMetaData:{
        padding: "12px 10px 0px 10px",
        '& .MuiFormControl-root':{
            margin:10,
            width: '200px'
        }
    },
    owner:{
        padding:"10px 10px 5px 10px",
        '& .MuiFormControl-root':{
            margin:10
        }
    }
}));

const initialFValues = {
    companyName: '',
    contactNumber: '',
    address: '',
    email: '',
    additionalInformation: '',
    supplierCode: '',
    category: '',
    VATorPANNumber: '',
    credit:"0",
    owner:{
        contactNumber: '',
        name: '',
        address: '',
        email: '',
    }
}


export default function AddSuppliers() {
    const classes = useStyles();
    const [values, setValues] = useState(initialFValues)
    const dispatch = useDispatch()
    const submitAddSupplier=(values) =>{
        dispatch(addSuppliers(values))
    }

    const handleInputChange = e => {
        console.log(e.target);
        const { id, value } = e.target
        setValues({
            ...values,
            [id]: value
        })
    }

    const handleInputChangeInOwner=e=>{
        const {id,value} =e.target
        setValues({
            ...values,
            owner:{
                ...values.owner,
                [id]:value
            }
        })
    }

    return (
        <div className={classes.addSuppliers}>
            <Typography style={{color:"#000047"}} variant="h6">
                Add Supplier
            </Typography>
            <Paper>
                <Toolbar>
                    <Typography style={{color:"#000047"}} >
                        Owners
                    </Typography>
                </Toolbar>
                <Container className={classes.owner}>
                    {/*<Grid container spacing={1} className={classes.productMetaData}>*/}
                    <TextField
                        label="Name"
                        value={values.owner.name}
                        id="name"
                        variant="outlined"
                        onChange={handleInputChangeInOwner}
                    />
                    <TextField
                        label="Contact Number"
                        value={values.owner.contactNumber}
                        id="contactNumber"
                        variant="outlined"
                        onChange={handleInputChangeInOwner}
                    />
                    <TextField
                        label="Address"
                        value={values.owner.address}
                        id="address"
                        variant="outlined"
                        onChange={handleInputChangeInOwner}
                    />
                    <TextField
                        label="Email"
                        value={values.owner.email}
                        id="email"
                        variant="outlined"
                        onChange={handleInputChangeInOwner}
                    />
                </Container>
                <Toolbar>
                    <Typography style={{color:"#000047"}}>
                        Suppliers Store
                    </Typography>
                </Toolbar>
                <Container className={classes.suppliers}>
                    <TextField
                        label="Company Name"
                        value={values.companyName}
                        id="companyName"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Phone Number"
                        value={values.contactNumber}
                        id="contactNumber"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Address"
                        value={values.address}
                        id="address"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Email"
                        value={values.email}
                        id="email"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Additional Information"
                        value={values.additionalInformation}
                        id="additionalInformation"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Supplier Code"
                        value={values.supplierCode}
                        id="supplierCode"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Category"
                        value={values.category}
                        id="category"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Vat Number"
                        value={values.vatNumber}
                        id="vatNumber"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    {/*</Grid>*/}
                </Container>
                <Box display="flex" justifyContent="flex-end">
                    <Button
                        variant="outlined"
                        component={Link}
                        to="suppliers"
                        style={{color:"#eb6060", borderColor:"#c64c4c",borderRadius:"0", margin:"10px"}}
                    >
                        Cancel
                    </Button>
                    <Button
                        component={Link}
                        to="/suppliers"
                        variant="contained"
                        style={{backgroundColor:'#3D73FF', borderRadius:"0", color:'white' }}
                        onClick={()=>submitAddSupplier(values)}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}