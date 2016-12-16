<template>
  <div>
    User: {{ this.$route.params.id }}
    <profile-detail :profile="profile"></profile-detail>
  </div>
</template>

<script>
  import { User } from '../services'
  import ProfileDetail from './ProfileDetail'

  export default {
    components: {
      ProfileDetail
    },
    data: () => ({
      profile: {}
    }),
    created () {
      this.reload()
    },
    watch: {
      $route: 'reload'
    },
    methods: {
      reload () {
        User.subscribe(this.$route.params.id, (user) => {
          this.profile = user || this.profile
        })
      }
    }
  }
</script>
