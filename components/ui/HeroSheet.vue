<template>
  <v-row class="big-text-row">
    <v-col cols="12" sm="12">
      <v-card color="transparent" flat tile>
        <v-card-title
          v-text="title"
          :class="titleClass"
          class=" pb-12 display-massive px-0"
        >
        </v-card-title>
        <slot></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeroSheet',
  props: {
    title: {
      type: String,
      default: 'bınz'
    },
    titleClass: {
      type: String,
      default: 'primary--text'
    }
  }
}
</script>

<style scoped>
.display-massive {
  text-transform: lowercase;
  line-height: 1.2em;
  font-size: 15em !important;
  font-family: 'Share Tech', 'Montserrat', 'Roboto', '-apple-system',
    'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: -0.07em;
  text-indent: -0.08em;
}
.big-text-row {
  margin-bottom: 20vh;
}
</style>
