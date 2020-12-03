import React from 'react';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    Collapse
} from '@material-ui/core';
import {
    Apple,
    ShoppingCartTwoTone,
    ShoppingBasketTwoTone,
    PeopleAltTwoTone
} from '@material-ui/icons';

import Sales from '../../pages/sales/sales';
import Purchase from '../../pages/purchase/Purchase';
import Expenses from '../../pages/expenses/expenses';
import Suppliers from '../../pages/suppliers/suppliers';
import Users from '../../pages/user/user';
import Customers from '../../pages/customers/customers';
import Products from '../../pages/products/products';
import AddSuppliers from '../../pages/suppliers/addSuppliers';
import Pos from '../../pages/pos/postouch';
import AddCustomer from "../../pages/customers/AddCustomer";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

let show
function ClippedDrawer({ body, history }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = (title) => {
        show=title
        setOpen(!open)
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Apple className={classes.icon} />
                    <Typography variant="h6" noWrap>
                        Inventory Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <Hidden smDown>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            {['POS', 'Sales', 'Purchase'].map((text, index) => (
                                <ListItem button key={text} onClick={() => { history.push(`${text.toLowerCase()}`) }}>
                                    <ListItemIcon>{index % 2 === 0 ? <ShoppingCartTwoTone /> : <ShoppingBasketTwoTone />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Customers', 'Suppliers', 'Products', 'Expenses', 'Report', 'Users'].map((text, index) => (
                                <>
                                    <ListItem button key={text} onClick={() => { history.push(`${text.toLowerCase()}`) }}>
                                        <ListItemIcon>{index % 2 === 0 ? <PeopleAltTwoTone /> : <ShoppingBasketTwoTone />}</ListItemIcon>
                                        <ListItemText primary={text} onClick={()=>handleClick(text)} />
                                    </ListItem>
                                    {console.log(show)}
                                    <Collapse  in={show===text} timeout="auto" unmountOnExit addEndListener={0}>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemText primary={`Add ${text}`} key={`Add ${text}`} onClick={()=>{history.push(`add-${text.toLowerCase()}`)}}/>
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <Toolbar style={{    minHeight: 44 }}/>
                {(() => {
                    switch (body) {
                        case 'POS':
                            return (<Pos />);
                        case 'SALES':
                            return (<Sales />);
                        case 'PURCHASE':
                            return (<Purchase />)
                        case 'CUSTOMERS':
                            return (<Customers />)
                        case 'ADD_CUSTOMER':
                            return (<AddCustomer />)
                        case 'SUPPLIERS':
                            return (<Suppliers />)
                        case 'ADD_SUPPLIERS':
                            return (<AddSuppliers />)
                        case 'PRODUCTS':
                            return (<Products />)
                        case 'EXPENSES':
                            return (<Expenses />)
                        case 'USERS':
                            return (<Users />)
                        default:
                            return
                    }
                })()}


            </main>
        </div>
    );
}

export default withRouter(ClippedDrawer)