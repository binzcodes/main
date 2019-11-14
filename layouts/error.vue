<template>
  <v-app>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img
            class="white--text align-end"
            src="https://source.unsplash.com/random/500x500/"
          >
            <v-responsive :aspect-ratio="1 / 1">
              <v-card-title primary-title>
                <div>
                  <div v-text="error.statusCode" class="headline">500</div>
                  <span v-text="error.message" class="grey--text">
                    An error occured
                  </span>
                </div>
              </v-card-title>
            </v-responsive>
          </v-img>
          <v-card-actions>
            <v-btn text color="primary" nuxt to="/">Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
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
