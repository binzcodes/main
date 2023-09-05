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
    <tech-gallery></tech-gallery>
  </v-container>
</template>

<script>
export default {
  components: {
    HeroSheet: () => import('~/components/ui/HeroSheet.vue'),
    TechGallery: () => import('~/components/placeholder/Gallery.vue')
  },
  data() {
    return {
      title: 'bınz'
    }
  }
}
</script>
