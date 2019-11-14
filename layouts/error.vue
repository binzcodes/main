<template>
  <v-app>
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" src="/icon.png">
              <v-card-title v-text="error.statusCode">500</v-card-title>
            </v-img>
            <v-card-subtitle v-text="error.message" class="grey--text">
              An error occured
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="primary" nuxt to="/">Back</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
