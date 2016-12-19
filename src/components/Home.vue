<template>
  <div>
    <div class="ui basic segment">
      <div class="ui segment">
        <form class="ui form" @submit.prevent="post">
          <div class="field">
            <textarea v-model.trim="input">
          </div>
          <button class="ui blue button" :class="{ 'loading disabled': posting }">Post</button>
        </form>
      </div>
      <div v-for="tweet in tweets" class="ui segment">
        <div>
          <img class="ui avatar image" :src="findUserPhoto(tweet.owner)">
          {{ findUserName(tweet.owner) }} - {{ tweet.timestamp | fromNow }}
        </div>
        {{ tweet.content }}
      </div>
    </div>
    <h1 class="ui center aligned header">
      Home Page
    </h1>
    <div class="ui hidden divider"></div>
    <twit></twit>
  </div>
</template>

<script>
import Twit from './Twit'
import { Tweet, User } from '../services'

export default {
  components: {
    Twit
  },
  data: () => ({
    input: '',
    posting: false,
    tweets: [],
    users: []
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list
    })
  },
  methods: {
    post () {
      if (!this.input) return
      this.posting = true
      // request to firebase
      Tweet.post(this.input)
      .then(() => {
        this.input = ''
        this.posting = false
      })
    },
    findUserName (id) {
      const user = this.users.find(prop => prop.$id === id)
      return user ? user.name : ''
    },
    findUserPhoto (id) {
      const user = this.users.find(prop => prop.$id === id)
      return user ? user.photo : ''
    }
  }
}
</script>
