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
      <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4">
        <preview-card
          :img-src="`https://picsum.photos/1200/600?image=${n + randomSeed}`"
        >
          <v-card-text>
            Here is some information about the thing that is pictured.
          </v-card-text>
        </preview-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    HeroSheet: () => import('~/components/ui/HeroSheet.vue'),
    PreviewCard: () => import('~/components/ui/PreviewCard')
  },
  data() {
    return {
      title: 'bınz',
      skills: [
        {
          name: 'Node.js',
          description: '',
          icon: 'mdi-nodejs',
          color: 'green'
        },
        {
          name: 'TypeScript',
          description: '',
          icon: 'mdi-language-typescript',
          color: 'light-blue'
        },
        {
          name: 'Vue.js',
          description: '',
          icon: 'mdi-vuejs',
          color: 'teal'
        },
        {
          name: 'GraphQL',
          description: '',
          icon: 'mdi-graphql',
          color: 'pink darken-2'
        },
        {
          name: 'NuxtJS',
          description: '',
          icon: 'mdi-nuxt',
          color: 'teal'
        },
        {
          name: 'Kubernetes',
          description: 'Koob-er-net-ease',
          icon: 'mdi-kubernetes',
          color: 'blue darken-2'
        }
      ]
    }
  }
}
</script>
