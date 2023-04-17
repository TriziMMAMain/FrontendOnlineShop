<script setup="">
// - Import
import {ref} from 'vue'
import _ from 'lodash'
import {useRouter} from 'vue-router'
import {useInstrumentStore} from "../stores/counter.js"
import {useDisplay} from 'vuetify'

import FilterInstrument from '../components/filterInstrument.vue'
import MainComponentInstrument from '../components/mainComponentInstrument.vue'

const {name} = useDisplay()
const router = useRouter()
const {filterByCordlessName, filterByGasolineName, reloadWindow} = useInstrumentStore()


// x-small, small, default, large, and x-large
const sizeFunc = () => {
  if (name.value === 'xs') {
    return 'small'
  } else if (name.value === 'sm') {
    return 'default'
  } else if (name.value === 'md') {
    return 'default'
  } else if (name.value === 'lg') {
    return 'large'
  } else if (name.value === 'xl') {
    return 'x-large'
  } else if (name.value === 'xxl') {
    return 'x-large'
  }
}

const heightFunc = () => {
  if (name.value === 'xs') {
    return '36'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'md') {
    return '36'
  } else if (name.value === 'lg') {
    return '36'
  } else if (name.value === 'xl') {
    return '52'
  } else if (name.value === 'xxl') {
    return '52'
  }
}


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
const stringSearchInstrument = ref("/search/instrument/id/")

const filterAllNameBtn = (string) => {
  arrayFilter.value = filterByCordlessName(string)

  if (arrayFilter.value[0].length === 1) {
    console.log(`array[0]`, arrayFilter.value[0][0].id)
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[0][0]))
    // router.push({name: 'searchInstrumentByName', params: {id: arrayFilter.value[0][0].id}})
    stringSearchInstrument.value = stringSearchInstrument.value + arrayFilter.value[0][0].id

  } else if (arrayFilter.value[1].length === 1) {
    console.log(`array[1]`, arrayFilter.value[1])
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[1][0]))
    // router.push({name: 'searchInstrumentByName', params: {id: arrayFilter.value[1][0].id}})
    stringSearchInstrument.value = stringSearchInstrument.value + arrayFilter.value[1][0].id

  } else if (arrayFilter.value[2].length === 1) {
    console.log(`array[2]`, arrayFilter.value[2])
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[2][0]))
    // router.push({name: 'searchInstrumentByName', params: {id: arrayFilter.value[2][0].id}})
    stringSearchInstrument.value = stringSearchInstrument.value + arrayFilter.value[2][0].id

  } else if (arrayFilter.value[3].length === 1) {
    console.log(`array[3]`, arrayFilter.value[3])
    localStorage.setItem("filter_name_instrument", JSON.stringify(arrayFilter.value[3][0]))
    // router.push({name: 'searchInstrumentByName', params: {id: arrayFilter.value[3][0].id}})
    stringSearchInstrument.value = stringSearchInstrument.value + arrayFilter.value[3][0].id
  }
  arrayFilter.value = ""
}


</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-app-bar
        class="vAppBarMain"
        color="background" elevation="1">
      <v-row>
        <v-col
            cols="8"
            class="d-flex flex-column flex-wrap">
          <v-app-bar-title
              class="vAppBarTitleMainContainer">
            <v-btn
                class="vBtnHome"
                href="/home/"
                :size="sizeFunc()"
                icon="fas fa-home">
            </v-btn>
            Все Инструменты Дон
          </v-app-bar-title>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <router-link class="basketComponent d-flex justify-center align-center" to="/basket/">Корзина</router-link>
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
        <div class="btnBlockMainContainer d-flex flex-column">
          <div class="blockActionBtnMain d-flex justify-space-between">
            <v-btn
                :height="heightFunc()"
                class="btnMainContainerStart d-flex align-center"
                prepend-icon="fa-solid fa-bars"
                @click="navigationDrawerClick">
              Каталог инструмента
            </v-btn>
            <v-btn
                :height="heightFunc()"
                class="btnMainContainerFilter d-flex align-center"
                :href="stringSearchInstrument"
                @click="filterAllNameBtn(filterAllName)">Найти инструмент
            </v-btn>
          </div>
          <div class="blockActionSecond pt-1">
            <p class="autocompleteTextLabel pt-1 pl-10 pb-1">
              Введите название инструмента
            </p>
            <v-autocomplete
                clearable
                class="vAutocompleteMain"
                type="text"
                :items="instrumentAllLocalCopyName"
                v-model="filterAllName"
                prepend-icon="fa-solid fa-magnifying-glass"
                placeholder="Введите название инструмента"
                variant="filled"
            ></v-autocomplete>
          </div>
        </div>
        <MainComponentInstrument></MainComponentInstrument>
      </v-container>
    </v-main>
  </v-app>

</template>

<style lang="scss" scoped>
// - import
@import '../assets/mixins.scss';

.autocompleteTextLabel {
  font-size: 1.3rem;
  color: $textSpan;
}

// Media

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */
  .vAppBarMain {

  }

  .vBtnHome {
    color: $primary;
    background-color: $background;
  }
  .vAppBarTitleMainContainer {
    width: 100%;
    display: flex;
    align-items: center;
    color: $textSpan;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 150px;
    height: 32px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
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

  .btnBlockMainContainer {
    width: 100%;
    z-index: 2;
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 300px;
    height: 50%;
    font-size: 1rem;
    text-align: center;
    color: $background;
    background-color: $primary;
  }

  .btnMainContainerStart:hover, .btnMainContainerFilter:hover {
    box-shadow: 0 0 0 0 black;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .btnMainContainerFilter {
    width: 250px;
    font-size: 1rem;
  }

  .vAutocompleteMain {
    color: $text;
    background-color: $background;
  }

}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /* стили для sm-устройств */
  .vAppBarMain {

  }

  .vBtnHome {
    color: $primary;
    background-color: $background;
  }

  .vAppBarTitleMainContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: $textSpan;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 150px;
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
    padding: 0 16px;
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

  .btnBlockMainContainer {
    width: 100%;
    z-index: 2;
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 300px;
    height: 50%;
    font-size: 1rem;
    text-align: center;
    color: $background;
    background-color: $primary;
  }

  .btnMainContainerStart:hover, .btnMainContainerFilter:hover {
    box-shadow: 0 0 0 0 black;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .btnMainContainerFilter {
    width: 250px;
    font-size: 1rem;
  }

  .vAutocompleteMain {
    color: $text;
    background-color: $background;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /* стили для md-устройств */
  .vAppBarMain {

  }

  .vBtnHome {
    color: $primary;
    background-color: $background;
  }

  .vAppBarTitleMainContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: $textSpan;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 150px;
    height: 38px;
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
    padding: 0 16px;
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

  .btnBlockMainContainer {
    width: 100%;
    z-index: 2;
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 300px;
    height: 50%;
    font-size: 1rem;
    text-align: center;
    color: $background;
    background-color: $primary;
  }

  .btnMainContainerStart:hover, .btnMainContainerFilter:hover {
    box-shadow: 0 0 0 0 black;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .btnMainContainerFilter {
    width: 250px;
    font-size: 1rem;
  }

  .vAutocompleteMain {
    color: $text;
    background-color: $background;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */
  .vAppBarMain {

  }

  .vBtnHome {
    color: $primary;
    background-color: $background;
  }

  .vAppBarTitleMainContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: $textSpan;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 150px;
    height: 38px;
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
    padding: 0 16px;
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

  .btnBlockMainContainer {
    width: 100%;
    z-index: 2;
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 300px;
    height: 50%;
    font-size: 1rem;
    text-align: center;
    color: $background;
    background-color: $primary;
  }

  .btnMainContainerStart:hover, .btnMainContainerFilter:hover {
    box-shadow: 0 0 0 0 black;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .btnMainContainerFilter {
    width: 250px;
    font-size: 1rem;
  }

  .vAutocompleteMain {
    color: $text;
    background-color: $background;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */
  .vAppBarMain {

  }

  .vBtnHome {
    color: $primary;
    background-color: $background;
  }

  .vAppBarTitleMainContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: $primary;
    font-size: 2rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 250px;
    height: 44px;
    font-size: 1.7rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
    padding: 0 16px;
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

  .btnBlockMainContainer {
    width: 100%;
    z-index: 2;
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 550px;
    height: 44px;
    font-size: 1.5rem;
    text-align: center;
    color: $background;
    background-color: $primary;
  }

  .btnMainContainerStart:hover, .btnMainContainerFilter:hover {
    box-shadow: 0 0 0 0 black;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .btnMainContainerFilter {
    width: 400px;
    font-size: 1.5rem;
  }

  .vAutocompleteMain {
    font-size: 1.5rem;
    color: $text;
    background-color: $background;
  }
}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
  .vAppBarMain {

  }

  .vBtnHome {
    color: $primary;
    background-color: $background;
  }

  .vAppBarTitleMainContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: $primary;
    font-size: 2rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 250px;
    height: 44px;
    font-size: 1.7rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 4px;
    padding: 0 16px;
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

  .btnBlockMainContainer {
    width: 100%;
    z-index: 2;
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 550px;
    height: 44px;
    font-size: 1.5rem;
    text-align: center;
    color: $background;
    background-color: $primary;
  }

  .btnMainContainerStart:hover, .btnMainContainerFilter:hover {
    box-shadow: 0 0 0 0 black;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .btnMainContainerFilter {
    width: 400px;
    font-size: 1.5rem;
  }

  .vAutocompleteMain {
    font-size: 1.5rem;
    color: $text;
    background-color: $background;
  }
}

</style>
