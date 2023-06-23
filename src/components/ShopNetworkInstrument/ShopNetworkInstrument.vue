<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="d-flex flex-wrap justify-center d-sm-flex justify-sm-center">
    <!--      ALL-->
    <router-view name="networkToolsAll"></router-view>
    <!--      Network-->
    <router-view name="shopNetworkInstruments"></router-view>
    <router-view name="shopNetworkInstrumentsId"></router-view>
    <!--  -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>