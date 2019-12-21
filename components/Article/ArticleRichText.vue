<template>
  <v-row v-editable="blok">
    <v-col cols="12" sm="10" md="8" lg="6" offset-sm="1">
      <div v-html="parsed" class="rich-text"></div>
    </v-col>
  </v-row>
</template>

<script>
import { richText } from '@/plugins/richText'
export default {
  name: 'ArticleRichText',
  props: ['blok'],
  computed: {
    parsed() {
      return this.blok.content ? richText().render(this.blok.content) : ''
    }
  }
}
</script>

<style>
li.p {
  padding-bottom: 0 !important;
}
</style>
