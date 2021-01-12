import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Button, Chip, InputBase, Typography} from '@material-ui/core'
import { MuiThemeProvider} from "@material-ui/core/styles";
import {Print,CloudDownload} from '@material-ui/icons';
import MUIDataTable from "mui-datatables";
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";

import { getProducts } from '../../redux/products/products.action'
import { productsSelector } from '../../redux/products/products.selectors'
import {useStyles,overRidesMuiTheme} from "../../styles/DataTable.styles"


/**
 *
 * @returns {*}
 * @constructor
 */
//mrp
//
function Products() {
    const classes = useStyles();
    const getMuiTheme=overRidesMuiTheme()
    const [searchValue,setSearchValue]=useState()
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProducts()) }, [dispatch])
    const products = useSelector(productsSelector)

    const columns = [
        {
            name:"brand",
            options:{
                searchable:true,
                // viewColumns:false
                display:"false",
                // customHead
                // customBodyRenderLite:(dataIndex => null)
            },
        },
        {
            name: "name",
            label: "Name" ,
            options:{
                customBodyRenderLite:(dataIndex)=>{
                    return(<div style={{marginLeft:"20px"}}>
                           <span style={{fontWeight:600}}>
                               {products[dataIndex].name}
                           </span>
                        <br/>
                        <span style={{color:"#6e6893", fontSize:"10px"}}>
                            {products[dataIndex].brand}
                        </span>
                    </div>)}
            }
        },
        {
            name: "quantity",
            label: "Stock",
            options:{
                customBodyRenderLite:(dataIndex)=>
                    <div style={{colo:'red'}}>
                        <span>
                            <Chip
                                avatar={
                                    <span style={{
                                        height: "6px",
                                        width: "6px",
                                        backgroundColor: "#007F00",
                                        borderRadius: "50%",
                                        display: "inline-block"
                                    }}/>
                                }
                                size="small"
                                label="Sufficient"
                                style={{backgroundColor:"#CDFFCD", color:"#007F00", fontSize:"8px", height:"14px"}}
                            />
                        </span>
                        <br/>
                        <span>
                            {products[dataIndex].quantity}
                        </span>
                    </div>
            }
        },
        {
            name: "unitPrice",
            label: "MRP",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div style={{colo: 'red'}}>{products[dataIndex].unitPrice}</div>
            }
        },
        {
            name: "category",
            label: "Category",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div>{products[dataIndex].category}</div>
            }
        },
        {
            name: "expDate",
            label: "Exp. DATE",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    /* code block for calculating remaining days to expire products */
                    const countDownDate = new Date(products[dataIndex].expDate)
                    const now = new Date();
                    const distance = countDownDate - now;
                    const days=Math.floor(distance/(1000*60*60*24))
                    /**/
                   return( <div>
                        <span>
                            <Chip
                                avatar={
                                    <span style={{
                                        height: "6px",
                                        width: "6px",
                                        backgroundColor: "#6F6F6F",
                                        borderRadius: "50%",
                                        display: "inline-block"
                                    }}/>
                                }
                                size="small"
                                label={` ${days} days`}
                                style={{
                                    backgroundColor: "#E0E400",
                                    color: "#6F6F6F",
                                    fontSize: "8px",
                                    height: "14px"
                                }}/>
                               </span>
                        <br/>
                        {products[dataIndex].expDate}
                    </div>
                   )
                }
            }
        },
        {
            name: "amount",
            label: "Stock Value",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div><span>Rs.{products[dataIndex].unitPrice * products[dataIndex].quantity}</span><br/></div>
            }
        },
    ]

    const options = {
        filterType: "textField",
        selectableRows:false,
        download:true,
        print:true,
        search:false,
        responsive:"standard",
        // filter:false,
        viewColumns:true,
        customToolbar:({displayData})=>{
            return(
                <span>
                <Button style={{backgroundColor:"#E8E8E8", color:"#656565"}} variant="contained" disableElevation>
                    Import
                </Button>
                <Button
                    style={{backgroundColor:"#3D73FF", color:"white"}}
                    color='primary'
                    href="add-products"
                    variant="contained"
                    boxShadow={3}
                >
                    Add Product

                </Button>
            </span>
            )
        },
        onDownload: (buildHead, buildBody, columns, data) => {
            return "\uFEFF" + buildHead(columns) + buildBody(data);
        },
        searchText:searchValue,
        customSearch: (searchQuery, currentRow, _) => {
            let isFound = false;
            currentRow.forEach(col => {

                if(col !== undefined){
                    if (modifyStringForSearch(col.toString()).includes(modifyStringForSearch(searchQuery))) {
                        isFound = true;
                    }
                }
            });
            return isFound;
        }
    };

    //this function remove spaces from string and convert to lowercase
    const modifyStringForSearch=(searchValue)=> searchValue.replace(/\s/g,"").toLowerCase()

    const filterBox=()=>
        <div className="search">
            <div className="searchIcon">

            </div>
            <InputBase
                placeholder="Filter…"
                classes={{
                    root: "inputRoot",
                    input: "inputInput"
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={
                    /**
                     *  @param {object} e
                      */
                    (e)=>setSearchValue(e.target.value)}
            />
        </div>

// const downloadCsv=()=>{
//     console.log("clicked")
//     document.querySelector('button[title="Download CSV"]').click()
// }

    let componentRef = 0;
    return (
        <div className={classes.dataTable}>
            <Typography variant="h5" style={{padding: "0px"}}>
                Products Inventory
            </Typography>
            <MuiThemeProvider theme={getMuiTheme}>
                <MUIDataTable
                    title={filterBox()}
                    data={products}
                    columns={columns}
                    options={options}
                    ref={el => (componentRef = el)}
                />
            </MuiThemeProvider>
            <div style={{float:"right", padding:"10px"}}>
                <ReactToPrint
                    trigger={() =>
                        <Button style={{backgroundColor:"#3D73FF", color:"white"}} variant="contained" disableElevation>
                            <Print/>
                            Print
                        </Button>}
                    content={() => componentRef}
                />
                <Button
                    style={{backgroundColor:"#3D73FF", color:"white"}}
                    color='primary'
                    variant="contained"
                    boxShadow={3}
                    onClick={()=>document.querySelector('button[title="Download CSV"]').click()}
                >
                    <CloudDownload/>
                  Download
                </Button>
            </div>
        </div>
    )
}

Products.propTypes = {
    products:PropTypes.array.isRequired,
    brand: PropTypes.string,
    quantity:PropTypes.number.isRequired,
    unitPrice:PropTypes.number.isRequired,
    expDate:PropTypes.string,
}

export default Products