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
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  components: {},
  props: {
    img: {
      type: String,
      required: false,
    },
  },
  setup() {},
})
</script>
