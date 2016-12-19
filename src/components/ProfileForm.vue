<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Photo</label>
      <img v-if="photo" :src="photo" class="ui image small rounded">
      <div @click="openUpload" class="ui green button">Upload</div>
    </div>
    <div class="field">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="description">
    </div>
    <button class="ui submit blue button">Save</button>
    <button class="ui red button" type="button" @click="cancel">Cancel</button>
    <upload-modal ref="upload" @success="uploaded"></upload-modal>
  </form>
</template>

<script>
  import UploadModal from './UploadModal'

  export default {
    components: {
      UploadModal
    },
    props: ['value'],
    data: () => ({
      name: '',
      description: '',
      photo: ''
    }),
    created () {
      this.name = this.value.name
      this.description = this.value.description
      this.photo = this.value.photo
    },
    watch: {
      value () {
        this.name = this.value.name
        this.description = this.value.description
        this.photo = this.value.photo
      }
    },
    methods: {
      save () {
        /**
         * Sending the data by model
         */
        this.$emit('input', {
          name: this.name,
          description: this.description,
          photo: this.photo
        })
        this.$emit('save')

        /**
         * Sending the data by emit
         */
        // this.$emit('save', {
        //   name: this.name,
        //   description: this.description
        // })
      },
      cancel () {
        this.$emit('cancel')
      },
      openUpload () {
        this.$refs.upload.open()
      },
      uploaded (url) {
        this.photo = url
      }
    }
  }
</script>
