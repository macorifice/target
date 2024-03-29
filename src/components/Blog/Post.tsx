import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Avatar from "./Avatar";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import SnackBar from "./SnackBar";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
} from "@react-firebase/auth";
import firebase from "firebase";
import { config } from "../../config";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Select from "./Select";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputTitle: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "55ch",
      },
    },
  },
  inputDesc: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
  inputLongDesc: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "55ch",
      },
    },
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [success, setsuccess] = useState(false);
  const [failed, setfailed] = useState(false);
  const [openSnackSuccess, setopensnacksuccess] = useState(false);
  const [openSnackFailed, setopensnackfailed] = useState(false);
  const [state, setstate] = useState({
    title: "",
    description: "",
    longDescription: "",
    published: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onPost = async () => {
    try {
      await axios.post(`https://the-social-target.com/api/posts`, {
        title: state.title,
        description: state.description,
        longDescription: state.longDescription,
        fk_category: category,
        published: true,
      });
      setsuccess(true);
      setopensnacksuccess(true);
      setTimeout(() => {
        setopensnacksuccess(false);
        setOpen(false);
      }, 2500);
    } catch (error) {
      setfailed(true);
      setopensnackfailed(true);
      setTimeout(() => {
        setopensnackfailed(false);
      }, 2500);
    }
  };

  const [category, setcategory] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value)
    setcategory(event.target.value as string);
  };

  return (
    <>
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre>
                {/* {JSON.stringify({ isSignedIn, user, providerId }, null, 2)} */}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <IfFirebaseAuthed>
          {() => {
            return (
              <Button
                variant="outlined"
                color="primary"
                startIcon={<PostAddIcon/>}
                onClick={handleClickOpen}
              >
                Post
              </Button>
            );
          }}
        </IfFirebaseAuthed>
        {/* <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd> */}
      </FirebaseAuthProvider>
      {success && (
        <SnackBar
          open={openSnackSuccess}
          message={"Post pubblicato con successo !!!"}
        />
      )}
      {failed && (
        <SnackBar
          open={openSnackFailed}
          message={`Ops, c'è stato qualche errore`}
        />
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <InputBase
              placeholder="Title for your feed..."
              onChange={(e) => setstate({ ...state, title: e.target.value })}
              classes={{
                root: classes.inputRoot,
                input: classes.inputTitle,
              }}
              inputProps={{ "aria-label": "title" }}
            />
          </div>
        </DialogTitle>
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar />
          <InputBase
            placeholder="Short description for your feed..."
            onChange={(e) =>
              setstate({ ...state, description: e.target.value })
            }
            classes={{
              root: classes.inputRoot,
              input: classes.inputDesc,
            }}
            inputProps={{ "aria-label": "description" }}
          />
          
        </div>
        <Select handleChange={handleChange} category={category}/>
        <DialogContent>
          <DialogContentText
            style={{ opacity: "80%" }}
            id="alert-dialog-slide-description"
          >
            <InputBase
              placeholder="Your feed..."
              onChange={(e) =>
                setstate({ ...state, longDescription: e.target.value })
              }
              classes={{
                root: classes.inputRoot,
                input: classes.inputLongDesc,
              }}
              inputProps={{ "aria-label": "feed" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={onPost} variant="outlined" color="secondary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
