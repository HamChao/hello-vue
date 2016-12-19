<template>
  <div class="ui segment">
    <div v-if="tweet.user">
      <img class="ui avatar image" :src="tweet.user.photo">
      {{ tweet.user.name }} - {{ tweet.timestamp | fromNow }}
    </div>
    {{ tweet.content }}
  </div>
</template>

<script>
export default {
  props: ['tweet']
}
</script>
