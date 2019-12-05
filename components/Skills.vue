<template>
  <v-card-actions v-if="skills.length > 0" class="d-flex justify-space-between">
    <div v-bind:key="skill.index" v-for="skill in skills">
      <skill v-bind:skill="skill"></skill>
    </div>
  </v-card-actions>
</template>

<script>
export default {
  name: 'Skills',
  components: {
    Skill: () => import('~/components/Skill.vue')
  },
  props: {
    skills: {
      type: [Object, Array],
      default: () => []
    }
  }
}
</script>
