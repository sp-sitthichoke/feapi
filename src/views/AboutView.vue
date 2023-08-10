<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <button @click="increment">{{ count }}</button>
    <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary" icon="mail" label="Add" v-on:click="Addinv()" />
        <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <!-- clear-icon -->
      <q-input
        clearable
        clear-icon="close"
        filled
        color="purple-12"
        v-model="adinv"
        id="newinv"
        label="test"
      />
    </div>
  </div>
    </div>
    <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="inv"
      :columns="columns"
      row-key="name"
    />
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
//const API_URL = "http://192.168.43.14:1578/";
//const API_URL = "http://localhost:5062/";
const API_URL = "http://www.toprethai.co.th/INVSYSTEM/";


  
 



export default {
  data() {
    return {
      count: 0,
      message: 'Hello Vue!',
        inv:[],
        adinv:'',
        columns:[ { name: 'id', align: 'left', label: 'ID', field: 'id', sortable: true },
                    { name: 'PONO', align: 'left', label: 'PONO', field: 'PONO', sortable: true },
                ],
        
    }
  },
  methods: {
    increment() {
      this.count++
    },
    async refreshData(){
      alert(API_URL);
            axios.get(API_URL+"api/Invoice/GetINV",{

            })
            .then(response =>{
                    this.inv = response.data;

                })
            
        },
        async Addinv(){
        
            alert(this.adinv);
           
            const formData = new FormData();
            formData.append("newinv",this.adinv);
            axios.post(API_URL+"api/Invoice/AddINV",formData).then(
                (response) =>{
                    this.refreshData();
                    alert(response.data);

                }
            )
        },
        async Delinv(id){
 
            axios.delete(API_URL+"api/Invoice/DeleteINV?id="+id).then(
                (response) =>{
                    this.refreshData();
                    alert(response.data);

                }
            )
        },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment()
    this.refreshData()
  }
}
</script>
