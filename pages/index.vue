<template>
  <v-container>
    <hero-sheet :title="title">
      <v-card-subtitle class="px-0 headline font-weight-light">
        <p>
          Software Engineer, DevOps guy and Digital Nomad
        </p>
        <p>
          I make cloud-native web applications while backpacking, mostly with
          Node.js
        </p>
      </v-card-subtitle>
    </hero-sheet>
    <v-row>
      <v-col v-for="post in posts" :key="post.uuid" cols="12" sm="6" md="4">
        <v-card :to="post.link" tile flat nuxt>
          <v-img
            :src="post.imgSrc | transformImage('500x250')"
            :lazy-src="post.imgSrc | transformImage('50x25/filters:quality(0)')"
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
          <v-card-text style="position: relative;">
            <v-btn
              v-if="post.icon"
              :color="post.icon ? 'grey lighten-4' : post.color"
              tile
              absolute
              class="white--text"
              fab
              x-large
              right
              top
            >
              <v-avatar tile min-width="50%">
                <v-img
                  v-if="skill.logoSrc"
                  :src="skill.logoSrc"
                  :alt="skill.name + ' Logo'"
                  contain
                  aspect-ratio="1"
                ></v-img>
                <v-icon v-if="skill.icon" x-large>
                  {{ skill.icon }}
                </v-icon>
              </v-avatar>
            </v-btn>
            <span v-text="post.subtitle" class="overline"></span>
            <h3 v-text="post.title" class="headline"></h3>
            <h4 v-text="post.preview" class="subtitle-1"></h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    HeroSheet: () => import('~/components/ui/HeroSheet.vue')
    // TechGallery: () => import('~/components/placeholder/Gallery.vue')
  },
  data() {
    return {
      title: 'bınz'
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then(res => {
        // eslint-ignore-next-line
        console.log(res.data.stories[0])
        return {
          posts: res.data.stories.map(story => {
            return {
              uuid: story.slug,
              title: story.content.title,
              subtitle: 'Authored by Ryan Binns',
              imgSrc: story.content.hero_image,
              icon: null,
              preview: story.content.content,
              link: '/' + story.full_slug
            }
          })
        }
      })
  }
}
</script>
