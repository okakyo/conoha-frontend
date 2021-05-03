<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="9" xl="6">
      <v-card outlined class="pa-3">
        <v-row wrap>
          <v-col cols="6" md="4" xl="3">
            <v-card>
              <v-img src="https://placehold.jp/150x150.png" />
              <v-card-title> sample </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  components: {},
  setup() {},
})
</script>
