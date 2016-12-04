<template>
<div>
  <navbar></navbar>
  <div class="ui text container content">
    <router-view></router-view>
  </div>
  <!-- <input v-model="name">
    <hello :name="name"></hello> -->
</div>
</template>

<script>
// import Hello from './components/Hello'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
  // components: {
  //   Hello
  // }
  // data () {
  //   return {
  //     name: '',
  //     lists: [
  //       1, 2, 3, 4, 5
  //     ]
  //   }
  // },
  // methods: {
  //   sayHello (value) {
  //     window.alert('Hi, ' + value)
  //   }
  // }
}
</script>

<style>
@import '../node_modules/semantic-ui-css/semantic.min.css';
.content {
  padding-top: 70px;
  padding-bottom: 30px;
}
</style>
