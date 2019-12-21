<template>
  <v-row class="pb-6">
    <v-col cols="12" class="pa-0">
      <v-img
        :src="image"
        :lazy-src="image | imageService(lazyImageOptions)"
        :aspect-ratio="imageAspectRatio"
      ></v-img>
    </v-col>
    <v-col v-if="caption" cols="12" sm="10" offset-sm="1">
      <span class="d-flex flex-row-reverse caption grey--text text-darken-2">
        {{ caption }}
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticleImage',
  props: ['image', 'caption'],
  computed: {
    imageAspectRatio() {
      if (this.$vuetify.breakpoint.mdAndUp) return 4
      if (this.$vuetify.breakpoint.smAndUp) return 3
      return 2
    },
    lazyImageOptions() {
      return `${10 * this.imageAspectRatio}x10` // TODO: is this the right way around?
    }
  }
}
</script>

<style scoped></style>
