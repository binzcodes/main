<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" :color="skill.color" size="28">
        {{ skill.icon }}
      </v-icon>
    </template>
    <span>{{ skill.name }}</span>
  </v-tooltip>
</template>

<script lang="ts">
interface Skill {
  name: string
  icon: string
  color: string
}

export default {
  name: 'Skill',
  props: {
    skill: {
      type: Object as () => Skill,
      required: true
    }
  }
}
</script>
