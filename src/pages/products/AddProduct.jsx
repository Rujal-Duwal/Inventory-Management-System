import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
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

import './AddProduct.scss'
import {addProduct} from "../../redux/products/products.action";
import CreatableSelect from "react-select/creatable/dist/react-select.esm";

const useStyles = makeStyles((theme) => ({
    addProduct: {
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

const selectStyles = {
    menu: base => ({
        ...base,
        zIndex: 100
    })
};

const initialValues={
    "itemCode":"",
    "name":"",
    "localName":"",
    "category":"",
    "brand":"",
    "minStockLimit":"",
    "quantity":"",
    "mfdDate":"",
    "expDate":"",
    "costPrice":"",
    "boxCostPrice":"",
    "marketPrice":"",
    "boxMarketPrice":"",
    "sellingPrice":"",
    "boxSellingPrice":"",
    "VATorPANNumber":"",
    "description":""
}

function AddProduct() {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues)
    const dispatch = useDispatch()

    const submitAddProduct=(values)=>{
        dispatch(addProduct(values))
    }

    const handleInputChange = e => {
        const { id, value } = e.target
        setValues({
            ...values,
            [id]: value
        })
        console.log({values})
    }

    // const handleCategoryChange= () => {
    //
    //     console.group('Value Changed');
    //     console.log(e);
    //     // console.log(`action: ${actionMeta.action}`);
    //     console.groupEnd();
    // };
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
                            values={values.itemCode}
                            id="itemCode"
                            variant="outlined"
                            disabled
                            onChange={handleInputChange}
                        />
                        <TextField
                            style={{width:"42%"}}
                            label="Name"
                            values={values.name}
                            id="name"
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <TextField
                            style={{width:"30%"}}
                            label="Local Name"
                            values={values.localName}
                            id="localName"
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <Grid item  xs={3} style={{padding:"8px"}}>
                            <CreatableSelect
                                styles={selectStyles}
                                isClearable
                                onChange={(inputValue)=>
                                    setValues({
                                    ...values,
                                    "category": inputValue.value
                                    })
                                }
                                options={[]}
                                placeholder="Category"
                            />
                        </Grid>
                        <Grid item xs={3} style={{padding:"8px" }}>
                            <CreatableSelect
                                styles={selectStyles}
                                isClearable
                                onChange={(inputValue)=>
                                    setValues({
                                        ...values,
                                        "brand": inputValue.value
                                    })
                                }
                                options={[]}
                                placeholder="Brand"
                            />
                        </Grid>
                        <TextField
                            label="Min. stock Limit"
                            values={values.minStockLimit}
                            id="minStockLimit"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                        />
                        <TextField
                            style={{width:"22%"}}
                            label="Quantity"
                            values={values.quantity}
                            id="quantity"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                        />
                        <TextField
                            style={{fontSize:"20px"}}
                            id="mfdDate"
                            label="Mfd Date"
                            type="date"
                            variant={"outlined"}
                            defaultValue="2021-05-24"
                            className={classes.textField}
                            onChange={handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                                fontSize:"20px"
                            }}
                        />
                        <TextField
                            style={{fontSize:"20px"}}
                            id="expDate"
                            variant={"outlined"}
                            label="Exp Date"
                            type="date"
                            defaultValue="2021-05-24"
                            className={classes.textField}
                            onChange={handleInputChange}
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
                            values={values.costPrice}
                            id="costPrice"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Box Cost Price"
                            values={values.boxCostPrice}
                            id="boxCostPrice"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Market Price"
                            values={values.marketPrice}
                            id="marketPrice"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Box Market Price"
                            values={values.boxMarketPrice}
                            id="boxMarketPrice"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Selling Price"
                            values={values.sellingPrice}
                            id="sellingPrice"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Box Selling Price"
                            values={values.boxSellingPrice}
                            id="boxSellingPrice"
                            variant="outlined"
                            onChange={handleInputChange}
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
                            label="VAT/PAN number"
                            values={values.VATorPANNumber}
                            id="VATorPANNumber"
                            variant="outlined"
                            onChange={handleInputChange}
                            type={"number"}
                        />
                        <TextField
                            disabled
                            label="Bar Code"
                            // values={values.VATorPANNumber}
                            id="VATorPANNumber"
                            variant="outlined"
                            //onChange={handleInputChange}
                            type={"number"}
                        />
                        <Button
                            variant="contained"
                            style={{
                                height: "36px",
                                marginTop: "10px",
                                backgroundColor:" rgb(67 113 233)" ,
                                fontSize:"12px",
                                borderRadius:"2px",
                                color:"white"
                            }}
                        >
                            Generate Bar Code
                        </Button>
                        <TextareaAutosize
                            style={{width:'100%', background:'#ececec7d', margin:'10px'}}
                            rowsMin={8}
                            aria-label="minimum height"
                            placeholder="Description"
                            id="description"
                            value={values.description}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Box style={{textAlign: 'right',padding:10 }}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="products"
                            style={{color:"#EB6060", borderColor:"#c64c4c",borderRadius:"0", margin:"10px"}}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            style={{backgroundColor:'#3D73FF', borderRadius:"0", color:'white' }}
                            elevation={6}
                            component={Link}
                            to="products"
                            onClick={()=>submitAddProduct(values)}
                        >
                            Submit
                        </Button>
                    </Box>
                </Container>
            </Paper>
        </div>
    );
}

export default AddProduct;