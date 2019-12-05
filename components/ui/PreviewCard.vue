<template>
  <v-card tile flat>
    <v-img :src="imgSrc" :lazy-src="lazyImgSrc" aspect-ratio="2">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    imgSrc: {
      type: String,
      default: 'background.svg'
    },
    lazyImgSrc: {
      type: String,
      default: 'background.svg'
    }
  }
}
</script>

<style scoped></style>
