<template>
  <v-icon :color="skill.color">
    {{ skill.icon }}
  </v-icon>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
