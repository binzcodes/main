<template>
  <v-row no-gutters>
    <v-col>
      <v-tabs
        :grow="$vuetify.breakpoint.xsOnly"
        background-color="transparent"
        class="pr-sm-12"
        right
      >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab
          :key="item.name"
          v-for="item in navItems"
          :to="item.url"
          :ripple="true"
          :disabled="!item.enable"
          nuxt
          class="text-lowercase nav-button grey--text"
          >{{ item.name }}</v-tab
        >
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      navItems: [
        {
          name: 'home',
          url: '/',
          enable: true
        },
        {
          name: 'about',
          url: '/about',
          enable: true
        },
        {
          name: 'blog',
          url: '/blog',
          enable: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.nav-button {
  font-family: 'Share Tech', sans-serif;
  font-size: 1.2rem !important;
}
</style>
