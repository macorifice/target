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
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Auth() {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
        <Button
          style={{ marginRight: 10, backgroundColor: '#DC4C39', color: '#fff' }}
          variant="outlined"
          startIcon={<GTranslateIcon/>}
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Continue with Google
        </Button>
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
