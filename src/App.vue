<template>
<div>
  <navbar></navbar>
  <div class="ui text container content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import '../node_modules/semantic-ui-css/semantic.min.css';
.content {
  padding-top: 100px;
  padding-bottom: 30px;
}
</style>
