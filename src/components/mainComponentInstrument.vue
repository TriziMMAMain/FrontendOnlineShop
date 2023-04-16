<script setup="">
// - Import
import {ref} from 'vue'
import {useInstrumentStore} from '../stores/counter.js'

const {
  filterCrodlessInstrument,
  filterGasolineInstrument,
  filterNetworkInstrument,
  filterPneumotoolInstrument
} = useInstrumentStore()
filterCrodlessInstrument()
filterGasolineInstrument()
filterNetworkInstrument()
filterPneumotoolInstrument()

//


//


// ---

</script>

<template>
  <v-row class="d-flex justify-start flex-column w-100 mt-1">
    <v-col class="d-flex flex-row flex-wrap w-100">
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

</style>
