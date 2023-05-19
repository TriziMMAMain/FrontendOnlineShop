<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <!--      ALL-->
  <router-view name="networkToolsAll"></router-view>
  <!--      Drill-->
  <router-view name="networkToolsDrill"></router-view>
  <!--      -->
  <router-view name="networkToolsDrillId"></router-view>
  <!--  Fretsaw-->
  <router-view name="networkToolsFretsaw"></router-view>
  <!--      -->
  <router-view name="networkToolsFretsawId"></router-view>
  <!--  Perforator-->
  <router-view name="networkToolsPerforator"></router-view>
  <!--  -->
  <router-view name="networkToolsPerforatorId"></router-view>
  <!--  -->
  <router-view></router-view>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>