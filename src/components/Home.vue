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
      <tweet-segment :tweet="tweet" v-for="tweet in list"></tweet-segment>
    </div>
  </div>
</template>

<script>
import TweetSegment from './TweetSegment'
import { Tweet, User } from '../services'

export default {
  components: {
    TweetSegment
  },
  data: () => ({
    input: '',
    posting: false,
    tweets: [],
    users: {}
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list.reduce((p, v) => {
        p[v.$id] = v
        return p
      }, {})
    })
  },
  computed: {
    list () {
      return this.tweets.map((tweet) => {
        return {
          ...tweet,
          user: this.users[tweet.owner]
        }
      })
    }
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
    }
  }
}
</script>
