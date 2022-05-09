<script>
import TaskBoard from '@/components/TaskBoard.vue'

export default {
  components: {
    TaskBoard
  }
}
</script>
<template>
    <v-container fluid>
      <v-row>
        <v-col>
          <TaskBoard title="Pending" type="pending"></TaskBoard>
        </v-col>
        <v-col>
          <TaskBoard title="Processing" type="processing"></TaskBoard>
        </v-col>
        <v-col>
          <TaskBoard title="Done" type="done"></TaskBoard>
        </v-col>
      </v-row>
    </v-container>
</template>
