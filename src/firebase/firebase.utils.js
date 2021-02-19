import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDLb37joKvJVOcZwz-M4rp3VQLnVTrefYg",
    authDomain: "crown-9abc5.firebaseapp.com",
    projectId: "crown-9abc5",
    storageBucket: "crown-9abc5.appspot.com",
    messagingSenderId: "335051737829",
    appId: "1:335051737829:web:5a59b09df81dfb8011220c",
    measurementId: "G-TKYSL6SLHT"
  }
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    console.log({msg:'from firebase util',userAuth,additionalData})
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt= new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }



  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
