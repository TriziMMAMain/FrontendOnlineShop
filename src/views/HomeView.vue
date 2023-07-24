<script setup="">
// - Import
import {computed, onMounted, ref, watchEffect} from 'vue'
import {Promise} from 'core-js'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useInstrumentStore} from "../stores/counter.js"
import {useDisplay} from 'vuetify'
import CatalogInstrument from '../components/catalogInstrument.vue'
import FilterInstrument from '../components/filterInstrument.vue'
import MainComponentInstrument from '../components/mainComponentInstrument.vue'
import {ProcessingError} from "../notification/toasting";

const {name} = useDisplay()
const router = useRouter()


const {
  visitsInSite,
  changeInstrumentInFile,
  fetchingInstrumentCordless,
  fetchingInstrumentGasoline,
  fetchingInstrumentNetwork,
  fetchingInstrumentPneumotool,
  fetchingInstrumentDiesel,
  fetchingInstrumentByName,
  filterByNameInstrument,

  postAxiosInstrumentByName,
} = useInstrumentStore()

visitsInSite()


const fetchingPiniaInstrument = async () => {
  try {
    await fetchingInstrumentCordless()
        .then(() => {})
        .catch((error) => {
          ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
          console.log(error)
        })
    await fetchingInstrumentGasoline()
        .then(() => {})
        .catch((error) => {
          ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
          console.log(error)
        })
    await fetchingInstrumentNetwork()
        .then(() => {})
        .catch((error) => {
          ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
          console.log(error)
        })
    await fetchingInstrumentPneumotool()
        .then(() => {})
        .catch((error) => {
          ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
          console.log(error)
        })
    await fetchingInstrumentDiesel()
        .then(() => {})
        .catch((error) => {
          ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
          console.log(error)
        })
    await fetchingInstrumentByName()
        .then(() => {})
        .catch((error) => {
          ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
          console.log(error)
        })
    instrumentAllNameArray.value = JSON.parse(localStorage.getItem("filter_instrument_all_name"))
  } catch (err) {
    ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
    console.log(err)
  }
}

onMounted(async () => {
  localStorage.setItem("loading_page", JSON.stringify(true))
  loadingPage.value = JSON.parse(localStorage.getItem("loading_page"))
  await fetchingPiniaInstrument()
  localStorage.setItem("loading_page", JSON.stringify(false))
  loadingPage.value = JSON.parse(localStorage.getItem("loading_page"))
})

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
const widthFunc = () => {
  if (name.value === 'xs') {
    return '120'
  } else if (name.value === 'sm') {
    return '170'
  } else if (name.value === 'md') {
    return '200'
  } else if (name.value === 'lg') {
    return '250'
  } else if (name.value === 'xl') {
    return '300'
  } else if (name.value === 'xxl') {
    return '300'
  }
}
const heightFuncVBtn = () => {
  if (name.value === 'xs') {
    return '36'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'md') {
    return '36'
  } else if (name.value === 'lg') {
    return '40'
  } else if (name.value === 'xl') {
    return '46'
  } else if (name.value === 'xxl') {
    return '48'
  }
}
const widthFuncNavigationDrawer = () => {
  if (name.value === 'xs') {
    return '400'
  } else if (name.value === 'sm') {
    return '500'
  } else if (name.value === 'md') {
    return '600'
  } else if (name.value === 'lg') {
    return '600'
  } else if (name.value === 'xl') {
    return '600'
  } else if (name.value === 'xxl') {
    return '600'
  }
}
const widthFuncVBtnNavigationDrawer = () => {
  if (name.value === 'xs') {
    return '150'
  } else if (name.value === 'sm') {
    return '200'
  } else if (name.value === 'md') {
    return '200'
  } else if (name.value === 'lg') {
    return '200'
  } else if (name.value === 'xl') {
    return '200'
  } else if (name.value === 'xxl') {
    return '250'
  }
}
const heightFuncVBtnNavigationDrawer = () => {
  if (name.value === 'xs') {
    return '36'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'md') {
    return '46'
  } else if (name.value === 'lg') {
    return '52'
  } else if (name.value === 'xl') {
    return '52'
  } else if (name.value === 'xxl') {
    return '60'
  }
}
//
const instrumentAllNameArray = ref([])

// Navigation

let navigationDrawer = ref(true)
const trueOrFalseNavigationDrawer = ref(false)

const navigationDrawerClick = () => {
  navigationDrawer.value = !navigationDrawer.value
}
const clickToCatalog = () => {
  trueOrFalseNavigationDrawer.value = true
}
const clickToFilter = () => {
  trueOrFalseNavigationDrawer.value = false
}
//

let filterAllName = ref("")
const arrayFilter = ref("")
const stringSearchInstrument = ref("/search/instrument/id/")
const instrumentFilterName = ref('')


const filterAllNameBtn = async (string) => {
  try {
    const data = ref({
      string: string
    })

    if (await filterByNameInstrument(string)) {
      instrumentFilterName.value = JSON.parse(localStorage.getItem("filter_by_name"))
      await router.push({name: 'searchInstrumentByName', params: {id: instrumentFilterName.value.id}})
    }

    arrayFilter.value = ""

    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
const loadingPage = ref(false)

//
</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-app-bar
        class="vAppBarMain"
        color="background" elevation="1">
      <v-row>
        <v-col
            cols="7"
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
        <v-col
            class="d-flex justify-center align-center">
          <v-btn
              :width="widthFunc()"
              :height="heightFuncVBtn()"
              class="basketComponent d-flex justify-center align-center" href="/basket/">Корзина
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
        v-model="navigationDrawer"
        :width="widthFuncNavigationDrawer()"
        color="background"
        elevation="0"
        border="none"
        temporary
        class="pa-4">
      <div class="actionsVBtnNavigationDrawer w-100 d-flex justify-space-evenly">
        <v-btn
            class="VBtnNavigationDrawer"
            :width="widthFuncVBtnNavigationDrawer()"
            :height="heightFuncVBtnNavigationDrawer()"
            @click="clickToCatalog()">Каталог
        </v-btn>
        <v-btn
            class="VBtnNavigationDrawer"
            :width="widthFuncVBtnNavigationDrawer()"
            :height="heightFuncVBtnNavigationDrawer()"
            @click="clickToFilter()">Фильтр
        </v-btn>
      </div>
      <div class="blockNavigationDrawer d-flex justify-center ma-6">
        <CatalogInstrument v-if="trueOrFalseNavigationDrawer"></CatalogInstrument>
        <FilterInstrument v-else></FilterInstrument>
      </div>

    </v-navigation-drawer>
    <v-main>
      <v-container class="d-flex justify-start flex-wrap">
        <div class="btnBlockMainContainer d-flex flex-column">
          <div class="blockActionBtnMain ">
            <v-btn
                :height="heightFunc()"
                class="btnMainContainerStart d-flex align-center"
                prepend-icon="fa-solid fa-bars"
                @click="navigationDrawerClick">
              Каталог инструмента
            </v-btn>
<!--            <v-btn-->
<!--                :height="heightFunc()"-->
<!--                class="btnMainContainerFilter d-flex align-center"-->
<!--                @click="filterAllNameBtn(filterAllName)">Найти инструмент-->
<!--            </v-btn>-->
          </div>
          <div class="blockActionSecond pt-1">
            <p class="autocompleteTextLabel pt-1 pl-10 pb-1">
              Введите название инструмента
            </p>
            <v-autocomplete
                clearable
                class="vAutocompleteMain"
                type="text"
                :items="instrumentAllNameArray"
                v-model="filterAllName"
                prepend-icon="fa-solid fa-magnifying-glass"
                placeholder="Введите название инструмента"
                variant="filled"
                @update:modelValue="filterAllNameBtn(filterAllName)"

            ></v-autocomplete>
          </div>
        </div>
        <div class="w-100 d-flex justify-center align-center flex-wrap"
             v-if="loadingPage">
          <v-progress-circular
              color="primary"
              indeterminate
              :size="128"
              :width="12"
          ></v-progress-circular>
        </div>
        <MainComponentInstrument v-else></MainComponentInstrument>
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

.v-main {
  min-height: 300px;
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
    color: $primary;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .basketComponent {
    width: 150px;
    height: 32px;
    font-size: 0.7rem;
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
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 150px;
    height: 50%;
    font-size: 0.5rem;
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
    width: 150px;
    font-size: 0.5rem;
  }

  .vAutocompleteMain {
    color: $text;
    background-color: $background;
  }

  .VBtnNavigationDrawer {
    font-size: 0.8rem;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .VBtnNavigationDrawer:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
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
    color: $primary;
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
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
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

  .VBtnNavigationDrawer {
    font-size: 0.8rem;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .VBtnNavigationDrawer:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
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
    color: $primary;
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
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
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

  .VBtnNavigationDrawer {
    font-size: 1.1rem;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .VBtnNavigationDrawer:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
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
    color: $primary;
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
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
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

  .VBtnNavigationDrawer {
    font-size: 1.5rem;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .VBtnNavigationDrawer:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
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
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
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

  .VBtnNavigationDrawer {
    font-size: 1.5rem;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .VBtnNavigationDrawer:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
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
  }

  .blockActionBtnMain {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
  }

  .btnMainContainerStart, .btnMainContainerFilter {
    width: 550px;
    height: 44px;
    font-size: 1.5rem;
    text-align: center;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
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

  .VBtnNavigationDrawer {
    font-size: 1.5rem;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .VBtnNavigationDrawer:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

</style>
