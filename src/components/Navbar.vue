<template>
  <!-- <div class="ui massive menu"> -->
    <!-- <a class="active item"> -->
      <!-- Home -->
    <!-- </a> -->
    <!-- <a class="item"> -->
      <!-- Messages -->
    <!-- </a> -->
    <!-- <div class="right menu"> -->
      <!-- <div class="ui dropdown item"> -->
        <!-- Language <i class="dropdown icon"></i> -->
        <!-- <div class="menu"> -->
          <!-- <a class="item">English</a> -->
          <!-- <a class="item">Russian</a> -->
          <!-- <a class="item">Spanish</a> -->
        <!-- </div> -->
      <!-- </div> -->
      <!-- <div class="item"> -->
          <!-- <div class="ui primary button">Sign Up</div> -->
      <!-- </div> -->
    <!-- </div> -->
  <!-- </div> -->
<div class="ui massive borderless top fixed menu ">
  <div class="ui container">
    <router-link to="/" class="header item">Twitty Vue</router-link>
    <div class="right menu">
      <router-link to="/user/1" class="item" active-class="active">User</router-link>
      <router-link to="/about" class="item" active-class="active">About</router-link>
      <div class="item">
        <router-link v-if="!currentUser" to="/login" class="ui primary button" active-class="active">Log In</router-link>
      </div>
      <div v-if="currentUser" ref="dropdown" class="ui dropdown item">
        <img :src="currentUser.photoURL" class="ui rounded image mini">
        <i class="dropdown icon"></i>
        <div class="menu transition hidden">
          <router-link to="profile" class="item" active-class="active">Profile</router-link>
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
    currentUser: {}
  }),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(`current user: ${JSON.stringify(user)}`)
      this.currentUser = user
    })
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
      this.$router.replace('/')
    }
  },
  updated () {
    $(this.$refs.dropdown).dropdown()
  }
}
</script>
