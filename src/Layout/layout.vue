<template>
  <v-container fluid class="ct-main" >
    <v-row>
      <v-col  sm="11" >
        <router-view />
      </v-col>
      <v-col sm="1" class="">
        <Menu/>
      </v-col>
    </v-row>
  </v-container>
  <v-footer
  class="bg-primary text-center d-flex flex-column"
  >
  <v-divider class="border-opacity-100" color="secondary" width="100%"></v-divider>
    <div class="d-flex justify-space-between my-2  px-4 w-100">
      <div class="">
      {{ new Date().getFullYear() }} — <strong>Hecho con <span class="mdi mdi-heart"></span> por Daniela Osorio</strong>
    </div>
      <div>
      <v-btn
        class="mx-4"
        variant="text"
      >
      <span class="mdi mdi-linkedin social-media"></span>
      </v-btn>
      <v-btn
        class="mx-4"
        variant="text"
      >
      <span class="mdi mdi-github social-media"></span>
    </v-btn>
      <v-btn
        class="mx-4"
        variant="text"
      >
      <span class="mdi mdi-codepen social-media"></span>
    </v-btn>
  </div>

    </div>



  </v-footer>
</template>

<script setup>
import Menu from '@/components/Menu.vue';

</script>

<style >
.social-media{
  font-size: 1.5rem;

}
</style>


