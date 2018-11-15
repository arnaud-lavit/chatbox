import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCMi55Wn7nUQrGeGdKYHW-f3pcqsSOQF6w',
    authDomain: 'chatbox-app-537a5.firebaseapp.com',
    databaseURL: 'https://chatbox-app-537a5.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base