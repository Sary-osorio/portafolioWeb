<template>
  <v-container fluid class="ct-main" >
    <v-row>
      <v-col  sm="12" >
        <router-view />
      </v-col>
      <v-col class="" style="display: contents;">
        <Menu/>
      </v-col>
    </v-row>
  </v-container>
  <v-footer
  class="bg-primary text-center d-flex flex-column"
  >
  <v-divider class="border-opacity-100" color="secondary" width="100%"></v-divider>
    <div class="d-flex flex-column justify-center my-2  px-4 w-100">
      <div>
        <a href="javascript:void(0)" class="text-white mx-2">
          <span class="mdi mdi-linkedin social-media"></span>
        </a>
        <a href="javascript:void(0)" class="text-white mx-2">
          <span class="mdi mdi-github social-media"></span>
        </a>
        <a href="javascript:void(0)" class="text-white mx-2">
          <span class="mdi mdi-codepen social-media"></span>
        </a>
      <!-- <v-btn
        class="mx-2"
        variant="text"
      >
      <span class="mdi mdi-linkedin social-media"></span>
      </v-btn> -->
      <!-- <v-btn
        class=""
        variant="text"
      >
      <span class="mdi mdi-github social-media"></span>
    </v-btn>
      <v-btn
        class="mx-2"
        variant="text"
      >
      <span class="mdi mdi-codepen social-media"></span>
    </v-btn> -->
  </div>
  <div class="mt-2">
      {{ new Date().getFullYear() }} — <strong>Hecho con <span class="mdi mdi-heart"></span> por Daniela Osorio</strong>
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


