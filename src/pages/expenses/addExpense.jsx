import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box,
    Button,
    Paper,
    TextField,
    Toolbar,
    Typography,
    Container
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {addExpense} from "../../redux/expenses/expenses.action";


AddExpense.propTypes = {

};

const useStyles=makeStyles((theme)=>({
    addExpenses:{
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
    expenses :{
        paddingTop: 10,
        '& .MuiFormControl-root':{
            margin:10
        }
    },
}))

const initialValues={
    category:"",
    cost:"",
    date:"",
    totalAmount:""

}

function AddExpense() {
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

    const submitAddExpense =(values)=>{
        dispatch(addExpense(values))
    }

    return (
        <div className={classes.addExpenses}>
            <Typography variant="h6">
                Add Expenses
            </Typography>
            <Paper>
                <Toolbar>
                    <Typography>
                        Expenses
                    </Typography>
                </Toolbar>
                <Container className={classes.expenses}>
                    <TextField label="Category" id="category" variant="outlined" onChange={handleInputChange}/>
                    <TextField label="Cost" id="cost" variant="outlined" onChange={handleInputChange}/>
                    <TextField
                        defaultValue="2021-05-24"
                        InputLabelProps={{shrink: true, fontSize:"20px"}}
                        label="Date"
                        id="date"
                        type="date"
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField label="Total Amount" id="totalAmount" variant="outlined" onChange={handleInputChange}/>
                </Container>
                <Box style={{textAlign: 'right',padding:10 }}>
                    <Button
                        component={Link}
                        to="expenses"
                        variant="outlined"
                        style={{color:"#eb6060", borderColor:"#c64c4c",borderRadius:"0", margin:"10px"}}
                    >
                        Cancel
                    </Button>
                    <Button
                        component={Link}
                        to="expenses"
                        variant="contained"
                        onClick={()=>submitAddExpense(values)}
                        style={{backgroundColor:'#3D73FF', borderRadius:"0", color:'white' }}
                        elevation={6}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}

export default AddExpense;