<script setup="">

// core
import {computed, onMounted, ref} from 'vue'
//
import {useDisplay} from 'vuetify'

const {name} = useDisplay()
import _ from 'lodash'
// store
import {useBasketStore} from '../../stores/counterBasket.js'
import {useInstrumentStore} from '../../stores/counter.js'

const {
  filterCrodlessInstrument,
  filterGasolineInstrument,
  filterNetworkInstrument,
  filterPneumotoolInstrument
} = useInstrumentStore()
filterCrodlessInstrument()
filterGasolineInstrument()
filterNetworkInstrument()
filterPneumotoolInstrument()

const {
  getLocalStorageInBasketObject,
  getBasket,
  basketArray,
  importBasketId,
  findByCordlessID,
  findByGasolineID,
  findByNetworkID,
  findByPneuomotoolID
} = useBasketStore()
getLocalStorageInBasketObject()

const widthFunc = () => {
  if (name.value === 'xxl') {
    return '346'
  } else if (name.value === 'xl') {
    return '346'
  } else if (name.value === 'lg') {
    return '300'
  } else if (name.value === 'md') {
    return '250'
  } else if (name.value === 'sm') {
    return '150'
  } else if (name.value === 'xs') {
    return '150'
  }
}

const heightFunc = () => {
  if (name.value === 'xxl') {
    return '72'
  } else if (name.value === 'xl') {
    return '72'
  } else if (name.value === 'lg') {
    return '72'
  } else if (name.value === 'md') {
    return '56'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'xs') {
    return '36'
  }
}


const getBasketArray = computed(() => {
  return basketArray[0]
})
const arrayObjectsInInstrument = getBasketArray.value


const deleteArray = () => {
  localStorage.setItem("basket_object", JSON.stringify([]))

}

const arrayObjectsInInstrumentCopy = arrayObjectsInInstrument

let arrayAmount = []
let arraySum = []

const forIArray = (array) => {

  for (let i = 0; i < array.length; i++) {
    arrayAmount.push(array[i].orderSum)
    arraySum.push(array[i].priceOrder)
  }
}
forIArray(arrayObjectsInInstrumentCopy)

const numberInAmount = ref(0)
const numberInPriceSum = ref(0)

const forIArrayAmount = (array) => {
  for (let i = 0; i < array.length; i++) {
    numberInAmount.value = numberInAmount.value + array[i]
  }
  localStorage.setItem("basket_array_amount", JSON.stringify(numberInAmount.value))
}
forIArrayAmount(arrayAmount)

const forIArraySum = (array) => {
  for (let i = 0; i < array.length; i++) {
    numberInPriceSum.value = numberInPriceSum.value + array[i]
  }
  localStorage.setItem("basket_array_price_sum", JSON.stringify(numberInPriceSum.value))
}
forIArraySum(arraySum)


</script>

<template>
  <div class="blockTitleInSite d-flex">
    <h1 class="blockTitleInSiteTitle">Корзина</h1>
    <v-btn
        @click="deleteArray"
        class="blockTitleInSiteBtnDelete d-flex justify-center align-center"
        href="/basket/">Удалить все товары
    </v-btn>
  </div>
  <div class="blockBasketInSite">
    <div class="blockFirstBasket">

      <div class="blockMainBasketInfo d-flex ">
        <div class="blockMainBasketInfoText">
          <h1 class="blockMainBasketInfoTextTitle">Наименование</h1>
        </div>
        <div class="blockMainBasketPriceAmountSum d-flex">
          <h1 class="blockMainBasketPrice">Цена</h1>
          <h1 class="blockMainBasketAmount">Количество</h1>
          <h1 class="blockMainBasketSum">Сумма</h1>
        </div>
      </div>

      <div class="blockVCardFirstBasketDiv">
        <div class="blockVCardFirstBasket"
             v-for="item in arrayObjectsInInstrument">
          <div class="blockVCardFirstBasketItemPhotoMain d-flex justify-center align-center">
            <img :src="item.imgTitle" alt="" class="blockVCardFirstBasketItemPhoto">
          </div>
          <div class="blockVCardFirstBasketItemInfoText pa-1">
            <p class="blockVCardFirstBasketItemSubtitle">Код: {{ item.id }}</p>
            <a href="#" class="blockVCardFirstBasketItemTitle">{{ item.name }}</a>
          </div>
          <div class="blockVCardFirstBasketItemPriceAmountSum d-flex">
            <div class="blockVCardFirstBasketItemPriceMain d-flex justify-center align-center">
              <h1 class="blockVCardFirstBasketItemPriceMainTitle">{{ item.price }} р.</h1>
            </div>
            <div class="blockVCardFirstBasketItemAmountMain d-flex justify-center align-center">
              <h1 class="blockVCardFirstBasketItemAmountMainTitle">{{ item.orderSum }}</h1>
            </div>
            <div class="blockVCardFirstBasketItemSumMain d-flex justify-center align-center">
              <h1 class="blockVCardFirstBasketItemSumMainTitle">{{ item.priceOrder }} р.</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="blockSecondBasket ">
      <h1 class="secondBasketMainTitle">Ваш заказ</h1>
      <h1 class="secondBasketChoiceTitle">Выбрано товаров на кол-во:
        <span class="secondBasketSpanInText">{{ numberInAmount }} шт</span></h1>
      <h1 class="secondBasketPriceTitle">Общая стоимость заказа:
        <span class="secondBasketSpanInText">{{ numberInPriceSum }} рублей</span></h1>
      <v-divider
          :thickness="2"
          class="border-opacity-25"
          color="background"
      ></v-divider>
      <div class="secondBlockVBtnBlock d-flex justify-center align-center">
        <v-btn
            href="/checkout/"
            :width="widthFunc()"
            :height="heightFunc()"
            class="secondBasketVBtnDesign"
        >Оформить заказ
        </v-btn>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@import '../../assets/mixins';


// Media

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 1.5rem;
    margin-right: 15px;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    font-size: 1rem;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 0.8rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 100px;
    box-shadow: 0 0 1px 1px $primary;
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 50px;
    height: 50px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.5rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 0.7rem;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
    border-left: 2px solid $primary;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 0.8rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 30%;
    height: 300px;
    box-shadow: 0 0 0 2px $primary;
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 10%;
    text-align: left;
    font-size: 1rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
    background-color: $background;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 20%;
    font-weight: 500;
    font-size: 0.8rem;
    padding-left: 4px;
    padding-top: 0;
    color: $text;
  }

  .secondBasketChoiceTitle {
  }

  .secondBasketPriceTitle {
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 50%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /* стили для sm-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 1.5rem;
    margin-right: 15px;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    font-size: 1rem;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 1rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 100px;
    box-shadow: 0 0 1px 1px $primary;
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 50px;
    height: 50px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.7rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 0.8rem;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
    border-left: 2px solid $primary;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 0.8rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 30%;
    height: 300px;
    box-shadow: 0 0 0 2px $primary;
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 10%;
    text-align: left;
    font-size: 1rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
    background-color: $background;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 20%;
    font-weight: 500;
    font-size: 0.8rem;
    padding-left: 4px;
    padding-top: 0;
    color: $text;
  }

  .secondBasketChoiceTitle {
  }

  .secondBasketPriceTitle {
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 50%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /* стили для md-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2rem;
    margin-right: 15px;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1.3rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 1.3rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 170px;
    box-shadow: 0 0 1px 1px $primary;
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 80px;
    height: 80px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 0.9rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1rem;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
    border-left: 2px solid $primary;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 1.3rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 30%;
    height: 450px;
    box-shadow: 0 0 0 2px $primary;
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 15%;
    text-align: left;
    font-size: 1.3rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
    background-color: $background;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 10%;
    font-weight: 500;
    font-size: 1rem;
    padding-left: 16px;
    padding-top: 0;
    color: $text;
  }

  .secondBasketChoiceTitle {
  }

  .secondBasketPriceTitle {
    height: 15%;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 55%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2rem;
    margin-right: 15px;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 1.7rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 1.7rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 170px;
    box-shadow: 0 0 1px 1px $primary;
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 115px;
    height: 115px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 1.1rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1.2rem;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
    border-left: 2px solid $primary;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 1.5rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 30%;
    height: 450px;
    box-shadow: 0 0 0 2px $primary;
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 15%;
    text-align: left;
    font-size: 1.7rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
    background-color: $background;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 20%;
    font-weight: 500;
    font-size: 1.5rem;
    padding-left: 16px;
    padding-top: 0;
    color: $text;
  }

  .secondBasketChoiceTitle {
  }

  .secondBasketPriceTitle {
    height: 25%;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 35%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2.5rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    width: 100%;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 2rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasket {
    width: 100%;
    height: 200px;
    box-shadow: 0 0 1px 1px $primary;
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 160px;
    height: 160px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 1.4rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1.6rem;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
    border-left: 2px solid $primary;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 2rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 30%;
    height: 450px;
    box-shadow: 0 0 0 2px $primary;
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 15%;
    text-align: left;
    font-size: 2rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
    background-color: $background;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 15%;
    font-weight: 500;
    font-size: 1.7rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
  }

  .secondBasketChoiceTitle {
  }

  .secondBasketPriceTitle {
    height: 25%;
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 45%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
  .blockVCardFirstBasketItemPriceTitle {
    color: $textSpan;
  }

  // MAIN BLOCK

  // --- MAIN BLOCK TITLE

  .blockTitleInSite {
    width: 100%;
    height: 50px;
    background-color: $background;
  }

  .blockTitleInSiteTitle {
    color: $text;
    font-size: 2.5rem;
  }

  .blockTitleInSiteBtnDelete {
    width: 300px;
    height: 36px;
    margin-top: 4px;
    margin-left: 20px;
    font-weight: 600;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .blockTitleInSiteBtnDelete:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

  // BLOCK BASKET

  .blockBasketInSite {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    background-color: $background;
  }

  // FIRST BASKET

  .blockFirstBasket {
    width: 70%;
    min-height: 100vh;
    background-color: $background;
  }

  .blockMainBasketInfo {
    width: 100%;
  }

  .blockMainBasketInfoText {
    width: 40%;
  }

  .blockMainBasketInfoTextTitle {
    font-size: 2rem;
    color: $textSpan;
  }

  .blockMainBasketPriceAmountSum {
    width: 60%;
  }

  .blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
    width: 60%;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    color: $textSpan;
    background-color: $background;
  }

  .blockMainBasketAmount {
    background-color: $background;
  }

  .blockMainBasketSum {
    background-color: $background;
  }

  // --- FIRST BASKET V-CARD

  .blockVCardFirstBasketDiv {
    width: 100%;
    margin-top: 30px;
  }

  .blockVCardFirstBasket {
    width: 100%;
    min-height: 250px;
    display: flex;
    margin-top: 50px;
    padding: 25px;
    box-shadow:
        0px 0px 10.5px rgba(0, 0, 0, 0.24),
        0px 0px 84px rgba(0, 0, 0, 0.12)
  ;
    background-color: $background;
  }

  // PHOTO

  .blockVCardFirstBasketItemPhotoMain {
    width: 15%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemPhoto {
    width: 200px;
    height: 180px;
  }

  // NAME

  .blockVCardFirstBasketItemInfoText {
    width: 25%;
    background-color: $background;
  }

  .blockVCardFirstBasketItemSubtitle {
    color: $textSpan;
    font-size: 1.6rem;
  }

  .blockVCardFirstBasketItemTitle {
    color: $text;
    font-size: 1.8rem;
  }

  // PRICE AMOUNT SUM

  .blockVCardFirstBasketItemPriceAmountSum {
    width: 60%;
    background-color: white;
  }

  .blockVCardFirstBasketItemPriceMain, .blockVCardFirstBasketItemAmountMain, .blockVCardFirstBasketItemSumMain {
    width: 60%;
  }

  .blockVCardFirstBasketItemPriceMainTitle, .blockVCardFirstBasketItemAmountMainTitle, .blockVCardFirstBasketItemSumMainTitle {
    color: $text;
    font-size: 2rem;
  }

  // PRICE

  .blockVCardFirstBasketItemPriceMain {
  }

  .blockVCardFirstBasketItemPriceMainTitle {
  }

  // AMOUNT

  .blockVCardFirstBasketItemAmountMain {
  }

  .blockVCardFirstBasketItemAmountMainTitle {
  }

  // SUM

  .blockVCardFirstBasketItemSumMain {
  }

  .blockVCardFirstBasketItemSumMainTitle {
  }


  //

  // SECOND BASKET

  .blockSecondBasket {
    width: 20%;
    height: 450px;
    box-shadow: 0 0 0 2px $primary;
    background-color: $background;
  }

  .secondBasketMainTitle {
    width: 100%;
    height: 15%;
    text-align: left;
    font-size: 2.5rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
    background-color: $background;
  }

  .secondBasketChoiceTitle, .secondBasketPriceTitle {
    width: 100%;
    height: 20%;
    font-weight: 500;
    font-size: 2rem;
    padding-left: 24px;
    padding-top: 8px;
    color: $text;
  }

  .secondBasketChoiceTitle {
  }

  .secondBasketPriceTitle {
  }

  .secondBlockVBtnBlock {
    width: 100%;
    height: 45%;
  }

  .secondBasketSpanInText {
    color: $textSpan;
    font-weight: 600;
  }

  .secondBasketVBtnDesign {
    width: 350px;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .secondBasketVBtnDesign:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }
}

</style>
