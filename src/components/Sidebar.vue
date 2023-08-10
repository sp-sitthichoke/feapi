<template>
   <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <div class="flex flex-center column q-md-md">
        <h6>test</h6>
      </div>
    </q-drawer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>

</style>