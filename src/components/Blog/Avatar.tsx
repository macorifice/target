import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed } from '@react-firebase/auth';
import firebase from 'firebase';
import { config } from '../../config';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const SmallAvatar = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }),
)(Avatar);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
  }),
);

export default function BadgeAvatars() {
  const classes = useStyles();

  return (
    <>
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <>
                <div className={classes.root}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.large} alt={user?.displayName} src={user?.photoURL} />
                </StyledBadge>
              </div>
              </>
          );
        }}
      </FirebaseAuthConsumer>
      {/* <IfFirebaseAuthed>
        {() => {
          return (
            <Button
              style={{ marginRight: 10 }}
              variant="outlined"
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              Sign Out
            </Button>
          );
        }}
      </IfFirebaseAuthed> */}
      {/* <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd> */}
    </FirebaseAuthProvider>


    </>
  );
}