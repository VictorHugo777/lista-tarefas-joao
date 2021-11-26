import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkRrchG0VcJSo6yqTo-eiP2mR15QxlAs4",
  authDomain: "todo-list-vue-e6147.firebaseapp.com",
  projectId: "todo-list-vue-e6147",
  storageBucket: "todo-list-vue-e6147.appspot.com",
  messagingSenderId: "653147780912",
  appId: "1:653147780912:web:6236d47c8b097a37b57af5"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}