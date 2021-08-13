import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDxLPG-_dI0RSGVX9mz5-0bSD5rzJCWVxg',
  authDomain: 'instagram-clone-dbb5e.firebaseapp.com',
  projectId: 'instagram-clone-dbb5e',
  storageBucket: 'instagram-clone-dbb5e.appspot.com',
  messagingSenderId: '353594805554',
  appId: '1:353594805554:web:d0c23544586ada6f51db2b'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore();

export { firebase, FieldValue };
