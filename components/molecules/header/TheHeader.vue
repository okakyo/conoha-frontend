<template functional>
  <v-app-bar>
    <nuxt-link exact to="/"> Title </nuxt-link>
    <v-spacer />
    <v-avatar> </v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    img: {
      type: String,
      required: false,
    },
  },
})
</script>
