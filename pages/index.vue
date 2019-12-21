<template>
  <v-container>
    <HeroSheet :title="title">
      <v-card-subtitle class="px-0 headline font-weight-light">
        <p>
          Software Engineer, DevOps guy and Digital Nomad
        </p>
        <p>
          I make cloud-native web applications while backpacking, mostly with
          Node.js
        </p>
      </v-card-subtitle>
    </HeroSheet>
    <v-row>
      <v-col
        v-editable="articles"
        v-for="article in articles"
        :key="article.uuid"
        cols="12"
        sm="6"
        md="4"
      >
        <articlePreview :article="article"></articlePreview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    HeroSheet: () => import('~/components/ui/HeroSheet'),
    ArticlePreview: () => import('~/components/Article/ArticlePreview')
  },
  data() {
    return {
      title: 'bınz',
      articles: []
    }
  },
  asyncData(context) {
    let editMode = false

    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }
      editMode = true
    }
    const version = editMode ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories/', {
        version,
        starts_with: 'blog/'
      })
      .then(res => {
        return {
          articles: res.data.stories.map(story => {
            return {
              uuid: story.slug,
              title: story.content.title,
              tags: story.tag_list.slice(0, 5),
              imgSrc: story.content.hero_image,
              imgCaption: story.content.hero_image_caption,
              icon: null,
              preview: story.content.preview,
              link: '/' + story.full_slug
            }
          })
        }
      })
  }
}
</script>
