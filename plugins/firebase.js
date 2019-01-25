import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/database'

export default ({ env }, inject) => {
  const isProd = env === 'production'

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDgrt3E_4Z7YIUx7LoBZPstQ45fe612PYI',
      authDomain: 'kcnt-countup.firebaseapp.com',
      databaseURL: 'https://kcnt-countup.firebaseio.com',
      projectId: 'kcnt-countup',
      storageBucket: '',
      messagingSenderId: '604568228239'
    })
  }

  const fireStore = firebase.firestore()
  inject('fireStore', fireStore)

  const fireDb = firebase.database()
  inject('fireDb', fireDb)
}
