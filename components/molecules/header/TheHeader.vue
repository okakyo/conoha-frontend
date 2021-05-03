<template functional>
  <v-app-bar app>
    <nuxt-link
      style="text-decoration: none"
      class="headline white--text"
      exact
      to="/"
      >タイトル</nuxt-link
    >
    <v-spacer />
    <v-avatar>
      <v-img v-if="img" />
      <v-icon v-else />
    </v-avatar>
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
