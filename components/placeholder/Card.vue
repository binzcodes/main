<template>
  <v-card>
    <div>
      <app-logo />
    </div>
    <v-card-title primary-title class="p-8">
      <div class="mx-auto">
        <h1 class="headline text-xs-center">{{ cardTitle }}</h1>
        <p class="grey--text text-xs-center mb-0">
          {{ cardDescription }}
        </p>
      </div>
    </v-card-title>
    <app-stack v-bind:stack="cardTechnologyStack" class="pb-8 px-8"></app-stack>
  </v-card>
</template>

<script>
export default {
  name: 'HelloCard',
  components: {
    AppLogo: () => import('~/components/ui/AppLogo.vue'),
    AppStack: () => import('~/components/placeholder/Stack.vue')
  },
  props: {
    cardTitle: { type: String, default: 'Nuxt Static' },
    cardDescription: {
      type: String,
      default: 'A full-featured boilerplate for static websites.'
    },
    cardTechnologyStack: {
      type: Array,
      default: () => [
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
          name: 'Vuetify',
          description: '',
          icon: 'mdi-vuetify',
          color: 'blue lighten-2'
        },
        {
          name: 'NuxtJS',
          description: '',
          icon: 'mdi-nuxt',
          color: 'teal'
        },
        {
          name: 'Netlify',
          description: '',
          icon: 'mdi-rhombus',
          color: 'cyan'
        }
      ]
    }
  }
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
