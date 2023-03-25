<script setup="">
// - Import


//


// - Logical

</script>

<template>
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
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>