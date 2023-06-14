<script setup="">
// - Import
import ShopCordlessDrill from './ShopCordlessInstrumentDrill.vue'
import ShopCordlessGrinders from './ShopCordlessInstrumentGrinders.vue'
import ShopCordlessScrewdrivers from './ShopCordlessInstrumentScrewdrivers.vue'



</script>

<template>
    <!--        CARD -->
  <v-container class="pa-0">
    <ShopCordlessDrill></ShopCordlessDrill>
    <ShopCordlessGrinders></ShopCordlessGrinders>
    <ShopCordlessScrewdrivers></ShopCordlessScrewdrivers>
  </v-container>


</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>