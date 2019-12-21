<template>
  <span v-html="tagsParsed" class="overline"></span>
</template>

<script>
export default {
  name: 'ArticleOverlineTags',
  props: ['tags'],
  computed: {
    tagsParsed() {
      if (!this.tags) return null
      return this.tags.join(' · ')
    }
  }
}
</script>
