import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({ databaseURL: 'https://vueandfirebase-f1c0a.firebaseio.com'})
    .database()


export const dessertsRef = db.ref('desserts');
export const alcoholRef = db.ref('alcohol');