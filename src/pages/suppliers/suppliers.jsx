import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { withRouter } from 'react-router-dom'

// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';


import { getSuppliers } from '../../redux/suppliers/suppliers.action'
import { suppliersSelector } from '../../redux/suppliers/suppliers.selectors'
import { CollapsibleTable } from '../../components/table/table'
import AddSuppliers from './addSuppliers'
import './suppliers.styles.scss'


const tableHeadings = ["Supplier Name", "Category", "Contact Details", "Credit Amount", "Information"]

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Suppliers({ history }) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getSuppliers()) }, [])
    const suppliers = useSelector(suppliersSelector)
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='suppliers'>
            {/* <Button color='primary' variant="contained" onClick={() => { history.push("add_suppliers") }}>Add Supplier</Button> */}
            {/* <Button color='primary' variant="contained">Import Excel File</Button> */}
            <Typography variant='h5' color='primary'>Suppliers List</Typography>

            <CollapsibleTable tableHeadings={tableHeadings} tableData={suppliers} />

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <AddSuppliers />
                    </div>
                </Fade>
            </Modal>
        </div>)
}

export default withRouter(Suppliers)