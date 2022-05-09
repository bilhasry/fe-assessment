<script>
  import CreateTask from '@/components/CreateTask.vue'
  import FilterTask from '@/components/FilterTask.vue'

  export default {
    components: {
      CreateTask,
      FilterTask
    },
    computed: {
      getPercentage() {
        
          return this.$store.getters.getTasksCount > 0 ?
            this.$store.getters.getTasksByStatus('done').length/this.$store.getters.getTasksCount*100 : 0
      }
    }
  }
</script>
<template>
  <v-app id="app">
    <v-app-bar
      dense
      flat
      app
    >
      <v-toolbar-title>Task Board</v-toolbar-title>
      <v-spacer></v-spacer>
      <FilterTask></FilterTask>
      <CreateTask></CreateTask>
    </v-app-bar>
    <v-main class="grey lighten-5">
      <div id="progress">
        <v-progress-linear
          v-model="getPercentage"
          striped
          color="light-blue"
          height="25"
        >
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
      </div>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@import '@/assets/base.css';

</style>
