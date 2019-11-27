<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <hello-card card-title="Hello World!">
          More to come, for now heres my stack...
        </hello-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    HelloCard: () => import('~/components/HelloCard.vue')
  },
  data() {
    return {
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
