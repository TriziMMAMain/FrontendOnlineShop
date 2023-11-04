<script setup="">
// - Import
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useInstrumentStore} from '../../stores/counter.js'
import {useBasketStore} from "../../stores/counterBasket.js";
import {useDisplay} from 'vuetify'
import {Promise} from "core-js";
import _ from "lodash";
import {ProcessingError} from "../../notification/toasting";

const {name} = useDisplay()
const {postAxiosInstrumentById, fetchingInstrumentByName} = useInstrumentStore()
const {importBasketId} = useBasketStore()
const router = useRouter()

const heightFunc = () => {
  if (name.value === 'xs') {
    return '500'
  } else if (name.value === 'sm') {
    return '200'
  } else if (name.value === 'md') {
    return '200'
  } else if (name.value === 'lg') {
    return '250'
  } else if (name.value === 'xl') {
    return '400'
  } else if (name.value === 'xxl') {
    return '400'
  }
}
const widthFunc = () => {
  if (name.value === 'xs') {
    return '340'
  } else if (name.value === 'sm') {
    return '500'
  } else if (name.value === 'md') {
    return '900'
  } else if (name.value === 'lg') {
    return '1200'
  } else if (name.value === 'xl') {
    return '1700'
  } else if (name.value === 'xxl') {
    return '1100'
  }
}
const firstColFunc = () => {
  if (name.value === 'xs') {
    return '6'
  } else if (name.value === 'sm') {
    return '3'
  } else if (name.value === 'md') {
    return '3'
  } else if (name.value === 'lg') {
    return '3'
  } else if (name.value === 'xl') {
    return '3'
  } else if (name.value === 'xxl') {
    return '3'
  }
}
const secondColFunc = () => {
  if (name.value === 'xs') {
    return ''
  } else if (name.value === 'sm') {
    return '6'
  } else if (name.value === 'md') {
    return '6'
  } else if (name.value === 'lg') {
    return '6'
  } else if (name.value === 'xl') {
    return '6'
  } else if (name.value === 'xxl') {
    return '6'
  }
}
const thirdColFunc = () => {
  if (name.value === 'xs') {
    return '6'
  } else if (name.value === 'sm') {
    return '3'
  } else if (name.value === 'md') {
    return '3'
  } else if (name.value === 'lg') {
    return '3'
  } else if (name.value === 'xl') {
    return '3'
  } else if (name.value === 'xxl') {
    return '3'
  }
}
const widthtFuncVBtn = () => {
  if (name.value === 'xs') {
    return '170'
  } else if (name.value === 'sm') {
    return '110'
  } else if (name.value === 'md') {
    return '170'
  } else if (name.value === 'lg') {
    return '220'
  } else if (name.value === 'xl') {
    return '300'
  } else if (name.value === 'xxl') {
    return '220'
  }
}
const heightFuncVBtn = () => {
  if (name.value === 'xs') {
    return '32'
  } else if (name.value === 'sm') {
    return '32'
  } else if (name.value === 'md') {
    return '48'
  } else if (name.value === 'lg') {
    return '48'
  } else if (name.value === 'xl') {
    return '62'
  } else if (name.value === 'xxl') {
    return '62'
  }
}
const widthFuncVCard = () => {
  if (name.value === 'xs') {
    return '100%'
  } else if (name.value === 'sm') {
    return '100%'
  } else if (name.value === 'md') {
    return '100%'
  } else if (name.value === 'lg') {
    return '100%'
  } else if (name.value === 'xl') {
    return '100%'
  } else if (name.value === 'xxl') {
    return '1100'
  }
}

const instrumentFilterName = ref('')
const arrayLocalStorage = ref([])


let dataInstrument = ref([])


onMounted(async () => {
  arrayLocalStorage.value = JSON.parse(localStorage.getItem("instrument_filter_by_params"))
  instrumentFilterName.value = arrayLocalStorage.value
})


const checkCordlessInstrument = async (idInstrument, routerPush) => {
  localStorage.setItem("id_cordless", JSON.stringify(idInstrument))
  await router.push({name: `${routerPush} ID`, params: {id: idInstrument}})
  localStorage.setItem('fetching_instrument_by_id', JSON.stringify(true))
}
const checkGasolineInstrument = async (idInstrument, routerPush) => {
  localStorage.setItem("id_gasoline", JSON.stringify(idInstrument))
  await router.push({name: `${routerPush} ID`, params: {id: idInstrument}})
  localStorage.setItem('fetching_instrument_by_id', JSON.stringify(true))
}
const checkNetworkInstrument = async (idInstrument, routerPush) => {
  localStorage.setItem("id_network", JSON.stringify(idInstrument))
  await router.push({name: `${routerPush} ID`, params: {id: idInstrument}})
  localStorage.setItem('fetching_instrument_by_id', JSON.stringify(true))
}
const checkPneumoInstrument = async (idInstrument, routerPush) => {
  localStorage.setItem("id_pneumotool", JSON.stringify(idInstrument))
  await router.push({name: `${routerPush} ID`, params: {id: idInstrument}})
  localStorage.setItem('fetching_instrument_by_id', JSON.stringify(true))
}
const checkDieselInstrument = async (idInstrument, routerPush) => {
  localStorage.setItem("id_diesel", JSON.stringify(idInstrument))
  await router.push({name: `${routerPush} ID`, params: {id: idInstrument}})
  localStorage.setItem('fetching_instrument_by_id', JSON.stringify(true))
}


const addInBasketIdCordless = (idInstrument) => {
  localStorage.setItem("id_cordless", JSON.stringify(idInstrument))
  localStorage.setItem("basket_click", JSON.stringify(true))
}
const addInBasketIdGasoline = (idInstrument) => {
  localStorage.setItem("id_gasoline", JSON.stringify(idInstrument))
  localStorage.setItem("basket_click", JSON.stringify(true))
}
const addInBasketIdNetwork = (idInstrument) => {
  localStorage.setItem("id_network", JSON.stringify(idInstrument))
  localStorage.setItem("basket_click", JSON.stringify(true))
}
const addInBasketIdPneumo = (idInstrument) => {
  localStorage.setItem("id_pneumotool", JSON.stringify(idInstrument))
  localStorage.setItem("basket_click", JSON.stringify(true))
}
const addInBasketIdDiesel = (idInstrument) => {
  localStorage.setItem("id_diesel", JSON.stringify(idInstrument))
  localStorage.setItem("basket_click", JSON.stringify(true))
}


const viewDetails = async (id) => {

  if (arrayLocalStorage.value[0].type === 'Аккумуляторный инструмент') {
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkCordlessInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Бензоинструмент') {
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkGasolineInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Сетевой инструмент') {
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkNetworkInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Пневмоинструмент') {
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkPneumoInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Дизельный инструмент') {
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkDieselInstrument(id, routerPush.value)
  }
}

// - Logical
let counterClick = ref(0)

const buyInBasket = async (id) => {
  if (arrayLocalStorage.value[0].type === 'Аккумуляторный инструмент') {
    addInBasketIdCordless(id)
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkCordlessInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Бензоинструмент') {
    addInBasketIdGasoline(id)
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkGasolineInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Сетевой инструмент') {
    addInBasketIdNetwork(id)
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkNetworkInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Пневмоинструмент') {
    addInBasketIdPneumo(id)
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkPneumoInstrument(id, routerPush.value)
  }
  if (arrayLocalStorage.value[0].type === 'Дизельный инструмент') {
    addInBasketIdDiesel(id)
    let routerPush = ref(arrayLocalStorage.value[0].typeThis)
    await checkDieselInstrument(id, routerPush.value)
  }


}

const availabilityTrue = (data) => {
  if (data === 0) {
    return false
  } else {
    return true
  }
}
</script>

<template>
  <!--        CARD -->
  <div class="widthBlock">
    <v-card
        :width="widthFuncVCard()"
        :min-height="heightFunc()"
        color="background"
        elevation="5"
        class="vCardMain pa-5 mr-10 mb-16"
        v-for="i in arrayLocalStorage">
      <v-row class="d-sm-flex">
        <!--      FIRST COL-->
        <v-col :cols="firstColFunc()"
               class="d-flex justify-center align-center">
          <!--    CARD ITEM START-->
          <div class="d-flex justify-center align-center">
            <div class="photoInCardBlock">
              <img class="photoInCard" :src="i.imgTitle" alt="">
            </div>
            <v-card-subtitle class="vCardSubtitleMain">Код: {{ i.id }}</v-card-subtitle>
          </div>
          <!--    CARD ITEM END-->
        </v-col>
        <!--      SECOND COL-->
        <v-col :cols="secondColFunc()"
               class="secondCol pa-1">
          <!--        TITLE-->
          <div class="blockTitleCard">
            <button @click="viewDetails(i.id, i._id, i)" class="cardTextHref mt-1">{{ i.name }}</button>
          </div>
          <!--        SPAN AND TEXT-->
          <div
              class="textCardFeatureMain">
            <div v-for="item in i.featureTopTitle"
                 key="item"
                 class="textCardFeatureDiv">
              <p class="textCardFeature">{{ item.featureTopTitleInfoTitle, ':' }}
                <span class="spanTextCard">{{ item.featureTopTitleInfoText }}</span></p></div>
          </div>


        </v-col>
        <!--      THIRD COL-->
        <v-col :cols="thirdColFunc()"
               class="pa-1">
          <!--    CARD ACTIONS START-->

          <v-card-actions
              v-if="availabilityTrue(i.availability)"
              class="d-flex justify-center flex-wrap flex-column pa-0 pr-1">
            <p class="textCardPrice pt-3 pb-3">
              {{ i.price }} рублей
            </p>
            <v-btn
                @click="buyInBasket(i.id, i._id, i)"
                elevation="1"
                class="vBtnBuy"
                :width="widthtFuncVBtn()"
                :height="heightFuncVBtn()"
                prepend-icon="fa-solid fa-cart-shopping"
            >
              Купить
            </v-btn>
            <p class="textCardAvailability">
              В наличии имеется > {{ i.availability }} шт
            </p>
          </v-card-actions>
          <v-card-actions
              v-else
              class="d-flex justify-center flex-wrap flex-column pa-0 pr-1">
            <p class="textCardPrice pt-3 pb-3">
              Последняя цена {{ i.price }} рублей
            </p>
            <v-btn
                @click="buyInBasket(i.id, i._id, i)"
                elevation="1"
                class="vBtnBuy"
                :width="widthtFuncVBtn()"
                :height="heightFuncVBtn()"
                :disabled="true"
                prepend-icon="fa-solid fa-cart-shopping"
            >
              Купить
            </v-btn>
            <p class="textCardAvailabilityFalse">
              Нет в наличии
            </p>
          </v-card-actions>




          <!--    CARD ACTIONS END-->
        </v-col>
      </v-row>
    </v-card>
  </div>
  <!--        END CARD-->
</template>

<style lang="scss" scoped>
// - import
@import '../../assets/mixins';

// Media

@media screen and (max-width: 376px) {
  /*  стили для xl-устройств */
  .widthBlock {
    width: 100%;
  }

  .vCardMain {

  }

  .secondCol {
    width: 95%;
    position: absolute;
    top: 172px;
    left: 10px;
  }


  .vCardSubtitleMain {
    z-index: 1;
    font-size: 1rem;
    position: absolute;
    bottom: 3px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 120px;
    height: 90px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 550;
  }

  .textCardFeatureMain {
    margin-top: 8px;
  }

  .textCardFeatureDiv {
    margin-top: 4px;
  }

  .textCardFeature {
    font-size: 1rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 0.8rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 40px;
  }

  .vBtnColor {
    font-size: 0.8rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  /*  стили для xl-устройств */
  .widthBlock {
    width: 100%;
  }

  .vCardMain {

  }

  .secondCol {
    width: 95%;
    position: absolute;
    top: 172px;
    left: 10px;
  }


  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.8rem;
    position: absolute;
    bottom: 3px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 120px;
    height: 90px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.1rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 550;
  }

  .textCardFeatureMain {
    margin-top: 8px;
  }

  .textCardFeatureDiv {
    margin-top: 4px;
  }

  .textCardFeature {
    font-size: 0.9rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 0.8rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 40px;
  }

  .vBtnColor {
    font-size: 0.8rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /*  стили для xl-устройств */
  .widthBlock {
    width: 100%;
  }

  .vCardMain {

  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.6rem;
    position: absolute;
    bottom: 3px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 100px;
    height: 75px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 0.8rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 500;
  }

  .textCardFeatureMain {
    margin-top: 8px;
  }

  .textCardFeatureDiv {
    margin-top: 4px;
  }

  .textCardFeature {
    font-size: 0.7rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 0.8rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 0.6rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 0.8rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 40px;
  }

  .vBtnColor {
    font-size: 0.8rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /*  стили для xl-устройств */
  .widthBlock {
    width: 100%;
  }

  .vCardMain {

  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.8rem;
    position: absolute;
    bottom: 10px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 180px;
    height: 135px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 500;
  }

  .textCardFeatureMain {
    margin-top: 4px;
  }

  .textCardFeatureDiv {
    margin-top: 4px;
  }

  .textCardFeature {
    font-size: 0.8rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 1.2rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 60px;
  }

  .vBtnColor {
    font-size: 1rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для xl-устройств */
  .widthBlock {
    width: 100%;
  }

  .vCardMain {

  }

  .v-btn {
    color: $primary;
    background-color: $background;
  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.8rem;
    position: absolute;
    bottom: 10px;
    right: 60px;
  }

  .photoInCardBlock {
    width: 230px;
    height: 175px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.3rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 500;
  }

  .textCardFeatureMain {
    margin-top: 12px;
  }

  .textCardFeatureDiv {
    margin-top: 2px;
  }

  .textCardFeature {
    font-size: 1.1rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.3rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 1.2rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 80px;
  }

  .vBtnColor {
    font-size: 1.5rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xxl-устройств */
  .widthBlock {
    width: 100%;
  }

  .vCardMain {
    display: flex;
    justify-content: space-around;
  }

  .v-btn {
    color: $primary;
    background-color: $background;
  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 1.2rem;
    position: absolute;
    bottom: 10px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 350px;
    height: 265px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.8rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
  }

  .textCardFeatureMain {
    margin-top: 12px;
  }

  .textCardFeatureDiv {
    margin-top: 4px;
  }

  .textCardFeature {
    font-size: 1.5rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 1.3rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 1.4rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 100px;
  }

  .vBtnColor {
    font-size: 1.7rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
  .widthBlock {
    width: 2300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .vCardMain {
    display: flex;
    justify-content: space-around;
  }

  .v-btn {
    color: $primary;
    background-color: $background;
  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 1.2rem;
    position: absolute;
    bottom: 10px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 200px;
    height: 150px;
  }

  .photoInCard {
    width: 100%;
    height: 100%;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.8rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
  }

  .textCardFeatureMain {
    margin-top: 12px;
  }

  .textCardFeatureDiv {
    margin-top: 4px;
  }

  .textCardFeature {
    font-size: 1.5rem;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability, .textCardAvailabilityFalse {
    text-align: center;
    padding-top: 8px;
    font-size: 1.3rem;
    font-weight: 500;
    color: $success;
  }

  .textCardAvailabilityFalse {
    color: $text;
  }

  .vBtnBuy {
    font-size: 1.4rem;
    color: $background;
    background: $primary;
  }

  .vBtnBuy:hover {
    color: $primary;
    background: $background;
    border: 1px solid $primary;
  }

  .vBtnColorBlock {
    width: 100%;
    height: 100px;
  }

  .vBtnColor {
    font-size: 1.5rem;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  .vBtnColor:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

</style>