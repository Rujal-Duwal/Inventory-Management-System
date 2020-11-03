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
    Hidden
} from '@material-ui/core';
import {
    Apple,
    ShoppingCartTwoTone,
    ShoppingBasketTwoTone,
    PeopleAltTwoTone
} from '@material-ui/icons';

import Sales from '../../pages/Sales/sales';
import Purchase from '../../pages/purchase/Purchase';
import Expenses from '../../pages/expenses/expenses';

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
}));

function ClippedDrawer({ body, history }) {
    const classes = useStyles();

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
                            {['Sales', 'Purchase'].map((text, index) => (
                                <ListItem button key={text} onClick={() => { history.push(`${text.toLowerCase()}`) }}>
                                    <ListItemIcon>{index % 2 === 0 ? <ShoppingCartTwoTone /> : <ShoppingBasketTwoTone />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Customer', 'Suppliars', 'Expenses', 'Report', 'Users '].map((text, index) => (
                                <ListItem button key={text} onClick={() => { history.push(`${text.toLowerCase()}`) }}>
                                    <ListItemIcon>{index % 2 === 0 ? <PeopleAltTwoTone /> : <ShoppingBasketTwoTone />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <Toolbar />
                {(() => {
                    switch (body) {
                        case 'SALES':
                            return (<Sales />);

                        case 'PURCHASE':
                            return (<Purchase />)
                        case 'EXPENSES':
                            return (<Expenses />)
                        default:
                            return
                    }
                })()}


            </main>
        </div>
    );
}

export default withRouter(ClippedDrawer)