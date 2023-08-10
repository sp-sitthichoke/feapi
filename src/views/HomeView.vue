<template>
    <div class="q-pa-md">
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="[
        { label: 'Horizontal (default)', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' },
      ]"
    />

    <q-table
      flat bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'


const columns = ref([
  { name: 'id', align: 'left', label: 'ID', field: 'id', sortable: true },
  { name: 'fname', align: 'left', label: 'fname', field: 'fname', sortable: true },
  { name: 'lname', align: 'left', label: 'lname', field: 'lname', sortable: true },
  { name: 'username', align: 'right', label: 'username', field: 'username', sortable: true },
  { name: 'avatar', align: 'right', label: 'avatar', field: 'avatar', sortable: true },

])

const rows = ref([])
const fetchData = () => {
  fetch("https://melivecode.com/api/users")
  .then(res => res.json())
  .then((result) => {
    rows.value = result
  })
  
}

fetchData()

</script>