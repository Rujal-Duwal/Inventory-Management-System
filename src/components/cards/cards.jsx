import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 160,
    },
    media: {
        height: 120,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://th.bing.com/th/id/OIP.VWjqYIfH6dcDVfWx4cm6jgHaHa?w=174&h=180&c=7&o=5&dpr=1.35&pid=1.7"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom >Instant noodles</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
