<template>
  <v-card>
    <div>
      <logo />
    </div>
    <v-card-title primary-title class="p-8">
      <div class="mx-auto">
        <h1 class="headline text-xs-center">{{ cardTitle }}</h1>
        <p class="grey--text text-xs-center mb-0">
          <slot></slot>
        </p>
      </div>
    </v-card-title>
    <skills v-bind:skills="skills"></skills>
  </v-card>
</template>

<script>
export default {
  name: 'HelloCard',
  components: {
    Logo: () => import('~/components/Logo.vue'),
    Skills: () => import('~/components/Skills.vue')
  },
  props: { cardTitle: { type: String, default: 'Hello, world!' } },
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

<style>
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
