<script setup="">
// - Import
import {ref} from 'vue'

</script>

<template>
  <div class="mainBlock w-100">
    <v-row class="rowMain d-flex justify-start flex-column mt-1">
      <v-col class="w-100 d-sm-flex justify-sm-center">
        <!--          HOME PAGE-->
        <router-view name="homeComponentSite"></router-view>
        <!--      SEARCH INSTRUMENT BY NAME-->
        <router-view name="searchInstrumentByName"></router-view>
        <!--        SEARCH INSTRUMENT BY PARAMS-->
        <router-view name="searchInstrumentByParams"></router-view>
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
        <!--        DIESEL-->
        <router-view name="dieselTools"></router-view>
        <!--      ADMIN VIEW-->
        <router-view name="adminPanel"></router-view>
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.rowMain {
  min-height: 100vh;
}

@media screen and (max-width: 376px) {
  .mainBlock {
    max-width: 340px;
  }
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  .mainBlock {

  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
}

@media screen and (min-width: 2560px) {
}
</style>
