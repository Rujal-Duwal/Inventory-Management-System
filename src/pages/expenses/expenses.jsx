import React, {useState,useEffect} from 'react';
import {Button, InputBase, Typography} from "@material-ui/core";
import {MuiThemeProvider} from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import ReactToPrint from "react-to-print";
import {CloudDownload, Print} from "@material-ui/icons";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {overRidesMuiTheme, useStyles} from "../../styles/DataTable.styles";
import FilterIcon from "../../svg/FilterIcon.svg";
import { getExpensess } from '../../redux/expenses/expenses.selector'
import { getExpenses  } from '../../redux/expenses/expenses.action'

Expenses.propTypes = {

};

function Expenses(props) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const getMuiTheme=overRidesMuiTheme()
    const [searchValue,setSearchValue]=useState()
    const expenses = useSelector(getExpensess)

    useEffect(() => { dispatch(getExpenses()) }, [dispatch])

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

    const columns = [
        {
            name: "category",
            label: "category" ,
            options:{
                customBodyRenderLite:(dataIndex)=>{
                    return(
                        <div style={{marginLeft:"20px"}}>
                           <span style={{fontWeight:600}}>
                               {expenses[dataIndex].category}
                           </span>
                        </div>)
                }
            }
        },
        {
            name: "cost",
            label: "Cost",
            options:{
                customBodyRenderLite:(dataIndex)=>
                    <div>
                        <span>
                            {expenses[dataIndex].cost}
                        </span>
                    </div>
            }
        },
        {
            name:"date",
            label: "Date",
            options: {
                customBodyRenderLite:(dataIndex)=>
                    <div>
                        <span style={{fontWeight:600}}>
                            {expenses[dataIndex].date}
                        </span>
                    </div>
            }
        },
        {
            name: "amount",
            label: "Total Amount",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div>Rs {expenses[dataIndex].totalAmount}</div>
            }
        }
    ]

    const options = {
        filterType: "textField",
        selectableRows:false,
        search:false,
        responsive:"standard",
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
                        to="add-expense"
                        variant="contained"
                        boxShadow={3}
                    >
                        Add Expenses
                    </Button>
                </span>
            )
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

    let componentRef=""
    return (
        <div className="expenses">
            <div className={classes.dataTable}>
                <Typography variant="h5" style={{padding: "0px"}}>
                    Expenses
                </Typography>
                <MuiThemeProvider theme={getMuiTheme}>
                    <MUIDataTable
                        title={filterBox()}
                        data={expenses}
                        columns={columns}
                        options={options}
                        ref={el => (componentRef = el)}
                    />
                </MuiThemeProvider>
                <div style={{float:"right", padding:"10px"}}>
                    <ReactToPrint
                        trigger={() =>
                            <Button
                                style={{backgroundColor:"#3D73FF", color:"white"}}
                                variant="contained"
                                disableElevation
                            >
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
        </div>
    );
}

export default Expenses;