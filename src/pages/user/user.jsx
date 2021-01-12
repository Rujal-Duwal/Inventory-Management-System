import {Button, InputBase, Typography} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {MuiThemeProvider} from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import ReactToPrint from "react-to-print";
import {CloudDownload, Print} from "@material-ui/icons";
import PropTypes from 'prop-types';

import { getUsers } from '../../redux/users/users.action'
import { usersSelector } from '../../redux/users/users.selectors'
import {overRidesMuiTheme, useStyles} from "../../styles/DataTable.styles";
import FilterIcon from "../../svg/FilterIcon.svg";
import {Link} from "react-router-dom";


Users.propTypes = {
    users:PropTypes.array.isRequired,
    designation:PropTypes.string.isRequired,
    contactDetails:PropTypes.number.isRequired,
    createdOn:PropTypes.string.isRequired
};

export default function Users() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const getMuiTheme=overRidesMuiTheme()
    const [searchValue,setSearchValue]=useState()

    const users = useSelector(usersSelector)
    useEffect(() => { dispatch(getUsers()) }, [dispatch])

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
            name: "name",
            label: "Name" ,
            options:{
                customBodyRenderLite:(dataIndex)=>{
                    return(
                        <div style={{marginLeft:"20px"}}>
                           <span style={{fontWeight:600}}>
                               {users[dataIndex].name}
                           </span>
                        </div>)
                }
            }
        },
        {
            name: "designation",
            label: "Designation",
            options:{
                customBodyRenderLite:(dataIndex)=>
                    <div>
                        <span>
                            {users[dataIndex].designation}
                        </span>
                    </div>
            }
        },
        {
            name:"contactDetails",
            label: "Contact Details",
            options: {
                customBodyRenderLite:(dataIndex)=>
                    <div>
                        <span >
                            {users[dataIndex].contactDetails}
                        </span>
                    </div>
            }
        },
        {
            name: "username",
            label: "Username",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div>{users[dataIndex].username}</div>
            }
        },
        {
            name: "createdOn",
            label: "Created On",
            options: {
                customBodyRenderLite: (dataIndex) =>
                    <div>{users[dataIndex].createdOn}</div>
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
                        to="add-user"
                        variant="contained"
                        boxShadow={3}
                    >

                        Add Users
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
        <div className='users'>
            <div className={classes.dataTable}>
                <Typography variant="h5" style={{padding: "0px"}}>
                    Users
                </Typography>
                <MuiThemeProvider theme={getMuiTheme}>
                    <MUIDataTable
                        title={filterBox()}
                        data={users}
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
    )
}