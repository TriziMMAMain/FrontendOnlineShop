<script setup="">
// import
import { ref } from 'vue'
import _ from "lodash";
import {useBasketStore} from '../../stores/counterBasket.js'
// variable
localStorage.setItem("basket_array", JSON.stringify([]))
const getLocalStoreIdBasket = JSON.parse(localStorage.getItem("basket_id"))
const {toLocalStorageInBasketItem, getLocalStorageInBasketItem, findByCordlessID, findByGasolineID, findByNetworkID, findByPneuomotoolID} = useBasketStore()

const arrayInstrumentInBasket = []

const cordlessId = findByCordlessID(getLocalStoreIdBasket)
const gasolineId = findByGasolineID(getLocalStoreIdBasket)
const networkId = findByNetworkID(getLocalStoreIdBasket)
const pneuomotoolId  = findByPneuomotoolID(getLocalStoreIdBasket)

// logical
const pushInArrayId = () => {
  if (cordlessId === undefined) {
    // console.log(`Пусто`)
  } else {
    arrayInstrumentInBasket.push(cordlessId)
  }
  if (gasolineId === undefined) {
    // console.log(`Пусто`)
  } else {
    arrayInstrumentInBasket.push(gasolineId)
  }
  if (networkId === undefined) {
    // console.log(`Пусто`)
  } else {
    arrayInstrumentInBasket.push(cordlessId)
  }
  if (pneuomotoolId === undefined) {
    // console.log(`Пусто`)
  } else {
    arrayInstrumentInBasket.push(cordlessId)
  }
  // console.log(`array`, arrayInstrumentInBasket)
}
pushInArrayId()

let arrayInBasketInstrument = []
arrayInBasketInstrument.push(arrayInstrumentInBasket)
let basketArrayCopy = arrayInBasketInstrument[0][0]


let orderPrice = ref(basketArrayCopy.priceOrder)
let orderSumPrice = ref(basketArrayCopy.priceOrder)
let orderInInstrument = ref(1)
let orderClick = ref(0)

const VBtnClickInPLus = () => {
  orderInInstrument.value = orderInInstrument.value + 1
  orderSumPrice.value = orderPrice.value * orderInInstrument.value
}

const VBtnClickInMinus = () => {
  if (orderInInstrument.value >= 1) {
    orderInInstrument.value = orderInInstrument.value - 1
    orderSumPrice.value = orderPrice.value * orderInInstrument.value
  } else if (orderInInstrument.value === 0) {
    console.log(`Нельзя выбрать 0 шт`)
    orderInInstrument.value = orderInInstrument.value + 1
  }

}
let basketArraySecond = basketArrayCopy

const VBtnClickInBasket = () => {
  orderClick.value = orderClick.value + 1
  if (orderClick.value === 1) {
    basketArraySecond.priceOrder = orderSumPrice.value
    arrayInBasketInstrument[0][0] = basketArraySecond
    console.log(`basket_array`, arrayInBasketInstrument[0][0])
    toLocalStorageInBasketItem(arrayInBasketInstrument[0][0])
    getLocalStorageInBasketItem()
    arrayInBasketInstrument = []
    orderInInstrument.value = 1
    orderSumPrice.value = orderPrice.value
  //  ДОЛЖНО БЫТЬ СООБЩЕНИЕ ОБ УСПЕШНОМ ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ
  } else if (orderClick.value >= 2) {
    orderInInstrument.value = 1
    orderSumPrice.value = orderPrice.value
    //  ДОЛЖНО БЫТЬ СООБЩЕНИЕ ОБ ТО ЧТО ТОВАР БЫЛ ДОБАВЛЕН В КОРЗИНУ РАНЕЕ
  }

}


</script>

<template>
<!--  V-CARD MAIN -->
  <v-card class="vCardBasket" v-for="item in arrayInstrumentInBasket">
<!--      BLOCK BASKET TITLE MAIN -->
      <div class="blockBasketTitleMain">
        <h1 class="titleMainTitle">Товар будет добавлен в коризну</h1>
      </div>
      <v-divider></v-divider>
<!--      BLOCK BASKET MAIN -->
      <div class="blockBasketMain">
<!--        BLOCK BASKET MAIN PHOTO -->
        <div class="blockBasketPhotoMain">
          <img :src="item.imgTitle" alt="" class="photoMainImg">
        </div>
<!--        BLOCK BASKET TITLE PRICE BTN -->
        <div class="blockBasketTitlePriceBtn">
<!--          BLOCK BASKET TITLE SECOND -->
          <div class="blockBasketTitleSecond">
            <a href="" class="titleSecondTitle">{{ item.name }}</a>
          </div>
<!--          BLOCK BASKET PRICE MAIN -->
          <div class="blockBasketPriceMain">{{ item.price }}</div>
<!--          BLOCK BASKET BTN MAIN -->
          <div class="blockBasketBtnMain d-flex ">
            <v-btn @click="VBtnClickInPLus">+</v-btn>
            <p>{{ orderInInstrument }}</p>
            <h1>{{ orderSumPrice }}</h1>
            <v-btn @click="VBtnClickInMinus">-</v-btn>
            <v-btn @click="VBtnClickInBasket">Добавить в корзину</v-btn>
          </div>
        </div>
<!--        BLOCK BASKET LINK IN BASKET-->
        <div class="blockBasketLinkInBasket"></div>
      </div>
      <v-divider></v-divider>


  </v-card>
</template>

<style lang="scss" scoped>

.vCardBasket {
  width: 100%;
  height: 100%;
  background-color: blue;
}

</style>
