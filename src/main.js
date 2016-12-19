import Vue from 'vue'
import firebase from 'firebase'
import moment from 'moment'
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

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
