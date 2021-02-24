import React from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import { config } from "../../config";

export default function AlertDialogSlide() {
  return (
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
