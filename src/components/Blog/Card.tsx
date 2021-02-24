import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { Avatar, CardActionArea, CardHeader } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PostMenu from "./PostMenu";
import BadgeAvatars from "./Avatar";
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: 'justify',
	paddingTop : '10px',
	fontSize : '0.95rem',
	lineHeight: '150%',
  },
  card: {
    display: "flex",
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
  thumbUp: {
    "&:hover": {
      transform: "scale(1.5) rotate(360deg)",
      transition: "all .2s ease-in-out",
    },
  },
  share: {
    color: blue[300],
    "&:hover": {
      transform: "scale(1.5)",
      transition: "all .2s ease-in-out",
    },
  },
  edit: {
    color: "yellow",
    "&:hover": {
      transform: "scale(1.5)",
      transition: "all .2s ease-in-out",
    },
  },
  delete: {
    "&:hover": {
      transform: "scale(1.5)",
      transition: "all .2s ease-in-out",
    },
  },
  postDateDay: {
    position: "relative",
    left: "1px",
    bottom: "-30px",
    fontSize: "5rem",
    color: "#C3C3C3",
  },
  postDateMonth: {
    position: "relative",
    left: "10px",
    bottom: "-10px",
    fontSize: "1rem",
    color: "#C3C3C3",
  },
});

export default function SimpleCard(props: any) {
  const classes = useStyles();
  
  return (
    <CardActionArea component="a">
      <Card className={classes.root}>
        <CardHeader style={{
            	paddingTop : '15px'
        }}
          avatar={<BadgeAvatars />}
          action={
              // <PostMenu />
              <>
              <Chip
                avatar={<Avatar>{props.category.charAt(0)}</Avatar>}
                label={props.category}
                clickable
                color="primary"
                // onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              />
              {/* <Chip style={{marginLeft: '10px'}}
                avatar={<Avatar>{props.secondCategory.charAt(0)}</Avatar>}
                label={props.secondCategory}
                clickable
                color="secondary"
                // onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
              /> */}
              </>
          }
          title={props.title}
          subheader={props.description}
        />
        <CardContent>
          <Typography className={classes.pos} color="textPrimary">
            {props.longDescription}
          </Typography>
          <Typography
            className={classes.postDateDay}
            color="textSecondary"
            gutterBottom
          >
            {new Date(props.createdAt).toLocaleString("default", {
              weekday: "long",
            })}
          </Typography>
          <Typography
            className={classes.postDateMonth}
            color="textSecondary"
            gutterBottom
          >
            {new Date(props.createdAt).toLocaleString("default", {
              day: "numeric",
            })}{" "}
            {new Date(props.createdAt).toLocaleString("default", {
              month: "long",
            })}{" "}
            {", "}
            {new Date(props.createdAt).toLocaleString("default", {
              year: "numeric",
            })}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <div style={{ marginLeft: " 250px" }}>
            <div
              style={{
                display: "inline",
                listStyle: "none",
                paddingRight: "40px",
              }}
            >
              <Button
                startIcon={<ThumbUpIcon className={classes.thumbUp} />}
                color="primary"
              ></Button>
            </div>
            <div
              style={{
                display: "inline",
                listStyle: "none",
                paddingRight: "40px",
              }}
            >
              <Button
                startIcon={<EditIcon className={classes.edit} />}
              ></Button>
            </div>
            <div
              style={{
                display: "inline",
                listStyle: "none",
                paddingRight: "40px",
              }}
            >
              <Button
                startIcon={<ShareIcon className={classes.share} />}
              ></Button>
            </div>
            <div
              style={{
                display: "inline",
                listStyle: "none",
                paddingRight: "40px",
              }}
            >
              <Button
                startIcon={<DeleteForeverIcon className={classes.delete} />}
                color="secondary"
              ></Button>
            </div>
          </div>
        </CardActions> */}
      </Card>
    </CardActionArea>
  );
}
