<script setup="">
// - Import
import {ref} from 'vue'
import _ from 'lodash'
import {useRouter} from 'vue-router'
import {useInstrumentStore} from "../stores/counter.js"

const router = useRouter()
const {filterByCordlessName, filterByGasolineName, reloadWindow} = useInstrumentStore()

import FilterInstrument from '../components/filterInstrument.vue'
import MainComponentInstrument from '../components/mainComponentInstrument.vue'


const cordlessLocal = JSON.parse(localStorage.getItem("cordless"))
const gasolineLocal = JSON.parse(localStorage.getItem("gasoline"))
const networkLocal = JSON.parse(localStorage.getItem("network"))
const pneumotoolLocal = JSON.parse(localStorage.getItem("pneumotool"))

const cordlessLocalCopyNameArray = []
const instrumentAllLocalCopyName = []
const cordlessLocalCopyName = () => {
  for (let i = 0; i < cordlessLocal.length; i++) {
    cordlessLocalCopyNameArray.push(cordlessLocal[i]);
  }
  for (let i = 0; i < cordlessLocalCopyNameArray.length; i++) {
    instrumentAllLocalCopyName.push(cordlessLocalCopyNameArray[i].name)
  }
}
cordlessLocalCopyName()

const gasolineLocalCopyNameArray = []
const gasolineLocalCopyNameCopy = []
const gasolineLocalCopyName = () => {
  for (let i = 0; i < gasolineLocal.length; i++) {
    gasolineLocalCopyNameArray.push(gasolineLocal[i])
  }
  for (let i = 0; i < gasolineLocalCopyNameArray.length; i++) {
    gasolineLocalCopyNameCopy.push(gasolineLocalCopyNameArray[i].name)
  }
}
gasolineLocalCopyName()

const networkLocalCopyNameArray = []
const networkLocalCopyNameCopy = []
const networkLocalCopy = () => {
  for (let i = 0; i < networkLocal.length; i++) {
    networkLocalCopyNameArray.push(networkLocal[i])
  }
  for (let i = 0; i < networkLocalCopyNameArray.length; i++) {
    networkLocalCopyNameCopy.push(networkLocalCopyNameArray[i].name)
  }
}
networkLocalCopy()

const pneumotoolLocalCopyArray = []
const pneumotoolLocalCopyNameCopy = []
const pneumotoolCopy = () => {
  for (let i = 0; i < pneumotoolLocal.length; i++) {
    pneumotoolLocalCopyArray.push(pneumotoolLocal[i])
  }
  for (let i = 0; i < pneumotoolLocalCopyArray.length; i++) {
    pneumotoolLocalCopyNameCopy.push(pneumotoolLocalCopyArray[i].name)
  }
}
pneumotoolCopy()

const instrumentLocalCopy = () => {
  for (let i = 0; i < gasolineLocalCopyNameCopy.length; i++) {
    instrumentAllLocalCopyName.push(gasolineLocalCopyNameCopy[i])
  }
  for (let i = 0; i < networkLocalCopyNameCopy.length; i++) {
    instrumentAllLocalCopyName.push(networkLocalCopyNameCopy[i])
  }
  for (let i = 0; i < pneumotoolLocalCopyNameCopy.length; i++) {
    instrumentAllLocalCopyName.push(pneumotoolLocalCopyNameCopy[i])
  }
}
instrumentLocalCopy()


let navigationDrawer = ref(false)
const navigationDrawerClick = () => {
  navigationDrawer.value = !navigationDrawer.value
}

let filterAllName = ref("")
const arrayFilter = ref("")
const stringSearchInstrument = ref("/search/instrument/name/")

const filterAllNameBtn = (string) => {
  arrayFilter.value = filterByCordlessName(string)

  if (arrayFilter.value[0].length === 1) {
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[0][0]))
    router.push({name: 'searchInstrumentByName', params: {name: filterAllName.value}})
    stringSearchInstrument.value = stringSearchInstrument.value + string

  } else if (arrayFilter.value[1].length === 1) {
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[1][0]))
    router.push({name: 'searchInstrumentByName', params: {name: filterAllName.value}})
    stringSearchInstrument.value = stringSearchInstrument.value + string

  } else if (arrayFilter.value[2].length === 1) {
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[2][0]))
    router.push({name: 'searchInstrumentByName', params: {name: filterAllName.value}})
    stringSearchInstrument.value = stringSearchInstrument.value + string

  } else if (arrayFilter.value[3].length === 1) {
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[3][0]))
    router.push({name: 'searchInstrumentByName', params: {name: filterAllName.value}})
    stringSearchInstrument.value = stringSearchInstrument.value + string
  }
  arrayFilter.value = ""
}


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
          <v-autocomplete
              clearable
              type="text"
              :items="instrumentAllLocalCopyName"
              v-model="filterAllName"
              label="Введите название инструмента"
              variant="filled"
          ></v-autocomplete>
          <v-btn
              :href="stringSearchInstrument"
              @click="filterAllNameBtn(filterAllName)">Click On Filter
          </v-btn>
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
