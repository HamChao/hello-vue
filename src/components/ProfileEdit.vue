<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>

    <!--Sending the data by model-->
    <profile-form v-model="profile" @save="save" @cancel="back"></profile-form>

    <!--Sending the data by emit-->
    <!--<profile-form @save="save"></profile-form> -->
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm'
  import { Me } from '../services'

  export default {
    components: {
      ProfileForm
    },
    data: () => ({
      profile: {
        name: '',
        description: ''
      }
    }),
    created () {
      Me.get()
        .then((user) => {
          this.profile = user || this.profile
        })
    },
    methods: {
      /**
       * Sending the data by emit
       */
      // save (data) {
      //   console.log(data)
      // }

      /**
       * Sending the data by model
       */
      save () {
        Me.set(this.profile)
          .then(() => {
            this.back()
          })
      },
      back () {
        this.$router.push('/profile')
      }
    }
  }
</script>
