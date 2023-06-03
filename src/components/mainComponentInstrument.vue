<script setup="">
// - Import
import {ref} from 'vue'

</script>

<template>
  <v-row class="rowMain d-flex justify-start flex-column w-100 mt-1">
    <v-col class="w-100">
      <!--          HOME PAGE-->
      <router-view name="homeComponentSite"></router-view>
      <!--      SEARCH INSTRUMENT BY NAME-->
      <router-view name="searchInstrumentByName"></router-view>
      <!--          BASKET COMPONENT-->
      <router-view name="basketComponentSite"></router-view>
      <router-view name="basketComponentCheckout"></router-view>
      <!--          CORDLESS-->
      <router-view name="cordlessTools"></router-view>
      <!--          GASOLINE-->
      <router-view name="generatorTools"></router-view>
      <!--          NETWORK-->
      <router-view name="networkTools"></router-view>
      <!--          PNEUOMOTOOLS-->
      <router-view name="pneuomoTools"></router-view>
      <!--      ADMIN VIEW-->
      <router-view name="adminPanel"></router-view>
      <router-view></router-view>
    </v-col>
  </v-row>

</template>

<style lang="scss" scoped>
.rowMain {
  min-height: 200vh;
}
</style>
