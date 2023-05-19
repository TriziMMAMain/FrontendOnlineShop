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
  <div class="d-flex flex-wrap">
    <ShopGasolineInstrumentGenerator></ShopGasolineInstrumentGenerator>
    <ShopGasolineInstrumentMotoblock></ShopGasolineInstrumentMotoblock>
    <ShopGasolineInstrumentChainsaw></ShopGasolineInstrumentChainsaw>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>