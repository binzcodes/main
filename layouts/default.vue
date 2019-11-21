<template>
  <v-app>
    <!-- nav goes here -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- footer goes here -->
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
