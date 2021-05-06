<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card> sample </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="9">
      <doc-window />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import DocWindow from '~/components/templates/index/DocWindow.vue'
export default defineComponent({
  components: { DocWindow },
  setup() {},
})
</script>
