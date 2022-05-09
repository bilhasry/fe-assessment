<script>
  import DateUtil from '@/utils/DateUtil.js'
  import { task }  from '@/models/task.js'

  export default {
    data: () => ({
      modal: false,
      labelInput: "",
      title: "",
      description: "",
      attachment: [],
      estTime: false,
      date: DateUtil.getCurrentDate(),
      items: [
        { header: 'Select an option' },
        {
          text: 'Frontend',
          color: 'blue',
        },
        {
          text: 'Backend',
          color: 'red',
        },
        {
          text: 'API',
          color: 'green',
        },
      ],
    }),
    props: {
      label: String
    },
    methods: {
      addTask() {
        console.log(this.labelInput)
        this.modal=false
        task.id = this.$store.getters.getTasksCount + 1
        task.title = this.title
        task.description = this.description
        task.status = "pending"
        task.est_time = this.date
        this.$store.commit('addNewTask', task)
      }
    }
  }
</script>
<template>
  <v-dialog
      v-model="modal"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2"
          outlined
          color="teal"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
          Create New Task
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar
            color="primary"
            dark
          >Create New Task</v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="title"
                label="Title"
              ></v-text-field>
              <v-textarea
                v-model="description"
                label="Description"
                auto-grow
                hint="Put the task description"
              ></v-textarea>
              <v-file-input
                v-model="attachment"
                label="Attachment"
                truncate-length="15"
              ></v-file-input>
              <v-menu
                v-model="estTime"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Estimated Time"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="estTime = false"
                ></v-date-picker>
              </v-menu>
              <v-combobox
                v-model="labelInput"
                :items="items"
                label="Labels"
                small-chips
              >
                <template v-slot:selection="{attrs, item, parent, selected}">
                  <v-chip
                    v-if="item === Object(item)"
                    v-bind="attrs"
                    :color="`${item.color} lighten-3`"
                    :input-value="selected"
                    label
                    small
                  >
                    <span class="pr-2">
                      {{ item.text }}
                    </span>
                    <v-icon
                      small
                      @click="parent.selectItem(item)"
                    >
                      $delete
                    </v-icon>
                  </v-chip>
                </template>
              </v-combobox>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              text
              @click="dialog.value = false"
            >Close</v-btn>
            <v-btn
              depressed
              color="primary"
              @click="addTask"
            >
              Add Task
            </v-btn>
          </v-card-actions>
        </v-card>
        
      </template>
    </v-dialog>
</template>