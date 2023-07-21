<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="w-100 d-flex flex-wrap justify-center d-sm-flex justify-sm-center">
    <!--      ALL-->
    <router-view name="pneumotoolToolsAll"></router-view>
    <!--      Pneumotool-->
    <router-view name="shopPneumotoolInstruments"></router-view>
    <router-view name="shopPneumotoolInstrumentsId"></router-view>

    <!--  -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>