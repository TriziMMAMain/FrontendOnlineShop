<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="d-flex flex-wrap justify-center">
    <!--      ALL-->
    <router-view name="cordlessToolsAll"></router-view>
    <!--      Drills-->
    <router-view name="cordlessToolsDrill"></router-view>
    <router-view name="cordlessToolsDrillId"></router-view>
    <!--      Screwdrivers-->
    <router-view name="cordlessToolsScrewdrivers"></router-view>
    <router-view name="cordlessToolsScrewdriversID"></router-view>
    <!--      Grindres-->
    <router-view name="cordlessToolsGrinders"></router-view>
    <router-view name="cordlessToolsGrindersId"></router-view>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>