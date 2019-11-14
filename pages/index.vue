<template>
  <v-layout row wrap align-center justify-center>
    <v-flex xs12 sm6 md4>
      <v-card>
        <div>
          <!--          <div class="mx-auto">-->
          <!--            <div class="my-4">-->
          <logo />
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <v-card-title primary-title class="p-8">
          <div class="mx-auto">
            <div class="headline text-xs-center">Hello World!</div>
            <span class="grey--text text-xs-center">
              More to come, for now check out my stack...
            </span>
          </div>
        </v-card-title>
        <skills v-bind:skills="skills"></skills>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    Logo,
    Skills
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
