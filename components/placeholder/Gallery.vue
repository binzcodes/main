<template>
  <v-row>
    <v-col
      v-for="(skill, index) in skills"
      :key="index"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card tile flat>
        <v-img
          v-if="skill.bannerSrc"
          :src="skill.bannerSrc"
          aspect-ratio="2"
        ></v-img>
        <v-img
          v-else
          :src="`https://picsum.photos/1200/600?image=${index + 10}`"
          :lazy-src="`https://picsum.photos/12/6?image=${index + 10}`"
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
            :color="skill.logoSrc ? 'grey lighten-4' : skill.color"
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
          <h3 v-text="skill.name" class="headline"></h3>
          <span v-text="skill.pronunciation" class="overline"></span>
          <h4 v-text="skill.description" class="subtitle-1"></h4>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import technologies from '~/static/technologies.json'

export default {
  name: 'ImageCardIconV1',
  data() {
    return {
      skills: technologies
    }
  }
}
</script>

<style scoped></style>
