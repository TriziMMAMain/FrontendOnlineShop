<script setup="">
// import
import {ref} from 'vue'
import _ from "lodash";
import {useBasketStore} from '../../stores/counterBasket.js'
// variable
localStorage.setItem("basket_array", JSON.stringify([]))
const getLocalStoreIdBasket = JSON.parse(localStorage.getItem("basket_id"))
const {
  toLocalStorageInBasketItem,
  getLocalStorageInBasketItem,
  findByCordlessID,
  findByGasolineID,
  findByNetworkID,
  findByPneuomotoolID
} = useBasketStore()

const arrayInstrumentInBasket = []

const cordlessId = findByCordlessID(getLocalStoreIdBasket)
const gasolineId = findByGasolineID(getLocalStoreIdBasket)
const networkId = findByNetworkID(getLocalStoreIdBasket)
const pneuomotoolId = findByPneuomotoolID(getLocalStoreIdBasket)

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

const closeBasket = () => {
  let basketClick = ref(JSON.parse(localStorage.getItem("basket_click")))
  basketClick.value = !basketClick.value

  localStorage.setItem("basket_click", JSON.stringify(basketClick.value))

}

</script>

<template>
  <!--  V-CARD MAIN -->
  <v-card class="vCardBasket" v-for="item in arrayInstrumentInBasket">
    <!--      BLOCK BASKET TITLE MAIN -->
    <div class="blockBasketTitleMain">
      <h1 class="titleMainTitle">Товар будет добавлен в коризну</h1>
      <div class="titleMainBlock">
        <v-btn
            @click="closeBasket()"
            class="titleMainBlockClose">
          <v-icon icon="fa-solid fa-x"></v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <!--      BLOCK BASKET MAIN -->
    <div class="blockBasketMain d-flex">
      <!--        BLOCK BASKET MAIN PHOTO -->
      <div class="blockBasketPhotoMain d-flex justify-center align-center">
        <img :src="item.imgTitle" alt="" class="photoMainImg">
      </div>
      <!--        BLOCK BASKET TITLE PRICE BTN -->
      <div class="blockBasketTitlePriceBtn">
        <!--          BLOCK BASKET TITLE SECOND -->
        <div class="blockBasketTitleSecond d-flex align-center pa-1">
          <h1 class="titleSecondTitle">{{ item.name }}</h1>
        </div>
        <!--          BLOCK BASKET PRICE MAIN -->
        <div class="blockBasketPriceMain pa-1">
          <h1 class="priceMainTitle">{{ item.price }}</h1>
        </div>
        <!--          BLOCK BASKET BTN MAIN -->
        <div class="blockBasketBtnMain d-flex align-center pa-1">
          <v-btn
              class="blockBasketBtnMainInPlus"
              @click="VBtnClickInPLus">+
          </v-btn>
          <p class="blockBasketBtnMainOrderPrice">{{ orderInInstrument }}</p>
          <v-btn
              class="blockBasketBtnMainInMinus"
              @click="VBtnClickInMinus">-
          </v-btn>
        </div>
      </div>
      <!--        BLOCK BASKET LINK IN BASKET-->
      <div class="blockBasketLinkInBasket pa-1">
        <v-btn
            @click="VBtnClickInBasket"
            class="linkInBasketBtn">Добавить в корзину
        </v-btn>
        <p class="linkInBasketBlockBtnSecondTitle">
          В вашу коризну будет добавлен инструмент в количество
          <span class="linkInBasketBlockBtnSecondTitleSpan">{{ orderInInstrument }} шт</span>,
          на сумму в <span class="linkInBasketBlockBtnSecondTitleSpan">{{ orderSumPrice }} рублей</span>
        </p>
      </div>
    </div>
    <v-divider></v-divider>


  </v-card>
</template>


<style lang="scss" scoped>
@import './src/assets/mixins';

// CARD MAIN
.vCardBasket {
  width: 1600px;
  height: 350px;
  position: relative;
  top: 20%;
  left: 10%;
  z-index: 1;
  background-color: blue;
}

// BLOCK BASKET TITLE MAIN
.blockBasketTitleMain {
  width: 100%;
  height: 15%;
  position: relative;
  background-color: red;
}

.titleMainBlock {
  position: absolute;
  top: 0;
  right: 0;
}

.titleMainBlockClose {
  color: $text;
  background-color: $background;
  border: none;
}

.titleMainTitle {
  font-size: 2rem;
  color: $text;
}

// BLOCK BASKET MAIN
.blockBasketMain {
  width: 100%;
  height: 100%;
  background-color: #4CAF50;
}

// BLOCK BASKET MAIN PHOTO
.blockBasketPhotoMain {
  width: 20%;
  height: 300px;
  background-color: red;
}

.photoMainImg {
  width: 250px;
  height: 250px;
}

// BLOCK BASKET TITLE PRICE BTN
.blockBasketTitlePriceBtn {
  width: 80%;
  height: 300px;
  background-color: yellow;
}

// BLOCK BASKET TITLE SECOND
.blockBasketTitleSecond {
  width: 100%;
  height: 30%;
  background-color: black;
}

// BLOCK BASKET TITLE SECOND BLOCK ONE
.titleSecondTitle {
  font-size: 1.7rem;
  color: $text;
}

// BLOCK BASKET PRICE MAIN
.blockBasketPriceMain {
  width: 100%;
  height: 20%;
  background-color: grey;
}

.priceMainTitle {
  font-size: 1.7rem;
  color: $text;
}

// BLOCK BASKET BTN MAIN
.blockBasketBtnMain {
  width: 100%;
  height: 50%;
  background-color: #0014ff;
}

.blockBasketBtnMainInPlus, .blockBasketBtnMainInMinus {
  font-size: 2rem;
  color: $text;
  background-color: $background;
  border: 1px solid $text;
}

.blockBasketBtnMainInPlus {

}

.blockBasketBtnMainOrderPrice {
  font-size: 1.5rem;
  color: $text;
}

.blockBasketBtnMainInMinus {
}

// BLOCK BASKET LINK IN BASKET
.blockBasketLinkInBasket {
  width: 15%;
}

.linkInBasketBtn {
  color: $background;
  background-color: $primary;
}

.linkInBasketBlockBtnSecondTitle {
  font-size: 1.1rem;
  font-weight: 500;
  color: $text;
}

.linkInBasketBlockBtnSecondTitleSpan {
  font-weight: 700;
  color: $textSpan;
}

</style>
