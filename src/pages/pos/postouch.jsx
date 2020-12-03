import { AppBar, Grid, Paper, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import MediaCard from '../../components/cards/cards';
import Bill from '../../components/bill/BillPosTouch';


const useStyles = makeStyles((theme) => ({
    pos: {
        background: '#F0FFE1',
        padding: '0px'
    },
    posBody: {
        height: '92vh'
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bill: {
        height: '100%'
    },
    category: {
        height: '100%'
    }
    // items: {
    //     height: '80vh',
    //     color: 'red',
    //     padding: '10px'
    // }

}));


export default function PosTouch() {
    const classes = useStyles();

    return (
        // <div className={`${classes.pos}`}>
        <Grid container className={classes.pos}>
            <Grid item xs='12'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">Photos</Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item container xs='12' spacing={2} className={classes.posBody}>
                <Grid item xs='8' container spacing={2}>
                    <Grid item xs='12'>
                        <Paper className={`${classes.items}`}>
                            <Box>
                                search bar
                                </Box>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                                <Grid item>
                                    <MediaCard />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs='12' >
                        <Paper className={classes.category}>category</Paper>
                    </Grid>
                </Grid>
                <Grid item xs='4'>
                    <Paper className={classes.bill}><Bill /></Paper>
                </Grid>
            </Grid>
        </Grid>
        // </div>
    )
}