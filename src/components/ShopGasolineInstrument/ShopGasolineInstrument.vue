<script setup="">
// - Import


//


// - Logical

</script>

<template>
  <div class="d-flex flex-wrap justify-center">
    <!--      ALL-->
    <router-view name="gasolineToolsAll"></router-view>
    <!--      Generator-->
    <router-view name="gasolineToolsGenerator"></router-view>
    <!--      -->
    <router-view name="gasolineToolsGeneratorId"></router-view>
    <!--    Motoblock-->
    <router-view name="gasolineToolsMotoblock"></router-view>
    <!--    -->
    <router-view name="gasolineToolsMotoblockId"></router-view>
    <!--    Chainsaw-->
    <router-view name="gasolineToolsChainsaw"></router-view>
    <!--    -->
    <router-view name="gasolineToolsChainsawId"></router-view>
    <!--    -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';


</style>