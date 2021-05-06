<template>
  <v-card outlined class="pa-4">
    <v-row wrap>
      <v-col v-for="i in 6" :key="i" cols="6" md="4" xl="3">
        <v-card nuxt to="/articles">
          <v-img src="https://placehold.jp/150x150.png" />
          <v-card-title> sample </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  components: {},
  setup() {},
})
</script>
