<template>
  <v-card :to="article.link" v-editable="article" tile flat nuxt height="100%">
    <v-img
      :src="article.imgSrc | imageService('600x300')"
      :lazy-src="article.imgSrc | imageService('60x30/filters:quality(0)')"
      aspect-ratio="2"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-text>
      <h3 v-text="article.title" class="headline"></h3>
      <p v-text="article.description" class="body-1"></p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: ['article']
}
</script>

<style scoped></style>
