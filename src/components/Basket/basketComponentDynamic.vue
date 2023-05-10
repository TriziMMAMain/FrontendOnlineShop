<script setup="">
// import
import {ref} from 'vue'
import _ from "lodash";
import {useBasketStore} from '../../stores/counterBasket.js'
import {useDisplay} from 'vuetify'
import {Promise} from "core-js";
import {ProccesingSuccessfuly, ProcessingError} from "../../notification/toasting";

const {name} = useDisplay()
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

const cordlessLocal = ref([])

let basketArrayCopy = ref([])
let orderPrice = ref('')
let orderSumPrice = ref('')
let orderInInstrument = ref(1)
let orderClick = ref(0)
let basketArraySecond = ref([])
let isLoading = ref(false)

const fetchingInstrumentFilterById = async () => {
  isLoading.value = true
  try {
    const response = await fetch('http://localhost:3000/api/instruments/get/instrument-find-by-id');
    if (response.ok) {
      cordlessLocal.value = await response.json()
      basketArrayCopy.value = await cordlessLocal.value
    } else {
      throw new Error(`Error fetching instrument: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
  isLoading.value = false
};

const cordlessLocalCopyFun = async () => {
  try {
    // получаем данные с сервера
    await fetchingInstrumentFilterById()

    // ожидаем получения данных из базы данных
    await new Promise((resolve) => setTimeout(resolve, 100))

    // определяем orderPrice и orderSumPrice после окончательной установки basketArrayCopy
    orderPrice.value = basketArrayCopy.value[0].price
    orderSumPrice.value = orderPrice.value * orderInInstrument.value
  } catch (error) {
    console.log(error)
  }
}

cordlessLocalCopyFun();


const VBtnClickInPLus = async () => {
  try {
    orderInInstrument.value = orderInInstrument.value + 1;
    orderSumPrice.value = await orderPrice.value * orderInInstrument.value;
  } catch (error) {
    console.log(error);
  }
};

const VBtnClickInMinus = async () => {
  try {
    if (orderInInstrument.value >= 1) {
      orderInInstrument.value = await new Promise((resolve, reject) => {
        try {
          const newValue = orderInInstrument.value - 1;
          resolve(newValue);
        } catch (error) {
          reject(error);
        }
      });

      orderSumPrice.value = await orderPrice.value * orderInInstrument.value;

    } else if (orderInInstrument.value === 0) {
      orderInInstrument.value = orderInInstrument.value + 1;
      orderSumPrice.value = await orderPrice.value;
    }

  } catch (error) {
    console.log(error);
    throw error; // добавляем throw, чтобы выводить сообщение об ошибке в консоли
  }
};


const VBtnClickInBasket = async () => {
  orderClick.value = orderClick.value + 1
  if (orderClick.value === 1) {
    basketArrayCopy.value[0].priceOrder = orderSumPrice.value
    basketArrayCopy.value[0].orderSum = orderInInstrument.value
    setLocalStorageBasketObject(basketArrayCopy.value[0])

    orderInInstrument.value = 1
    orderSumPrice.value = orderPrice.value
    ProccesingSuccessfuly('Товар был добавлен в корзину!')
  } else if (orderClick.value >= 2) {
    orderInInstrument.value = 1
    orderSumPrice.value = orderPrice.value
    ProcessingError('Товар уже был добавлен в корзину!')
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
  <div v-if="isLoading"> Loading</div>
  <div v-else>
    <!--  V-CARD MAIN -->
    <v-card class="vCardBasket pa-2" v-for="item in basketArrayCopy">
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
  </div>


</template>


<style lang="scss" scoped>
@import './src/assets/mixins';


// Media

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 400px;
    height: 400px;
    position: relative;
    top: 10px;
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
    width: 400px;
    height: 400px;
    position: relative;
    top: 10px;
    left: 20%;
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

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /* стили для md-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 800px;
    height: 350px;
    top: 35px;
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

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 1100px;
    height: 350px;
    z-index: 1;
    top: 35px;
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

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */
  // CARD MAIN
  .vCardBasket {
    width: 1600px;
    height: 350px;
    position: relative;
    top: 35px;
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

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
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
