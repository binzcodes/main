<template>
  <v-container v-editable="story.content">
    <v-row class="pb-6 mt-sm-12">
      <v-col cols="12" sm="10" md="8" lg="6" offset-sm="1" class="mt-sm-12">
        <span v-text="tags" class="overline"></span>
        <h1 class="display-4 display-blog-title primary--text">
          {{ story.content.title }}
        </h1>
      </v-col>
    </v-row>
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
        <span class="caption">
          {{ date }}
          <span v-if="story.content.reading_time">
            &middot; {{ story.content.reading_time }} minute read
          </span>
        </span>
      </v-col>
    </v-row>
    <v-row class="pb-6">
      <v-col cols="12" sm="10" md="8" lg="6" offset-sm="1">
        <p class="body-1">{{ story.content.lead_text }}</p>
      </v-col>
    </v-row>
    <v-row class="pb-6">
      <v-col cols="12" class="pa-0">
        <v-img
          :src="story.content.hero_image"
          :aspect-ratio="heroImageAspectRatio"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="10" offset-sm="1">
        <span class="d-flex flex-row-reverse caption grey--text text-darken-2">
          This is the photo caption
        </span>
      </v-col>
    </v-row>
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
  mixins: { storybridgePreview: import('@/mixins/storybridgePreview') },
  data() {
    return { story: { content: {} } }
  },
  computed: {
    date() {
      return new this.$moment(
        this.story.published_at || this.story.created_at
      ).format('Do MMMM YYYY')
    },
    heroImageAspectRatio() {
      if (this.$vuetify.breakpoint.mdAndUp) return 4
      if (this.$vuetify.breakpoint.smAndUp) return 3
      return 2
    },
    tags() {
      if (!this.story.tag_list) return null
      return this.story.tag_list.join(' &middot; ')
    }
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
