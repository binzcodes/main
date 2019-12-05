<template>
  <v-footer app padless absolute>
    <v-card class="flex" flat tile>
      <v-card-title>
        <a class="subtitle-1 mx-auto" href="mailto:hi@rbi.nz">
          hi@rbi.nz
        </a>
        <a class="subtitle-1 mx-auto" href="tel:+447801992902">
          <span class="grey--text">(+44)</span> 07801 992 902
        </a>
      </v-card-title>

      <v-card-actions>
        <v-spacer />
        <v-btn @click="openGitHub" class="mx-4" icon>
          <v-icon size="24px">mdi-github-circle</v-icon>
        </v-btn>
        <v-btn @click="openTwitter" class="mx-4" icon>
          <v-icon size="24px">mdi-twitter-circle</v-icon>
        </v-btn>
        <v-btn @click="openWhatsApp" class="mx-4" icon nuxt>
          <v-icon size="24px">mdi-whatsapp</v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>

      <!--        <v-card-text class="py-2 grey&#45;&#45;text">-->
      <!--          <v-spacer />-->
      <!--          {{ new Date().getFullYear() }} — <strong>Binz</strong>-->
      <!--        </v-card-text>-->
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    openGitHub() {
      window.open('https://github.com/binzcodes', '_blank')
    },
    openTwitter() {
      window.open('https://twitter.com/binzCodes', '_blank')
    },
    openWhatsApp() {
      window.open(
        'https://wa.me/447801992902/?text=Hi,%20can%20you%20build%20me%20something%awesome%3F',
        '_blank'
      )
    }
  }
}
</script>

<style scoped></style>
