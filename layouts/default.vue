<template>
  <v-app>
    <!-- nav goes here -->
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>Binns Ltd ©{{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: true,
      year: new Date().getFullYear()
    }
  }
}
</script>
