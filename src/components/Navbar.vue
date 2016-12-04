<template>
<div class="ui borderless top fixed menu">
  <div class="ui text container">
    <router-link to="/" class="header item">Twitty Vue</router-link>
    <div class="right menu">
      <router-link to="/about" class="item">About</router-link>
      <div class="ui dropdown item">
        Username
        <i class="dropdown icon"></i>
        <div class="menu transition hidden">
          <a class="item">Profile</a>
          <a class="item">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted () {
    $('.ui.dropdown').dropdown()
  }
}
</script>
