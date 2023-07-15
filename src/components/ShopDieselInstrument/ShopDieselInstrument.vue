<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="d-flex flex-wrap justify-center d-sm-flex justify-sm-center">
    <!--      ALL-->
    <router-view name="dieselToolsAll"></router-view>
    <!--      Generator-->
    <router-view name="shopDieselInstruments"></router-view>
    <router-view name="shopDieselInstrumentsId"></router-view>
    <!--    -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>