import Vue from 'vue'
import Vuex from 'vuex'
import DateUtil from '@/utils/DateUtil.js'

Vue.use(Vuex)

export const taskStore = new Vuex.Store({
  state() {
    return {
      tasks: [],
      fromDate: false,
      toDate: false,
    }
  },
  getters: {
    getTasksByStatus: (state) => (taskStatus) => {
      if (state.fromDate) {
        return state.tasks.filter(
          task => task.status === taskStatus && DateUtil.inDateRange(task.est_time, state.fromDate, state.toDate)
        )
      }
      return state.tasks.filter(task => task.status === taskStatus)
    },
    getTasksCount: (state) => {
      return state.tasks.length
    }
  },
  mutations: {
    addNewTask (state, task) {
      state.tasks.push(task)
    },
    setFilterDate(state, dates) {
      state.fromDate = dates[0]
      state.toDate = dates[1]
    },
    updateTaskStatus(state, updates) {
      state.tasks[updates.index].status = updates.status
    }
  }
})
