import React, {useState} from 'react';
import {Box, Button, Container, Paper, TextField, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import { format } from 'date-fns';

import {addUser} from "../../redux/users/users.action";

AddUsers.propTypes = {
    
};


const useStyles=makeStyles((theme)=>({
    addUsers:{
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
    user :{
        paddingTop: 10,
        '& .MuiFormControl-root':{
            margin:10
        }
    },

}))

const initialValues={
    name:"",
    username:"",
    designation:"",
    contactDetails:"",
    password:"",
    createdOn:format(new Date(), 'yyyy/MM/dd')
}

function AddUsers() {
    const classes=useStyles()
    const [values,setValues]=useState(initialValues)
    const dispatch=useDispatch()

    const handleInputChange = e => {
        const { id, value } = e.target
        setValues({
            ...values,
            [id]: value
        })
    }
    const submitAddUser =(values)=>{
        dispatch(addUser(values))
    }
    return (
        <div className={classes.addUsers}>
            <Typography variant="h6">
                Add User
            </Typography>
            <Paper>
                <Toolbar>
                    <Typography>
                        User
                    </Typography>
                </Toolbar>
                <Container className={classes.user}>
                    <TextField label="Name" id="name" variant="outlined" onChange={handleInputChange}/>
                    <TextField label="username" id="username" variant="outlined" onChange={handleInputChange}/>
                    <TextField label="Designation" id="designation" variant="outlined" onChange={handleInputChange}/>
                    <TextField
                        label="Contact Details"
                        id="contactDetails"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField label="Password" id="password" variant="outlined" onChange={handleInputChange}/>
                </Container>
                <Box style={{textAlign: 'right',padding:10 }}>
                    <Button
                        component={Link}
                        to="users"
                        variant="outlined"
                        style={{color:"#EB6060", borderColor:"#c64c4c",borderRadius:"0", margin:"10px"}}
                    >
                        Cancel
                    </Button>
                    <Button
                        component={Link}
                        to="users"
                        variant="contained"
                        style={{backgroundColor:'#3D73FF', borderRadius:"0", color:'white' }}
                        elevation={6}
                        onClick={()=>submitAddUser(values)}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}

export default AddUsers;