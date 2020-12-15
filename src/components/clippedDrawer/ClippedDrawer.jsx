import React from 'react';
import { withRouter } from 'react-router-dom'
import { fade,makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
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
    Collapse,
    InputBase,
    Paper
} from '@material-ui/core';
import {
    Apple,
    ShoppingCartTwoTone,
    ShoppingBasketTwoTone,
    PeopleAltTwoTone,
    Search,
    AccountCircle,
    PermIdentity
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
import AddProduct from "../../pages/products/AddProduct";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    clippedDrawer: {
        display: 'flex',
        '& .MuiListItem-root':{
            padding:0
        },
        '& .MuiToolbar-regular':{
            minHeight:44
        },
        '& .MuiSvgIcon-root':{
            color:'beige',
            marginLeft:'10px'
        }
    },
    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#4371e9',
        color:'white'
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },

    //code for search
    search: {
        color:'black',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#E9E9E9',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        margin:'auto',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
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
        <div className={classes.clippedDrawer}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} style={{backgroundColor:'white'}}>
                <Toolbar style={{marginLeft:'30%'}}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Avatar component={Paper} elevation={4} style={{position:'absolute', right:'30px'}}>
                        <PermIdentity style={{color:'white'}}   />
                    </Avatar>
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
                    {/*rgb(85 127 238)*/}
                    {/*'#7095F6'*/}
                    <Toolbar  style={{backgroundColor:'rgb(89 135 255)'}}>
                        <Apple className={classes.icon} />
                        <Typography variant="subtitle2" noWrap>
                            My Inventory System
                        </Typography>
                    </Toolbar>
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
                                    <Collapse  in={show===text} timeout="auto" unmountOnExit addEndListener={0}>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemIcon/>
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
                        case 'ADD_PRODUCT':
                            return (<AddProduct />)
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