import React from 'react';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Hidden from '@material-ui/core/Hidden';


import AppleIcon from '@material-ui/icons/Apple';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import Sales from '../../pages/Sales/sales';
import Purchase from '../../pages/purchase/Purchase';

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
                    <AppleIcon className={classes.icon} />
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
                                    <ListItemIcon>{index % 2 === 0 ? <ShoppingCartTwoToneIcon /> : <ShoppingBasketTwoToneIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Customer', 'Suppliars', 'Expenses', 'Report', 'Users '].map((text, index) => (
                                <ListItem button key={text} onClick={() => { history.push(`${text.toLowerCase()}`) }}>
                                    <ListItemIcon>{index % 2 === 0 ? <PeopleAltTwoToneIcon /> : <ShoppingBasketTwoToneIcon />}</ListItemIcon>
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
                        default:
                            return
                    }
                })()}


            </main>
        </div>
    );
}

export default withRouter(ClippedDrawer)