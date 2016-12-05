<template>
  <div>
    <h1 class="ui center aligned header">
      Home Page
    </h1>
    <div class="ui hidden divider"></div>
    <twit></twit>
  </div>
</template>

<script>
import Twit from './Twit'

export default {
  components: {
    Twit
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
