import Vue from 'vue'
import firebase from 'firebase'
import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
// import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'
import router from './router'

firebase.initializeApp({
  apiKey: 'AIzaSyCutSDBlY6JzlYjDYgwp5fhrL7ZPlu0fB8',
  authDomain: 'twitty-vue-21e0f.firebaseapp.com',
  databaseURL: 'https://twitty-vue-21e0f.firebaseio.com',
  storageBucket: 'twitty-vue-21e0f.appspot.com',
  messagingSenderId: '105418165412'
})

Vue.filter('upper', (value) =>
typeof value === 'string' ? value.toUpperCase() : value
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
