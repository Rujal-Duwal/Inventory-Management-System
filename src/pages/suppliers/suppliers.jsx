import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Chip, InputBase, Typography} from '@material-ui/core'
import { MuiThemeProvider} from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import {CloudDownload, Print} from "@material-ui/icons";
import ReactToPrint from "react-to-print";

import { getSuppliers } from '../../redux/suppliers/suppliers.action'
import './suppliers.styles.scss'
import {useStyles,overRidesMuiTheme} from "../../styles/DataTable.styles"
import {suppliersSelector} from '../../redux/suppliers/suppliers.selectors'
import FilterIcon from "../../svg/FilterIcon.svg";
import {Link} from "react-router-dom";


function Suppliers( ) {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getSuppliers()) }, [dispatch])
    const classes = useStyles();
    const getMuiTheme=overRidesMuiTheme()
    const [searchValue,setSearchValue]=useState()
    const suppliers = useSelector(suppliersSelector)

    const columns = [
        {
            name: "name",
            label: "Name" ,
            options:{
                customBodyRenderLite:(dataIndex)=>{
                    return(
                        <div style={{marginLeft:"20px"}}>
                           <span style={{fontWeight:600}}>
                               {suppliers[dataIndex].owner.name}
                           </span>
                            <br/>
                            <span style={{color:"#6e6893", fontSize:"10px"}}>
                            {suppliers[dataIndex].owner.contactNumber}
                        </span>
                        </div>)}
            }
        },
        {
            name: "companyName",
            label: "Store Name",
            options:{
                customBodyRenderLite:(dataIndex)=>
                    <div style={{colo:'red'}}>
                        <span>
                            {suppliers[dataIndex].companyName}
                        </span>
                        <br/>
                        <span style={{color:"#6e6893", fontSize:"10px"}}>
                            {suppliers[dataIndex].address}
                        </span>
                    </div>
            }
        },
        {
            name: "status",
            label: "Payment Status",
            options: {
                customBodyRenderLite: () =>
                    <div style={{colo: 'red'}}>
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
                                  label={"Paid"}
                                  style={{
                                      backgroundColor: "#E0E400",
                                      color: "#6F6F6F",
                                      fontSize: "8px",
                                      height: "14px"
                                  }}/>
                        </span>
                        <br/>
                        <span>
                        Due on 15/Apr/2020
                        </span>
                    </div>
            }
        },
        {
            name: "credit",
            label: "Amount",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div>Rs{suppliers[dataIndex].credit}</div>
            }
        }
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
        customToolbar:()=>{
            return(
                <span>
                <Button style={{backgroundColor:"#E8E8E8", color:"#656565"}} variant="contained" disableElevation>
                    Import
                </Button>
                <Button
                    style={{backgroundColor:"#3D73FF", color:"white"}}
                    color='primary'
                    component={Link}
                    to="add-supplier"
                    variant="contained"
                    boxShadow={3}
                >
                    Add Suppliers
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
                <FilterIcon/>
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

    let componentRef=""
    return (
        <div className={classes.dataTable}>
            <Typography variant="h5" style={{padding: "0px"}}>
                Suppliers
            </Typography>
            <MuiThemeProvider theme={getMuiTheme}>
                <MUIDataTable
                    title={filterBox()}
                    data={suppliers}
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
        </div>)
}

export default Suppliers