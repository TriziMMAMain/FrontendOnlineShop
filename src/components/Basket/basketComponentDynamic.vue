<script setup="">
// import
import {ref} from 'vue'
import _ from "lodash";
import {useBasketStore} from '../../stores/counterBasket.js'
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
// variable
localStorage.setItem("basket_array", JSON.stringify([]))
const getLocalStoreIdBasket = JSON.parse(localStorage.getItem("basket_id"))
const {
  toLocalStorageInBasketItem,
  getLocalStorageInBasketItem,
  setLocalStorageBasketObject,
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
    arrayInstrumentInBasket.push(networkId)
  }
  if (pneuomotoolId === undefined) {
    // console.log(`Пусто`)
  } else {
    arrayInstrumentInBasket.push(pneuomotoolId)
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
    basketArraySecond.orderSum = orderInInstrument.value
    arrayInBasketInstrument[0][0] = basketArraySecond
    console.log(`basket_array`, arrayInBasketInstrument[0][0])
    toLocalStorageInBasketItem(arrayInBasketInstrument[0][0])
    getLocalStorageInBasketItem()
    setLocalStorageBasketObject(arrayInBasketInstrument[0][0])
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
  <v-card class="vCardBasket pa-2" v-for="item in arrayInstrumentInBasket">
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
    <!--      BLOCK BASKET MAIN -->
    <div class="blockBasketMain d-flex">
      <!--        BLOCK BASKET MAIN PHOTO -->
      <div class="blockBasketPhotoMain d-flex justify-center align-center">
        <img :src="item.imgTitle" alt="" class="photoMainImg">
      </div>
      <!--        BLOCK BASKET TITLE PRICE BTN -->
      <div class="blockBasketTitlePriceBtn pa-2">
        <!--          BLOCK BASKET TITLE SECOND -->
        <div class="blockBasketTitleSecond pa-1">
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
          <p class="blockBasketBtnMainOrderPrice ma-4">{{ orderInInstrument }}</p>
          <v-btn
              class="blockBasketBtnMainInMinus"
              @click="VBtnClickInMinus">-
          </v-btn>
        </div>
      </div>
      <!--        BLOCK BASKET LINK IN BASKET-->
      <div class="blockBasketLinkInBasket  pa-1">
        <v-btn
            @click="VBtnClickInBasket"
            class="linkInBasketBtn mt-5">Добавить в корзину
        </v-btn>
        <p class="linkInBasketBlockBtnSecondTitle mt-5">
          В вашу коризну будет добавлен инструмент в количестве
          <span class="linkInBasketBlockBtnSecondTitleSpan">{{ orderInInstrument }} шт</span>,
          на сумму в <span class="linkInBasketBlockBtnSecondTitleSpan">{{ orderSumPrice }} рублей</span>
        </p>
      </div>
    </div>
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
  box-shadow: 0 0 0 1px rgba(55, 53, 53, 0.3);
  background-color: $background;
}

// BLOCK BASKET TITLE MAIN
.blockBasketTitleMain {
  width: 100%;
  height: 15%;
  position: relative;
  border-bottom: 2px solid $primary;
  background-color: $background;
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
  font-weight: 500;
  color: $text;
}

// BLOCK BASKET MAIN
.blockBasketMain {
  width: 100%;
  height: 100%;
  background-color: $background;
}

// BLOCK BASKET MAIN PHOTO
.blockBasketPhotoMain {
  width: 20%;
  height: 300px;
  background-color: $background;
}

.photoMainImg {
  width: 250px;
  height: 250px;
}

// BLOCK BASKET TITLE PRICE BTN
.blockBasketTitlePriceBtn {
  width: 80%;
  height: 300px;
  border-right: 1px solid $primary;
  border-left: 1px solid $primary;
  background-color: $background;
}

// BLOCK BASKET TITLE SECOND
.blockBasketTitleSecond {
  width: 100%;
  height: 40%;
  background-color: $background;
}

// BLOCK BASKET TITLE SECOND BLOCK ONE
.titleSecondTitle {
  font-size: 1.7rem;
  font-weight: 500;
  color: $text;
}

// BLOCK BASKET PRICE MAIN
.blockBasketPriceMain {
  width: 100%;
  height: 10%;
  background-color: $background;
}

.priceMainTitle {
  font-size: 1.7rem;
  font-weight: 500;
  color: $text;
}

// BLOCK BASKET BTN MAIN
.blockBasketBtnMain {
  width: 100%;
  height: 50%;
  background-color: $background;
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
  height: 100%;
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

// Media

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 400px;
    height: 450px;
    position: relative;
    top: 15%;
    left: 15%;
    z-index: 1;
    box-shadow: 0 0 0 1px rgba(55, 53, 53, 0.3);
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 10%;
    position: relative;
    border-bottom: 1px solid $primary;
    background-color: $background;
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
    font-size: 1.1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 40%;
    height: 200px;
    border: none;
    border-bottom: 1px solid $primary;
    background-color: $background;
  }

  .photoMainImg {
    width: 150px;
    height: 150px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 60%;
    height: 200px;
    border-left: 1px solid $primary;
    border-right: none;
    border-bottom: 1px solid $primary;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 50%;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 0.9rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 15%;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 30%;
    background-color: $background;
  }

  .blockBasketBtnMainInPlus, .blockBasketBtnMainInMinus {
    font-size: 1rem;
    color: $text;
    background-color: $background;
    border: 1px solid $text;
  }

  .blockBasketBtnMainInPlus {

  }

  .blockBasketBtnMainOrderPrice {
    font-size: 1.3rem;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .linkInBasketBtn {
    position: absolute;
    left: 30%;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBlockBtnSecondTitle {
    width: 100%;
    height: 100%;
    position: relative;
    top: 10%;
    font-size: 0.9rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /* стили для sm-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 500px;
    height: 550px;
    position: relative;
    top: 10%;
    left: 25%;
    z-index: 1;
    box-shadow: 0 0 0 1px rgba(55, 53, 53, 0.3);
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 7%;
    position: relative;
    border-bottom: 2px solid $primary;
    background-color: $background;
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
    font-size: 1.3rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 50%;
    height: 300px;
    border-left: 1px solid $primary;
    border-bottom: 1px solid $primary;
    background-color: $background;
  }

  .photoMainImg {
    width: 200px;
    height: 200px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 50%;
    height: 300px;
    border-left: 1px solid $primary;
    border-right: 1px solid $primary;
    border-bottom: 1px solid $primary;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 40%;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1.1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 10%;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1.1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 50%;
    background-color: $background;
  }

  .blockBasketBtnMainInPlus, .blockBasketBtnMainInMinus {
    font-size: 1.5rem;
    color: $text;
    background-color: $background;
    border: 1px solid $text;
  }

  .blockBasketBtnMainInPlus {

  }

  .blockBasketBtnMainOrderPrice {
    font-size: 1.3rem;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .linkInBasketBtn {
    position: absolute;
    left: 30%;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBlockBtnSecondTitle {
    width: 100%;
    height: 100%;
    position: relative;
    top: 10%;
    font-size: 1.1rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  /* стили для md-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 800px;
    height: 350px;
    top: 20%;
    left: 10%;
    z-index: 1;
    box-shadow: 0 0 0 1px rgba(55, 53, 53, 0.3);
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 15%;
    position: relative;
    border-bottom: 2px solid $primary;
    background-color: $background;
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
    font-size: 1.3rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    height: 100%;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 20%;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 150px;
    height: 150px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 60%;
    height: 300px;
    border-right: 1px solid $primary;
    border-left: 1px solid $primary;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 40%;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 10%;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 50%;
    background-color: $background;
  }

  .blockBasketBtnMainInPlus, .blockBasketBtnMainInMinus {
    font-size: 1.5rem;
    color: $text;
    background-color: $background;
    border: 1px solid $text;
  }

  .blockBasketBtnMainInPlus {

  }

  .blockBasketBtnMainOrderPrice {
    font-size: 1.3rem;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 20%;
    height: 100%;
  }

  .linkInBasketBtn {
    font-size: 0.7rem;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBlockBtnSecondTitle {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-size: 1rem;
    font-weight: 700;
    color: $textSpan;
  }
}

@media screen and (min-width: 1264px) and (max-width: 1904px) {
  /*  стили для lg-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 1100px;
    height: 350px;
    z-index: 1;
    top: 20%;
    left: 10%;
    box-shadow: 0 0 0 1px rgba(55, 53, 53, 0.3);
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 15%;
    position: relative;
    border-bottom: 2px solid $primary;
    background-color: $background;
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
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    height: 100%;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 20%;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 200px;
    height: 200px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 60%;
    height: 300px;
    border-right: 1px solid $primary;
    border-left: 1px solid $primary;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 40%;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 10%;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 50%;
    background-color: $background;
  }

  .blockBasketBtnMainInPlus, .blockBasketBtnMainInMinus {
    font-size: 1.5rem;
    color: $text;
    background-color: $background;
    border: 1px solid $text;
  }

  .blockBasketBtnMainInPlus {

  }

  .blockBasketBtnMainOrderPrice {
    font-size: 1.3rem;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 20%;
    height: 100%;
  }

  .linkInBasketBtn {
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBlockBtnSecondTitle {
    font-size: 1.1rem;
    padding-left: 4px;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }

//  DONE!!!
}

@media screen and (min-width: 1904px) {
  /*  стили для xl-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 1600px;
    height: 350px;
    position: relative;
    top: 20%;
    left: 10%;
    z-index: 1;
    box-shadow: 0 0 0 1px rgba(55, 53, 53, 0.3);
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 15%;
    position: relative;
    border-bottom: 2px solid $primary;
    background-color: $background;
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
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    height: 100%;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 20%;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 250px;
    height: 250px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 80%;
    height: 300px;
    border-right: 1px solid $primary;
    border-left: 1px solid $primary;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 40%;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1.7rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 10%;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1.7rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 50%;
    background-color: $background;
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
    height: 100%;
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

  //  DONE!!!
}


</style>
