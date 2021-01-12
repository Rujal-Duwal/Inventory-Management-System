import React from 'react';
import PropTypes from 'prop-types';
import {Box,
    Button,
    Paper,
    TextField,
    Toolbar,
    Typography,
    Grid,
    TextareaAutosize,
    InputAdornment,
    Container
} from "@material-ui/core";


AddExpenses.propTypes = {

};

function AddExpenses(props) {
    return (
        <div>
            <Typography>
                Add Expenses
            </Typography>
            <Paper>
                <Toolbar>
                    <Typography>
                        Expenses
                    </Typography>
                </Toolbar>
                <Container>
                    <TextField label="Category" id="category" variant="outlined"/>
                    <TextField label="Cost" id="cost" variant="outlined"/>
                    <TextField label="Date" id="date" variant="date"/>
                    <TextField label="Total Amount" id="totalAmount" variant="totalAmount"/>
                </Container>
                <Box style={{textAlign: 'right',padding:10 }}>
                    <Button variant="outlined" style={{color:"#EB6060", borderColor:"#c64c4c",borderRadius:"0", margin:"10px"}}>
                        Cancel
                    </Button>
                    <Button variant="contained"  style={{backgroundColor:'#3D73FF', borderRadius:"0", color:'white' }} elevation={6}>
                        Submit
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}

export default AddExpenses;