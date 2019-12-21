<template>
  <v-container v-editable="story.content">
    <v-row class="pb-6 mt-sm-12">
      <v-col cols="12" sm="10" md="8" lg="6" offset-sm="1" class="mt-sm-12">
        <ArticleOverlineTags :tags="story.tag_list" />
        <h1 class="display-4 display-blog-title primary--text">
          {{ story.content.title }}
        </h1>
      </v-col>
    </v-row>
    <ArticleAuthor :date="date" :reading-time="story.content.reading_time" />
    <v-row class="pb-6">
      <v-col cols="12" sm="10" md="8" lg="6" offset-sm="1">
        <p class="body-1">{{ story.content.lead_text }}</p>
      </v-col>
    </v-row>
    <ArticleImage
      :image="story.content.hero_image"
      :caption="story.content.hero_image_caption"
    />
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component
      v-for="item in story.content.body"
      :key="item._uid"
      :blok="item"
      :story="story"
      :is="item.component"
    ></component>
  </v-container>
</template>

<script>
const loadData = function({ api, cacheVersion, errorCallback, version, path }) {
  return api
    .get(`cdn/stories/${path}`, {
      version,
      cv: cacheVersion
    })
    .then(res => {
      return res.data
    })
    .catch(res => {
      if (!res.response) {
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content from api'
        })
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data
        })
      }
    })
}
export default {
  components: {
    ArticleOverlineTags: () =>
      import('~/components/Article/ArticleOverlineTags'),
    ArticleAuthor: () => import('~/components/Article/ArticleAuthor'),
    ArticleImage: () => import('~/components/Article/ArticleImage')
  },
  mixins: { storybridgePreview: import('@/mixins/storybridgePreview') },
  data() {
    return { story: { content: {} } }
  },
  computed: {
    date() {
      return this.story.published_at || this.story.created_at
    }
  },
  asyncData(context) {
    // Check if we are editing mode
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
    const path = context.route.path === '/' ? 'home' : context.route.path
    // Load the JSON from the API
    return loadData({
      version,
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      errorCallback: context.error,
      path
    })
  }
}
</script>

<style>
p.body-1 {
  line-height: 180% !important;
}

.display-blog-title {
  /*padding-top: 10rem;*/
  text-transform: lowercase;
  font-family: 'Share Tech', 'Montserrat', 'Roboto', '-apple-system',
    'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>
