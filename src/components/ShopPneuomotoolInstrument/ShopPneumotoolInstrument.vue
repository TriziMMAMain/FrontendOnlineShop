<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="d-flex flex-wrap justify-center d-sm-flex justify-sm-center">
    <!--      ALL-->
    <router-view name="pneumotoolToolsAll"></router-view>
    <!--      Generator-->
    <router-view name="pneumotoolToolsCompressor"></router-view>
    <router-view name="pneumotoolToolsCompressorId"></router-view>
    <!--  Jackhammer-->
    <router-view name="pneumotoolToolsJackhammer"></router-view>
    <router-view name="pneumotoolToolsJackhammerId"></router-view>
    <!--  Nail Gun-->
    <router-view name="pneumotoolToolsNailGun"></router-view>
    <router-view name="pneumotoolToolsNailGunId"></router-view>
    <!--  -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>