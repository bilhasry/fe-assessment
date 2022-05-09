<script>
  export default {
    data: () => ({
        datePicker: false,
        dates: ['2022-05-01', '2022-05-02'],
    }),
    methods: {
        filterDate() {
            console.log(this.dates)
            this.$store.commit('setFilterDate', this.dates)
            this.datePicker = false
        }
    }
  }
</script>
<template>
    <v-menu
        v-model="datePicker"
        :close-on-content-click="false"
        max-width="290"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="ma-2"
                outlined
                color="teal"
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-calendar-range-outline</v-icon>
                Set Date Range
            </v-btn>
        </template>
        <v-date-picker
            v-model="dates"
            range
            @change="filterDate"
        ></v-date-picker>
    </v-menu>
</template>