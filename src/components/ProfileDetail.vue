<template>
  <div>
    <img :src="profile.photo" class="ui image small rounded">
    <h4>Name:</h4> {{ profile.name | upper }}
    <h4>Description:</h4> {{ profile.description }}
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>
