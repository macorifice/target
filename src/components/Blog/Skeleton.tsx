import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      margin: theme.spacing(2),
    },
    media: {
      height: 190,
    },
  }),
);

interface MediaProps {
  description?: string;
  backgroundImg?: string;
  subheader?: string;
  avatar?: string;
  title?: string;
  loading?: boolean;
}

export default function Media(props: MediaProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          props.loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <Avatar
              alt="avatar"
              src={props.avatar}
            />
          )
        }
        action={
          props.loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={props.loading ? <Skeleton height={6} width="80%" /> : props.title}
        subheader={props.loading ? <Skeleton height={6} width="40%" /> : props.subheader}
      />
      {props.loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image={props.backgroundImg}
          title={props.title}
        />
      )}
      <CardContent>
        {props.loading ? (
          <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              props.description
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}