<template>
  <v-app>
    <the-header />
    <v-main app>
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
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { mdiAccount } from '@mdi/js'
import TheHeader from '~/components/molecules/header/TheHeader.vue'
export default defineComponent({
  components: { TheHeader },
  setup() {
    const headerIcon = ref(mdiAccount)
    return {
      headerIcon,
    }
  },
})
</script>
