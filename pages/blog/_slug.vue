<template>
  <v-container v-editable="story.content" class="my-4">
    <v-row>
      <v-img
        :src="story.content.hero_image"
        height="30vh"
        max-width="100%"
      ></v-img>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" xs-offset="0" offset="2">
        <h1 class="display-3 display-blog-title pb-8 primary--text">
          {{ story.content.title }}
        </h1>
        <h2 class="headline pb-8">{{ story.name }}</h2>
        <p class="body-1">{{ story.content.content }}</p>
        <p class="body-1">{{ story.content.content }}</p>
        <p class="body-1">{{ story.content.content }}</p>
        <p class="body-1">{{ story.content.content }}</p>
      </v-col>
    </v-row>
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
        // eslint-disable-next-line
        console.error(res)
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content from api'
        })
      } else {
        // eslint-disable-next-line
        console.error(res.response.data)
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data
        })
      }
    })
}
export default {
  layout: 'blog',
  data() {
    return { story: { content: {} } }
  },
  asyncData(context) {
    // Check if we are in the editing mode
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
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  }
}
</script>

<style>
.display-blog-title {
  line-height: 1.2em;
  font-size: 15em !important;
  font-family: 'Share Tech', 'Montserrat', 'Roboto', '-apple-system',
    'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: -0.07em;
  text-indent: -0.08em;
}
</style>
