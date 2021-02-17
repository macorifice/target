import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { Avatar, CardActionArea, CardHeader } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import PostMenu from './PostMenu';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 15
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

export default function SimpleCard(props: any) {
    const classes = useStyles();

    return (
        <CardActionArea component="a">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar src="https://www.fakeavatar.com/wp-content/uploads/2018/02/FinEyesOpenShut-480x480.jpg" className={classes.avatar}>
                            
                        </Avatar>
                    }
                    action={
                        <PostMenu />
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {moment(props.createdAt).format('ll')}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.longDesc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button startIcon={<ThumbUpIcon/>} color='secondary' size="large"></Button>
                    <Button startIcon={<ShareIcon/>} color='primary' size="large"></Button>
                </CardActions>
            </Card>
        </CardActionArea>
    );
}