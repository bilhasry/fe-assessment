<script>
export default {
    props: {
        type: String,
        title: String,
        progress: Number
    },
    computed: {
        totalTask() {
            return this.$store.getters.getTasksCount
        },
        taskNumber() {
            return this.$store.getters.getTasksByStatus(this.type).length
        },
        taskList() {
            return this.$store.getters.getTasksByStatus(this.type)
        },
        getPercentage() {
            return this.totalTask > 0 ?  (this.taskNumber / this.totalTask * 100) : 0
        }
    },
    methods: {
        startDrag(event, task) {
            event.dataTransfer.setData('taskID', task.id)
        },
        onDrop(event) {
            const taskID = event.dataTransfer.getData('taskID')
            const task = this.$store.commit('updateTaskStatus', {
                index: taskID-1,
                status: this.type
            })
        }
    }
}
</script>

<template>
    <div>
        <v-sheet
            elevation="2"
            rounded="lg"
            color="purple lighten-3"
            @drop="onDrop($event)"
            @dragover.prevent
            @dragenter.prevent
        >
            <h3 class="pa-2 font-weight-bold text-center">
                {{ title }} ({{ taskNumber }}/{{ totalTask }}) ({{ Math.ceil(getPercentage) }}%)
            </h3>
            <v-divider></v-divider>
            <v-container class="pa-4">
            <v-card
                v-for="task in taskList" :key="task.title"
                draggable="true"
                class="draggable"
                @dragstart="startDrag($event, task)"
            >
                <v-card-actions>
                    <v-card-title v-text="task.title"></v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="font-weight-bold">Task</div>
                    <p>{{ task.id }}{{ task.title }}</p>
                    <div class="font-weight-bold">Description</div>
                    <p>{{ task.description }}</p>
                    <div class="font-weight-bold">Estimated Time</div>
                    <p>{{ task.est_time ?? '-' }}</p>
                    <div class="font-weight-bold">Attachment</div>
                    <p>{{ task.attachment ?? '-' }}</p>
                </v-card-text>
                <v-card-actions v-if="task.attachment">
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="viewAttachment"
                    >
                        View Atachment
                    </v-btn>
                </v-card-actions>
            </v-card>
            <p
                v-if="taskList.length === 0"
                class="pa-2 text-center"
            >
                No Task Here Yet
            </p>
            </v-container>
        </v-sheet>
    </div>
</template>

<style>
.draggable {
    cursor: move;
}
</style>