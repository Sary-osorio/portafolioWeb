<template>
  <v-container fluid class="ct-main" >
    <v-row>
      <v-col lg="11" >
        <router-view />
      </v-col>
      <v-col lg="1" class="">
        <Menu/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Menu from '@/components/Menu.vue';

</script>

<style>
  .ct-main{


  }
</style>
