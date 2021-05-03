<template>
  <v-app>
    <the-header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/components/molecules/header/TheHeader.vue'

export default Vue.extend({
  components: { TheHeader },
  data() {
    return {}
  },
})
</script>
