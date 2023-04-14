<script setup="">

// core
import {computed, onMounted, ref} from 'vue'
//
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
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

const heightFunc = () => {
  if (name.value === 'xl') {
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
}
forIArrayAmount(arrayAmount)

const forIArraySum = (array) => {
  for (let i = 0; i < array.length; i++) {
    numberInPriceSum.value = numberInPriceSum.value + array[i]
  }
}
forIArraySum(arraySum)




</script>

<template>
  <v-container fluid class="d-flex flex-wrap">
    <div class="blockTitleInSite d-flex">
      <h1 class="blockTitleInSiteTitle mr-4">Корзина</h1>
      <v-btn
          @click="deleteArray"
          class="blockTitleInSiteBtnDelete d-flex justify-center align-center"
          href="/basket/">Удалить все товары
      </v-btn>
    </div>
    <div class="blockBasketInSite mt-3 d-flex ">
      <div class="blockMainBasket">

      </div>
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

        <v-card class="blockVCardFirstBasket d-flex mt-3 mr-1"
                v-for="item in arrayObjectsInInstrument"
        >
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
        </v-card>
      </div>
      <v-card class="blockSecondBasket ml-3">
        <h1 class="secondBasketMainTitle pl-6 pt-2">Ваш заказ</h1>
        <h1 class="secondBasketChoiceTitle pl-6 pt-6">Выбрано товаров на кол-во:
          <span class="secondBasketSpanInText">{{ numberInAmount }} шт</span></h1>
        <h1 class="secondBasketPriceTitle pl-6 pt-6">Общая стоимость заказа:
          <span class="secondBasketSpanInText">{{ numberInPriceSum  }} рублей</span></h1>
        <v-divider
            :thickness="2"
            class="border-opacity-25"
            color="background"
        ></v-divider>
        <div class="secondBlockVBtnBlock d-flex justify-center align-center">
          <v-btn
              href="/checkout/"
              :height="heightFunc()"
              class="secondBasketVBtnDesign"
          >Оформить заказ</v-btn>
        </div>
      </v-card>
    </div>


  </v-container>
</template>

<style lang="scss" scoped>
@import '../../assets/mixins';



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
  font-size: 1.5rem;
  color: $textSpan;
}

.blockMainBasketPriceAmountSum {
  width: 60%;
}

.blockMainBasketPrice, .blockMainBasketAmount, .blockMainBasketSum {
  width: 60%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
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
  font-size: 1.2rem;
}

.blockVCardFirstBasketItemTitle {
  color: $text;
  font-size: 1.3rem;
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

.blockVCardFirstBasketItemPriceMain {}

.blockVCardFirstBasketItemPriceMainTitle {}

// AMOUNT

.blockVCardFirstBasketItemAmountMain {}

.blockVCardFirstBasketItemAmountMainTitle {}

// SUM

.blockVCardFirstBasketItemSumMain {}

.blockVCardFirstBasketItemSumMainTitle {}


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
  color: $text;
  background-color: $background;
}

.secondBasketChoiceTitle, .secondBasketPriceTitle {
  width: 100%;
  height: 20%;
  font-weight: 500;
  font-size: 1.5rem;
  color: $text;
}

.secondBasketChoiceTitle {}

.secondBasketPriceTitle {}

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


// Media

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */

}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /* стили для sm-устройств */

}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /* стили для md-устройств */

}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */

}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */

}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */

}

</style>
