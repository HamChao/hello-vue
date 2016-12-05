<template>
<div class="ui massive borderless top fixed menu ">
  <div class="ui container">
    <router-link to="/" class="header item">Twitty Vue</router-link>
    <div class="right menu">
      <router-link to="/user/1" class="item" active-class="active">User</router-link>
      <router-link to="/about" class="item" active-class="active">About</router-link>
      <div v-if="!currentUser" class="item">
        <router-link to="/login" class="ui primary button" tag="div" active-class="active">Log In</router-link>
      </div>
      <div v-if="currentUser" ref="dropdown" class="ui dropdown item">
        <img :src="currentUser.photoURL" class="ui rounded image mini">
        <i class="dropdown icon"></i>
        <div class="menu transition hidden">
          <router-link to="/profile" class="item" active-class="active">Profile</router-link>
          <a @click="logOut" class="item">Log Out</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(`current user: ${JSON.stringify(user)}`)
      this.currentUser = user
    })
  },
  updated () {
    this.dropdownInit()
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
      this.$router.replace('/')
    },
    dropdownInit () {
      $(this.$refs.dropdown).dropdown()
    }
  }
}
</script>
