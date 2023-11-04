<script setup="">
// import
import {onMounted, ref} from 'vue'
import _ from "lodash";
import {useInstrumentStore} from '../../stores/counter.js'
import {useBasketStore} from '../../stores/counterBasket.js'
import {useDisplay} from 'vuetify'
import {Promise} from "core-js";
import {ProccesingSuccessfuly, ProcessingError} from "../../notification/toasting";
import router from "../../router/index.js";

const {name} = useDisplay()
// variable
localStorage.setItem("basket_array", JSON.stringify([]))
const getLocalStoreIdBasket = JSON.parse(localStorage.getItem("basket_id"))
const {fetchingInstrumentById, filterByIdInstrument} = useInstrumentStore()
const {setLocalStorageBasketObject,} = useBasketStore()

const widthFuncPlusAndMinus = () => {
  if (name.value === 'xxl') {
    return '110'
  } else if (name.value === 'xl') {
    return '110'
  } else if (name.value === 'lg') {
    return '110'
  } else if (name.value === 'md') {
    return '110'
  } else if (name.value === 'sm') {
    return '80'
  } else if (name.value === 'xs') {
    return '80'
  }
}
const heightFuncPlusAndMinus = () => {
  if (name.value === 'xxl') {
    return '60'
  } else if (name.value === 'xl') {
    return '60'
  } else if (name.value === 'lg') {
    return '60'
  } else if (name.value === 'md') {
    return '50'
  } else if (name.value === 'sm') {
    return '40'
  } else if (name.value === 'xs') {
    return '40'
  }
}

const widthFuncBtnBuy = () => {
  if (name.value === 'xxl') {
    return '300'
  } else if (name.value === 'xl') {
    return '400'
  } else if (name.value === 'lg') {
    return '200'
  } else if (name.value === 'md') {
    return '170'
  } else if (name.value === 'sm') {
    return '130'
  } else if (name.value === 'xs') {
    return '300'
  }
}
const heightFuncBtnBuy = () => {
  if (name.value === 'xxl') {
    return '70'
  } else if (name.value === 'xl') {
    return '90'
  } else if (name.value === 'lg') {
    return '72'
  } else if (name.value === 'md') {
    return '49'
  } else if (name.value === 'sm') {
    return '56'
  } else if (name.value === 'xs') {
    return '56'
  }
}

// logical

const basketObjectAll = ref([])

let basketArrayCopy = ref([])
let orderPrice = ref('')
let orderSumPrice = ref('')
let orderInInstrument = ref(1)
let orderClick = ref(0)
let itemAvailability = ref(0)
let basketArraySecond = ref([])
let isLoading = ref(false)
let btnDisabledPlus = ref(false)
let btnDisabledMinus = ref(false)
let btnDisabledMain = ref(false)


onMounted(async () => {
  await cordlessLocalCopyFun()
})

const cordlessLocalCopyFun = async () => {
  isLoading.value = true
  try {
    if (await fetchingInstrumentById()) {
      basketObjectAll.value = JSON.parse(localStorage.getItem("basket_object"))
      const currentUrl = ref(router.currentRoute.value.params);
      const currentUrlId = ref(currentUrl.value.id)

      const instrumentLocal = ref(await filterByIdInstrument(currentUrlId.value))
      basketArrayCopy.value = instrumentLocal.value

      const checkoutBasketObject = _.filter(basketObjectAll.value, {name: basketArrayCopy.value[0].name})

      if (checkoutBasketObject.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 100))

        itemAvailability.value = basketArrayCopy.value[0].availability
        orderPrice.value = basketArrayCopy.value[0].price
        orderSumPrice.value = orderPrice.value * orderInInstrument.value
      } else {
        itemAvailability.value = basketArrayCopy.value[0].availability
        orderPrice.value = basketArrayCopy.value[0].price
        orderSumPrice.value = orderPrice.value * orderInInstrument.value
        btnDisabledPlus.value = true
        btnDisabledMinus.value = true
        btnDisabledMain.value = true
        ProcessingError('Данный товар уже находиться в корзине')
      }
      
    }
    if (itemAvailability.value === 1) {
      btnDisabledPlus.value = true
      btnDisabledMinus.value = true
    }


  } catch (error) {
    ProcessingError('Ошибка перезагрузите страницу')
    console.log(error)
  }
  isLoading.value = false
}


const VBtnClickInPLus = async () => {
  try {
    orderInInstrument.value = orderInInstrument.value + 1;
    // console.log('order', orderInInstrument.value)
    // console.log('order', itemAvailability.value)
    if (orderInInstrument.value === itemAvailability.value) {

      ProcessingError('Достигнуто максимальное кол-во товара')
      btnDisabledPlus.value = true
      btnDisabledMinus.value = false
    } else {
      btnDisabledPlus.value = false
      btnDisabledMinus.value = false
    }
    orderSumPrice.value = await orderPrice.value * orderInInstrument.value;
  } catch (error) {
    console.log(error);
  }
};

const VBtnClickInMinus = async () => {
  try {
    if (orderInInstrument.value > 1) {
      orderInInstrument.value = await new Promise((resolve, reject) => {
        try {
          const newValue = orderInInstrument.value - 1;
          resolve(newValue);
        } catch (error) {
          reject(error);
        }
      });
      btnDisabledMinus.value = false
      btnDisabledPlus.value = false
      orderSumPrice.value = await orderPrice.value * orderInInstrument.value;
    } else if (orderInInstrument.value === 1) {
      btnDisabledMinus.value = true
      btnDisabledPlus.value = false

      orderSumPrice.value = orderPrice.value / 1
    }

  } catch (error) {
    console.log(error);
    throw error; // добавляем throw, чтобы выводить сообщение об ошибке в консоли
  }
};
const orderInInstrumentFunc = () => {
  if (orderInInstrument.value === 0) {
    return true
  } else {
    return false
  }
}

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
  }
}


const closeBasket = () => {
  let basketClick = ref(JSON.parse(localStorage.getItem("basket_click")))
  basketClick.value = !basketClick.value

  localStorage.setItem("basket_click", JSON.stringify(basketClick.value))

}

</script>

<template>
  <div class="w-100 h-100 d-flex justify-center align-center"
       v-if="isLoading">
    <v-progress-circular
        color="primary"
        indeterminate
        :size="128"
        :width="12"
    ></v-progress-circular>
  </div>
  <div class="mainBlockInBasketDynamic w-100" v-else>
    <!--  V-CARD MAIN -->
    <div class="vCardBasket"
         v-for="item in basketArrayCopy">
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
      <div class="blockBasketMain">
        <!--        BLOCK BASKET MAIN PHOTO -->
        <div class="blockBasketPhotoMain d-flex justify-center align-center">
          <img :src="item.imgTitle" alt="" class="photoMainImg">
        </div>
        <!--        BLOCK BASKET TITLE PRICE BTN -->
        <div class="blockBasketTitlePriceBtn">
          <!--          BLOCK BASKET TITLE SECOND -->
          <div class="blockBasketTitleSecond">
            <h1 class="titleSecondTitle">{{ item.name }}</h1>
          </div>
          <!--          BLOCK BASKET PRICE MAIN -->
          <div class="blockBasketPriceMain">
            <h1 class="priceMainTitle">Цена за шт: {{ item.price }} рублей</h1>
          </div>
          <!--          BLOCK BASKET BTN MAIN -->
          <div class="blockBasketBtnMain d-flex align-center">
            <v-btn
                class="blockBasketBtnMainInPlus"
                :width="widthFuncPlusAndMinus()"
                :height="heightFuncPlusAndMinus()"
                :disabled="btnDisabledPlus"
                @click="VBtnClickInPLus">+
            </v-btn>
            <p class="blockBasketBtnMainOrderPrice">{{ orderInInstrument }}</p>
            <v-btn
                class="blockBasketBtnMainInMinus"
                :width="widthFuncPlusAndMinus()"
                :height="heightFuncPlusAndMinus()"
                :disabled="btnDisabledMinus"
                @click="VBtnClickInMinus">-
            </v-btn>
          </div>
        </div>
        <!--        BLOCK BASKET LINK IN BASKET-->
        <div class="blockBasketLinkInBasket">
          <v-btn
              @click="VBtnClickInBasket"
              :disabled="orderInInstrumentFunc() || btnDisabledMain"
              :width="widthFuncBtnBuy()"
              :height="heightFuncBtnBuy()"
              class="linkInBasketBtn">Добавить в корзину
          </v-btn>
          <p class="linkInBasketBlockBtnSecondTitle">
            В вашу коризну будет добавлен инструмент в количестве
            <span class="linkInBasketBlockBtnSecondTitleSpan">{{ orderInInstrument }} шт</span>,
            на сумму в <span class="linkInBasketBlockBtnSecondTitleSpan">{{ orderSumPrice }} рублей</span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import './src/assets/mixins';


// Media
@media screen and (max-width: 376px) {
  /*  стили для xs-устройств */
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    margin-top: 70px;
    z-index: 2;
  }

  // CARD MAIN
  .vCardBasket {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 15px;
    border-radius: 20px;
    z-index: 2;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 50px;
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
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 20px;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 20%;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 100px;
    height: 100px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 55%;
    min-height: 400px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 125px;
    display: flex;
    flex-wrap: wrap;
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
    font-size: 1.5rem;
    margin: 0 25px 0 25px;
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
    font-size: 1rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }

  //  DONE!!!
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  /*  стили для xs-устройств */
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    margin-top: 70px;
    z-index: 2;
  }

  // CARD MAIN
  .vCardBasket {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 15px;
    border-radius: 20px;
    z-index: 2;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 50px;
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
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET MAIN
  .blockBasketMain {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 20px;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 20%;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 100px;
    height: 100px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 55%;
    min-height: 400px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 125px;
    display: flex;
    flex-wrap: wrap;
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
    font-size: 1.5rem;
    margin: 0 25px 0 25px;
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
    font-size: 1rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }

  //  DONE!!!
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /*  стили для sm-устройств */
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  // CARD MAIN
  .vCardBasket {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 15px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    z-index: 2;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 50px;
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
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 20px;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 20%;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 100px;
    height: 100px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 55%;
    min-height: 300px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND BLOCK ONE
  .titleSecondTitle {
    font-size: 1.2rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET PRICE MAIN
  .blockBasketPriceMain {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .priceMainTitle {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  // BLOCK BASKET BTN MAIN
  .blockBasketBtnMain {
    width: 100%;
    height: 125px;
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
    font-size: 1.5rem;
    margin: 0 25px 0 25px;
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
    font-size: 0.5rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }

  //  DONE!!!
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /*  стили для md-устройств */
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  // CARD MAIN
  .vCardBasket {
    width: 100%;
    height: 100vh;
    position: relative;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    z-index: 2;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 50px;
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
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 20px;
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
    width: 55%;
    min-height: 300px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
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
    height: 50px;
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
    height: 125px;
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
    margin: 0 25px 0 25px;
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
    font-size: 0.8rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 500;
    color: $text;
  }

  .linkInBasketBlockBtnSecondTitleSpan {
    font-weight: 700;
    color: $textSpan;
  }

  //  DONE!!!
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  // CARD MAIN
  .vCardBasket {
    width: 1000px;
    min-height: 350px;
    position: relative;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    z-index: 2;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 70px;
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
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 20px;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 200px;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 200px;
    height: 200px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 500px;
    min-height: 300px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
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
    height: 50px;
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
    height: 125px;
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
    margin: 0 25px 0 25px;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 200px;
    height: 100%;
  }

  .linkInBasketBtn {
    font-size: 0.9rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 1.2rem;
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
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  // CARD MAIN
  .vCardBasket {
    width: 1600px;
    min-height: 350px;
    position: relative;
    margin: 0 auto;
    padding: 50px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    z-index: 2;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 70px;
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
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 30px;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 250px;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 250px;
    height: 250px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 900px;
    min-height: 300px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
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
    height: 75px;
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
    height: 100px;
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
    font-size: 2rem;
    margin: 0 25px 0 25px;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 300px;
    height: 100%;
  }

  .linkInBasketBtn {
    font-size: 1.2rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 1.4rem;
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
  .mainBlockInBasketDynamic {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
  }

  // CARD MAIN
  .vCardBasket {
    width: 1600px;
    min-height: 350px;
    position: relative;
    margin: 0 auto;
    padding: 50px;
    box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.24),
    0 0 84px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    z-index: 1;
    background-color: $background;
  }

  // BLOCK BASKET TITLE MAIN
  .blockBasketTitleMain {
    width: 100%;
    height: 70px;
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
    display: flex;
    justify-content: space-evenly;
    min-height: 300px;
    margin-top: 30px;
    background-color: $background;
  }

  // BLOCK BASKET MAIN PHOTO
  .blockBasketPhotoMain {
    width: 250px;
    height: 300px;
    background-color: $background;
  }

  .photoMainImg {
    width: 250px;
    height: 250px;
  }

  // BLOCK BASKET TITLE PRICE BTN
  .blockBasketTitlePriceBtn {
    width: 900px;
    min-height: 300px;
    padding-left: 24px;
    background-color: $background;
  }

  // BLOCK BASKET TITLE SECOND
  .blockBasketTitleSecond {
    width: 100%;
    height: 125px;
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
    height: 75px;
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
    height: 100px;
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
    font-size: 2rem;
    margin: 0 25px 0 25px;
    color: $text;
  }

  .blockBasketBtnMainInMinus {
  }

  // BLOCK BASKET LINK IN BASKET
  .blockBasketLinkInBasket {
    width: 300px;
    height: 100%;
  }

  .linkInBasketBtn {
    font-size: 1.2rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: $background;
    background-color: $primary;
  }

  .linkInBasketBtn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary
  }

  .linkInBasketBlockBtnSecondTitle {
    margin-top: 30px;
    font-size: 1.4rem;
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
