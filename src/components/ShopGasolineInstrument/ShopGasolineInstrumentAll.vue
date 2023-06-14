<script setup="">
// - Import
import ShopGasolineInstrumentGenerator from './ShopGasolineInstrumentGenerator.vue'
import ShopGasolineInstrumentMotoblock from './ShopGasolineInstrumentMotoblock.vue'
import ShopGasolineInstrumentChainsaw from './ShopGasolineInstrumentChainsaw.vue'
//


// - Logical

</script>

<template>
  <!--        CARD -->
  <v-container class="pa-0">
    <ShopGasolineInstrumentGenerator></ShopGasolineInstrumentGenerator>
    <ShopGasolineInstrumentMotoblock></ShopGasolineInstrumentMotoblock>
    <ShopGasolineInstrumentChainsaw></ShopGasolineInstrumentChainsaw>
  </v-container>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>