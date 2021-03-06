import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  Button, Box,Paper,TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import {addCustomer} from "../../redux/customers/customers.action";

import './addCustomer.styles.scss'
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    addCustomer:{
        '& .MuiPaper-root':{
            margin:10,
            padding:5
        },
        '& input': {
            height: 2,
        },
        '& label': {
            top: -4
        },
        '& .MuiFormControl-root ':{
            margin:'2px 5px'
        },
        '& .MuiInputBase-fullWidth':{
            width:'98%'
        },
        '& .MuiInputLabel-outline':{
            fontSize:12
        },
        '& .MuiInputBase-input':{
            fontSize:14
        },
        '& fieldset':{
            '& fieldset': {
                height: 35,
                top:-3,
                borderColor:"#e0e0e0"
            }
        }
    }
}));

const initialValues = {
    name: '',
    contactNumber: '',
    address: '',
    retailerCode: '',
    category: '',
    VATorPANNumber: '',
    owner:{
        name: '',
        contactNumber: '',
        address: '',
        email: '',
    }
}

export default function AddCustomer() {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues)
    const dispatch = useDispatch()

    const submitAddCustomer=(values) =>{
        dispatch(addCustomer(values))
            console.log(values)
    }

    const handleInputChange = e => {
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
        <div className={`${classes.addCustomer} addCustomer`} >
            <Paper >
                <fieldset style={{borderColor: '#ffffff4f'}}>
                    <legend>Retailer</legend>
                    <TextField
                        label="Name"
                        id="name"
                        values={values.name}
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Contact Number"
                        id="contactNumber"
                        values={values.contactNumber}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Address"
                        id="address"
                        values={values.address}
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Supplier Code"
                        id="retailerCode"
                        values={values.retailerCode}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Category"
                        id="category"
                        values={values.category}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="VAT/PAN Number"
                        values={values.VATorPANNumber}
                        id="VATorPANNumber"
                        variant="outlined" onChange={handleInputChange} />
                </fieldset>
            </Paper>
            <Paper>
                <fieldset style={{borderColor: '#ffffff4f'}}>
                    <legend>Owner</legend>
                    <TextField
                        label="Owner Name"
                        id="name"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChangeInOwner}
                    />
                    <TextField
                        label="Contact Number"
                        id="contactNumber"
                        variant="outlined"
                        onChange={handleInputChangeInOwner}
                    />
                    <TextField
                        label="Address"
                        id="address"
                        variant="outlined"
                        fullWidth onChange={handleInputChangeInOwner}
                    />
                    <TextField
                        label="Email"
                        id="email"
                        variant="outlined"
                        onChange={handleInputChangeInOwner}
                    />
                </fieldset>
                <Box   style={{margin:'5px 20px', textAlign:'right'}}>
                    <Button
                        variant="outlined"
                        component={Link}
                        to="customers"
                        style={{color:"#eb6060", borderColor:"#c64c4c",borderRadius:"0", margin:"10px"}}
                    >
                        Cancel
                    </Button>
                    <Button
                        color='primary'
                        component={Link}
                        to="customers"
                        variant="contained"
                        onClick={()=>submitAddCustomer(values)}
                        style={{backgroundColor:'#3D73FF', borderRadius:"0", color:'white' }}>
                        Submit
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}