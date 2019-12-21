<template>
  <v-row class="pb-6">
    <v-col cols="3" sm="1" class="d-flex py-0 pl-sm-0">
      <v-img
        :src="
          'http://a.storyblok.com/f/71569/3456x3456/47f56a218a/my-photo.jpg'
            | imageService('96x0')
        "
        :lazy-src="
          'http://a.storyblok.com/f/71569/3456x3456/47f56a218a/my-photo.jpg'
            | imageService('10x0')
        "
        class="my-auto"
        aspect-ratio="1"
        max-width="62px"
        alt="John"
        style="border-radius: 50%"
      />
    </v-col>
    <v-col cols="9" sm="10">
      <span class="headline font-weight-light">Ryan Binns</span>
      <br />
      <span v-text="articleInformation" class="caption"></span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticleAuthor',
  props: ['date', 'readingTime'],
  computed: {
    articleInformation() {
      const formattedDate = new this.$moment(this.date).format('Do MMMM YYYY')
      if (!this.readingTime) return formattedDate
      return `${formattedDate} · ${this.readingTime} minute read`
    }
  }
}
</script>

<style scoped></style>
