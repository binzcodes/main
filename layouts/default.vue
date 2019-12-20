<template>
  <v-app :dark="dark">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="2" class="mt-n6">
          <div class="site-logo-container pt-12">
            <nuxt-link to="/">
              <v-img
                src="/icon.svg"
                alt="Logo"
                max-width="80px"
                aspect-ratio="1"
                class="mx-auto mt-4"
              ></v-img>
            </nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" sm="10" class="pt-sm-12">
          <v-row no-gutters>
            <app-navigation />
          </v-row>

          <v-row>
            <v-content>
              <nuxt />
            </v-content>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <app-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    AppNavigation: () => import('~/components/layout/AppNavigation.vue'),
    AppFooter: () => import('~/components/layout/AppFooter.vue')
  },
  data() {
    return {
      dark: false
    }
  }
}
</script>

<style>
.site-logo-container {
  position: sticky;
  top: 0;
}
</style>
