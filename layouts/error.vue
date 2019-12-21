<template>
  <v-app>
    <v-container>
      <hero-sheet :title="statusCode.toString()" title-class="error--text">
        <v-card-subtitle
          v-text="message"
          class="px-0 headline display--massive-sub font-weight-light"
        >
        </v-card-subtitle>
        <v-card-actions class="px-0">
          <v-btn outlined color="success" nuxt to="/" tile large>
            Take me back
          </v-btn>
        </v-card-actions>
      </hero-sheet>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'default',
  components: {
    HeroSheet: () => import('~/components/ui/HeroSheet.vue')
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode ? this.error.statusCode : 500
    },
    message() {
      return this.error && this.error.message
        ? this.error.message
        : 'An error occurred'
    }
  },
  methods: {
    openSentry() {
      window.open('https://sentry.io/', '_blank')
    }
  }
}
</script>
