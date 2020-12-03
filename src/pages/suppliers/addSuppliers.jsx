import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, Toolbar, Button, Box,Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import { addSuppliers } from '../../redux/suppliers/suppliers.action'


const useStyles = makeStyles((theme) => ({
    root: {
        width:'95%',
        padding:10,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const initialFValues = {
    companyName: '',
    phoneNumber: '',
    mobileNumber: '',
    address: '',
    email: '',
    additionalInformation: '',
    supplierCode: '',
    category: '',
    VATorPANNumber: '',
    owner:{
        phoneNumber: '',
        name: '',
        mobileNumber: '',
        address: '',
        email: '',
    }
}

export default function AddSuppliers() {
    const classes = useStyles();
    const [values, setValues] = useState(initialFValues)
    const dispatch = useDispatch()

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
    console.log(values);
    return (
        <div className='addSuppliers'>
            <Paper>
                <form className={classes.root}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="companyName">Company Name</InputLabel>
                        <Input id="companyName" onChange={handleInputChange} values={values.companyName} />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                        <Input onChange={handleInputChange} values={values.phoneNumber} id="phoneNumber" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
                        <Input onChange={handleInputChange} values={values.mobileNumber} id="mobileNumber" />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="address">Address</InputLabel>
                        <Input onChange={handleInputChange} values={values.address} id="address" />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input onChange={handleInputChange} values={values.email} id="email" />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="additionalInformation">Additional Information</InputLabel>
                        <Input onChange={handleInputChange} values={values.additionalInformation} id="additionalInformation" />
                    </FormControl>
                    <Toolbar />
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="supplierCode">Supplier Code</InputLabel>
                        <Input onChange={handleInputChange} values={values.supplierCode} id="supplierCode" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="category">Category</InputLabel>
                        <Input onChange={handleInputChange} values={values.category} id="category" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="vatNumber">VAT Number</InputLabel>
                        <Input onChange={handleInputChange} values={values.VATorPANNumber} id="vatNumber" />
                    </FormControl>
                    <Toolbar />
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="ownerName">Owner Name</InputLabel>
                        <Input onChange={handleInputChangeInOwner} values={values.owner.name} id="name" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="ownerPhoneNumber">Phone Name</InputLabel>
                        <Input onChange={handleInputChangeInOwner} values={values.owner.phoneNumber} id="phoneNumber" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="ownerMobileNumber">Mobile Name</InputLabel>
                        <Input onChange={handleInputChangeInOwner} values={values.owner.mobileNumber} id="mobileNumber" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="ownerAddress">Address</InputLabel>
                        <Input onChange={handleInputChangeInOwner} values={values.owner.address} id="address" />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="ownerEmail">Email</InputLabel>
                        <Input onChange={handleInputChangeInOwner} values={values.owner.email} id="email" />
                    </FormControl>
                    <Box display="flex" justifyContent="flex-end">
                        <Button color='primary' variant="contained" onClick={() => dispatch(addSuppliers(values))}>Submit</Button>
                    </Box>
                </form>
            </Paper>
        </div>
    )
}