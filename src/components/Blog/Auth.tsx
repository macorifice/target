import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import { config } from "../../config";
import { Button } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

function Auth() {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
        <Button
          style={{ marginRight: 10, backgroundColor: '#EA4336' }}
          variant="outlined"
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        ><GTranslateIcon /></Button>
        <Button
          style={{ marginRight: 10, backgroundColor: '#2D88FF' }}
          variant="outlined"
          onClick={() => {
            const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(facebookAuthProvider);
          }}
        ><FacebookIcon /></Button>
        <Button
          style={{ marginRight: 10, backgroundColor: '#1B91DA' }}
          variant="outlined"
          onClick={() => {
            const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
            firebase.auth().signInWithPopup(twitterAuthProvider);
          }}
        ><TwitterIcon /></Button>       
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
                    style={{ marginRight: 10 }}
                    variant="outlined"
                    startIcon={<ExitToAppIcon/>}
                    onClick={() => {
                      firebase.auth().signOut();
                    }}
                  >
                    Sign Out
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
  );
}

export default Auth;
