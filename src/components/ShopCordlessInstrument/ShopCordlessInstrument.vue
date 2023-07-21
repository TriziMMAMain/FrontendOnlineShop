<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="w-100 d-flex flex-wrap justify-center d-sm-flex justify-sm-center">
    <!--      ALL-->
    <router-view name="cordlessToolsAll"></router-view>
    <!--      Cordless instruments -->
    <router-view name="cordlessInstrument"></router-view>
    <router-view name="cordlessInstrumentId"></router-view>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>