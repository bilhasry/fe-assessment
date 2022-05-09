import { useStore } from 'vuex'

const store = useStore()
const TaskUtil = {
    totalTask() {
        return store.getters.getTasksCount
    },
    taskNumber(type) {
        return store.getters.getTasksByStatus(type).length
    },
    taskList(type) {
        return store.getters.getTasksByStatus(type)
    },
    getPercentage(type) {
        return this.totalTask > 0 ?  (this.taskNumber(type) / this.totalTask * 100) : 0
    }
}

export default TaskUtil