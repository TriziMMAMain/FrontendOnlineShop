<script setup="">
// - Import
import {ref} from 'vue'
// import instrumentStore from '../stores/instrumentStore.json'
// import ShopGenerator from "../components/ShopGasolineInstrumentGasoline.vue";
import FilterInstrument from '../components/filterInstrument.vue'
import MainComponentInstrument from '../components/mainComponentInstrument.vue'
import _ from 'lodash'

const cordlessLocal = JSON.parse(localStorage.getItem("cordless"))
const gasolineLocal = JSON.parse(localStorage.getItem("gasoline"))
const networkLocal = JSON.parse(localStorage.getItem("network"))
const pneumotoolLocal = JSON.parse(localStorage.getItem("pneumotool"))

// const cordlessLocalCopyNameArray = []
// const cordlessLocalCopyName = () => {
//   for (let i = 0; i < 3; i++) {
//     cordlessLocalCopyNameArray.push(cordlessLocal[i]);
//   }
//   console.log(`qwe`, cordlessLocalCopyNameArray)
// }
//
// cordlessLocalCopyName()

let navigationDrawer = ref(false)
const navigationDrawerClick = () => {
  navigationDrawer.value = !navigationDrawer.value
}
let filterAllName = ""
// let filterAllNameLodash = null
// const filterAllNameBtn = (asd) => {
//   console.log(`asd`, asd)
//   filterAllNameLodash = _.find(cordlessLocal, {name: "Ryobi "})
//   console.log(`filter`, filterAllNameLodash)
// }
</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-app-bar color="background" elevation="1">
      <v-row>
        <v-col class="d-flex flex-column flex-wrap">
          <v-app-bar-title
              class="vAppBarTitleMainContainer"
              color="primary">
            <v-btn
                href="/home/"
                size="large"
                icon="fas fa-home"
                color="primary">
            </v-btn>
            Все Инструменты Дон
          </v-app-bar-title>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <router-link class="basketComponent pt-1 pb-1 pl-4 pr-4 " to="/basket/">Корзина</router-link>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
        v-model="navigationDrawer"
        width="400"
        color="background"
        elevation="0"
        border="none"
        class="d-flex justify-center align-center">
      <FilterInstrument></FilterInstrument>
    </v-navigation-drawer>
    <v-main>

      <v-container fluid class="d-flex justify-start flex-wrap">
        <div class="btnBlockMainContainer d-flex flex-row">
          <v-btn
              class="btnMainContainerStart d-flex align-center"
              prepend-icon="fa-solid fa-bars"
              @click="navigationDrawerClick">
            Каталог инструмента
          </v-btn>
<!--          <v-autocomplete-->
<!--              label="Введите название инструмента"-->
<!--              :items="[]">-->
<!--          ></v-autocomplete>-->
          <v-text-field
              type="text"
              v-model="filterAllName"
              clearable
              label="Введите название инструмента"
          ></v-text-field>
          <v-btn @click="filterAllNameBtn(filterAllName)">Click On Filter</v-btn>
        </div>
        <MainComponentInstrument></MainComponentInstrument>
      </v-container>
    </v-main>
  </v-app>

</template>

<style lang="scss" scoped>
// - import
@import '../assets/mixins.scss';

.vAppBarTitleMainContainer {
  width: 70%;
  font-size: 1.5rem;
}
.btnBlockMainContainer {
  width: 100%;
  z-index: 2;
}
.btnMainContainerStart {
  width: 350px;
  height: 50%;
  text-align: center;
  color: $background;
  background-color: $primary;
}

.btnMainContainerStart:hover {
  color: $primary;
  background-color: $background;
}

.basketComponent {
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 20px;
  color: $background;
  background-color: $primary;
  transition: all 0.3s ease-in-out;
}
.basketComponent:hover {
  color: $primary;
  background-color: $background;
  border: 1px solid $primary;
  transition: all 0.3s ease-in-out;
}
</style>
