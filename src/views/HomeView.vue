<script setup="">
// - Import
import {ref} from 'vue'
import {Promise} from 'core-js'
import axios from 'axios'
// import _ from 'lodash'
import {useRouter} from 'vue-router'
import {useInstrumentStore} from "../stores/counter.js"
import {useDisplay} from 'vuetify'

import FilterInstrument from '../components/filterInstrument.vue'
import MainComponentInstrument from '../components/mainComponentInstrument.vue'

const {name} = useDisplay()
const router = useRouter()
const {filterByCordlessName, filterByGasolineName, reloadWindow} = useInstrumentStore()

let visits = JSON.parse(localStorage.getItem('visits'))

if (!visits) {
  localStorage.setItem('visits', JSON.stringify(1));
  visits = 1;
  localStorage.setItem('basket_object', JSON.stringify([]))
  localStorage.setItem("basket_click_user", JSON.stringify(false))
} else {
  const newVisits = visits + 1;
  localStorage.setItem('visits', JSON.stringify(newVisits));
  visits = newVisits;
  console.log(`visits`, visits)
}

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

//
const changeInstrument = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instrument/change');

  } catch (error) {
    console.log(error);
  }
};




const cordless = ref([])
const fetchingCordlessInstrument = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instruments/get/cordless');
    if (response.ok) {
      cordless.value = await response.json();
      await cordlessLocalCopyName(cordless.value)
    } else {
      throw new Error(`Error fetching cordless: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
const fetchingGasolineInstrument = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instruments/get/gasoline');
    if (response.ok) {
      const gasoline = await response.json();
      await gasolineLocalCopyName(gasoline);
    } else {
      throw new Error(`Error fetching gasoline: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
const fetchingNetworkInstrument = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instruments/get/network');
    if (response.ok) {
      const network = await response.json();
      await networkLocalCopyName(network);
    } else {
      throw new Error(`Error fetching network: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
const fetchingPneumoInstrument = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instruments/get/pneumo');
    if (response.ok) {
      const pneumo = await response.json();
      await pneumoLocalCopyName(pneumo);
    } else {
      throw new Error(`Error fetching pneumo: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const instrumentAllLocalCopyName2 = ref([])

// Cordless

const cordlessLocalCopyNameArray = ref([])
const instrumentAllLocalCopyName = ref([]);

const cordlessLocalCopyName = async (cordless) => {
  try {
    if (Array.isArray(cordless) || (typeof cordless === 'object' && cordless.hasOwnProperty('length'))) {
      for (let i = 0; i < cordless.length; i++) {
        cordlessLocalCopyNameArray.value.push(cordless[i]);
      }
      for (let i = 0; i < cordlessLocalCopyNameArray.value.length; i++) {
        instrumentAllLocalCopyName.value.push(cordlessLocalCopyNameArray.value[i].name);
      }
    } else {
      console.log('Invalid input');
    }
  } catch (err) {
    console.log(err)
  }

};


// Gasoline

const gasolineLocalCopyNameArray = ref([])
const gasolineLocalCopyNameCopy = ref([])

const gasolineLocalCopyName = async (gasoline) => {
  if (Array.isArray(gasoline) || (typeof gasoline === 'object' && cordless.hasOwnProperty('length'))) {
    for (let i = 0; i < gasoline.length; i++) {
      gasolineLocalCopyNameArray.value.push(gasoline[i]);
    }
    for (let i = 0; i < gasolineLocalCopyNameArray.value.length; i++) {
      gasolineLocalCopyNameCopy.value.push(gasolineLocalCopyNameArray.value[i].name);
    }
  } else {
    console.log('Invalid input');
  }
}


// Netwrok

const networkLocalCopyNameArray = ref([])
const networkLocalCopyNameCopy = ref([])

const networkLocalCopyName = async (network) => {
  if (Array.isArray(network) || (typeof network === 'object' && cordless.hasOwnProperty('length'))) {
    for (let i = 0; i < network.length; i++) {
      networkLocalCopyNameArray.value.push(network[i]);
    }
    for (let i = 0; i < networkLocalCopyNameArray.value.length; i++) {
      networkLocalCopyNameCopy.value.push(networkLocalCopyNameArray.value[i].name);
    }
  } else {
    console.log('Invalid input');
  }
}


// Pneumotool

const pneumotoolLocalCopyArray = ref([])
const pneumotoollocalCopyNameCopy = ref([])

const pneumoLocalCopyName = async (pneumo) => {
  if (Array.isArray(pneumo) || (typeof pneumo === 'object' && cordless.hasOwnProperty('length'))) {
    for (let i = 0; i < pneumo.length; i++) {
      pneumotoolLocalCopyArray.value.push(pneumo[i]);
    }
    for (let i = 0; i < pneumotoolLocalCopyArray.value.length; i++) {
      pneumotoollocalCopyNameCopy.value.push(pneumotoolLocalCopyArray.value[i].name);
    }
  } else {
    console.log('Invalid input');
  }
}


const loadInstruments = async () => {
  try {
    await Promise.all([
      changeInstrument()
          .then(() => {
            console.log(`change`)
          })
          .catch((error) => {
            console.log(error)
          }),
      fetchingCordlessInstrument()
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          }),
      fetchingGasolineInstrument()
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          }),
      fetchingNetworkInstrument()
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          }),
      fetchingPneumoInstrument()
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          }),
    ])
    for (let i = 0; i < gasolineLocalCopyNameCopy.value.length; i++) {
      instrumentAllLocalCopyName.value.push(gasolineLocalCopyNameCopy.value[i])
    }
    for (let i = 0; i < networkLocalCopyNameCopy.value.length; i++) {
      instrumentAllLocalCopyName.value.push(networkLocalCopyNameCopy.value[i])
    }
    for (let i = 0; i < pneumotoollocalCopyNameCopy.value.length; i++) {
      instrumentAllLocalCopyName.value.push(pneumotoollocalCopyNameCopy.value[i])
    }
    instrumentAllLocalCopyName2.value = instrumentAllLocalCopyName.value

  } catch (error) {
    console.log('Instrument load failed', error)
  }
}
loadInstruments()

let navigationDrawer = ref(false)
const navigationDrawerClick = () => {
  navigationDrawer.value = !navigationDrawer.value
}

let filterAllName = ref("")
const arrayFilter = ref("")
const stringSearchInstrument = ref("/search/instrument/id/")
const instrumentFilterName = ref('')

const fetchingInstrumentFilterName = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instrument/get/filter/name');
    if (response.ok) {
      instrumentFilterName.value = await response.json();
    } else {
      throw new Error(`Error fetching instrument: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}

const filterAllNameBtn = async (string) => {
  try {
    console.log(`string`, string)
    const data = ref({
      string: string
    })
    const responseData = await axios.post('http://localhost:3000/api/instrument/filter/name', data.value)


    await Promise.all([
      fetchingInstrumentFilterName()
          .then(() => {
            console.log(`Fetching name good`);
          })
          .catch((error) => {
            console.log(error);
          })
    ])

    await router.push({name: 'searchInstrumentByName', params: {id: instrumentFilterName.value.id}})

    arrayFilter.value = ""

    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}

// setTimeout(() => {
//   window.location.reload()
// },5000)

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
        <v-col
            class="d-flex justify-center align-center">
          <v-btn class="basketComponent d-flex justify-center align-center" href="/basket/">Корзина</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
        v-model="navigationDrawer"
        width="400"
        color="background"
        elevation="0"
        border="none"
        temporary
        class="d-flex justify-center align-center">
      <FilterInstrument></FilterInstrument>
    </v-navigation-drawer>
    <v-main>

      <v-container class="d-flex justify-start flex-wrap">
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
                :items="instrumentAllLocalCopyName2"
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
    color: $primary;
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
