<script setup="">

// core
import {computed, onMounted, ref} from 'vue'
//
import _ from 'lodash'
// store
import {useBasketStore} from '../../stores/counterBasket.js'

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

onMounted(() => {

})
const getBasketArray = computed(() => {
  return basketArray[0]
})
const asd = getBasketArray.value
console.log(asd);

const deleteArray = () => {
  localStorage.setItem("basket_object", JSON.stringify([]))

}

</script>

<template>
  <v-container fluid class="d-flex flex-wrap">
    <div class="blockTitleInSite">
      <h1 class="blockTitleInSiteTitle">Корзина
        <v-btn
          @click="deleteArray"><a href="/basket/" class="">Удалить все товары</a>
      </v-btn>
      </h1>

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
          </div>
        </div>

        <v-card class="blockVCardFirstBasket d-flex mt-3"
                v-for="item in asd"
        >
          <div class="blockVCardFirstBasketItemPhotoMain">
            <img :src="item.imgTitle" alt="" class="blockVCardFirstBasketItemPhoto">
          </div>

          <div class="blockVCardFirstBasketItemInfoText pa-1">
            <p class="blockVCardFirstBasketItemSubtitle">Код: {{ item.id }}</p>
            <a href="#" class="blockVCardFirstBasketItemTitle">{{ item.name }}</a>
          </div>

          <div class="blockVCardFirstBasketItemPriceAmountSum d-flex">

            <div class="blockVCardFirstBasketItemPriceMain d-flex justify-center align-center">
              <h1 class="blockVCardFirstBasketItemPriceTitle">{{ item.price }} р.</h1>
            </div>

          </div>
        </v-card>

        <!--          Ниже изначальный вариант v-card. START-->
        <!--        <v-card-->
        <!--            width="750"-->
        <!--            height="250"-->
        <!--            color="background"-->
        <!--            elevation="5"-->
        <!--            class="pa-1 ma-1 d-flex justify-space-around"-->
        <!--            v-for="i in example2">-->
        <!--          <v-row>-->
        <!--            &lt;!&ndash;      FIRST COL&ndash;&gt;-->
        <!--            <v-col cols="4"-->
        <!--                   class="pa-1">-->
        <!--              &lt;!&ndash;    CARD ITEM START&ndash;&gt;-->
        <!--              <v-card-item-->
        <!--                  class="pa-1">-->
        <!--                <v-card-subtitle>код: {{ i.id }}<br> {{ i.typeThis }}</v-card-subtitle>-->
        <!--                <div class="photoInCard">-->
        <!--                  <v-img-->
        <!--                      width="100%"-->
        <!--                      :src="i.imgTitle"></v-img>-->
        <!--                </div>-->
        <!--              </v-card-item>-->
        <!--              &lt;!&ndash;    CARD ITEM END&ndash;&gt;-->
        <!--            </v-col>-->
        <!--            &lt;!&ndash;      SECOND COL&ndash;&gt;-->
        <!--            <v-col cols="5"-->
        <!--                   class="pa-1">-->
        <!--              &lt;!&ndash;        TITLE&ndash;&gt;-->
        <!--              <div class="blockTitleCard">-->
        <!--                <button class="cardTextHref">{{ i.name }}</button>-->
        <!--              </div>-->
        <!--              &lt;!&ndash;        SPAN AND TEXT&ndash;&gt;-->
        <!--              <div-->
        <!--                  class="mt-1">-->
        <!--                <v-card-text v-for="item in example2[i.numberInList].featureTopTitle"-->
        <!--                             key="item"-->
        <!--                             class="textCardFeature pa-0">{{ item.featureTopTitleInfoTitle }}-->
        <!--                  <span class="spanTextCard">{{ item.featureTopTitleInfoText }}</span></v-card-text>-->
        <!--              </div>-->


        <!--            </v-col>-->
        <!--            &lt;!&ndash;      THIRD COL&ndash;&gt;-->
        <!--            <v-col cols="3"-->
        <!--                   class="pa-1">-->
        <!--              &lt;!&ndash;    CARD ACTIONS START&ndash;&gt;-->
        <!--              <p class="textCardPrice pa-2">-->
        <!--                {{ i.price }} рублей-->
        <!--              </p>-->
        <!--              <v-card-actions-->
        <!--                  class="pa-0 pr-1">-->

        <!--                <v-btn-->
        <!--                    @click=""-->
        <!--                    elevation="1"-->
        <!--                    class="vBtnBuy"-->
        <!--                    width="170px"-->
        <!--                    prepend-icon="fa-solid fa-cart-shopping"-->
        <!--                >-->
        <!--                  Убрать с корзины-->
        <!--                </v-btn>-->
        <!--              </v-card-actions>-->
        <!--              <p class="textCardAvailability">-->
        <!--                В наличии имеется > {{ i.availability }}-->
        <!--              </p>-->
        <!--              &lt;!&ndash;    CARD ACTIONS END&ndash;&gt;-->
        <!--            </v-col>-->
        <!--          </v-row>-->
        <!--        </v-card>-->
        <!--              END-->
      </div>
      <div class="blockSecondBasket"></div>
    </div>


  </v-container>
</template>

<style lang="scss" scoped>
@import '../../assets/mixins';

.example {
  color: white;
}

.textBtn {
  color: black;
}

.blockVCardFirstBasketItemPriceTitle {
  color: $textSpan;
}

// MAIN BLOCK

// --- MAIN BLOCK TITLE

.blockTitleInSite {
  width: 100%;
  height: 50px;
  background-color: white;
}

.blockTitleInSiteTitle {
  color: $text;
  font-size: 2rem;
}

// BLOCK BASKET

.blockBasketInSite {
  width: 100%;
  min-height: 100vh;
  background-color: blue;
}

// FIRST BASKET

.blockFirstBasket {
  width: 70%;
  min-height: 100vh;
  background-color: red;
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

.blockMainBasketPrice {
  width: 20%;
  text-align: center;
  font-size: 1.5rem;
  color: $textSpan;
}

// --- FIRST BASKET V-CARD

.blockVCardFirstBasket {
  width: 100%;
  height: 140px;
  background-color: $background;
}

// --- INPUT AMOUNT

.blockInputAmount {
  width: 10%;
  background-color: white;
}

.VCheckboxInput {
  color: black;
  background-color: white;
}


// SECOND BASKET

.blockSecondBasket {
  width: 30%;
  height: 450px;
  background-color: grey;
}

//


.v-card-title, .v-card-subtitle, .v-card-text {
  font-size: 0.8rem;
}

.v-card {

}

.v-btn {
  color: $primary;
  background-color: $background;
}

.photoInCard {
  width: 242px;
  height: 190px;
}

.cardTextHref {
  font-size: 1.1rem;
  text-decoration: none;
  text-align: center;
  color: $textSpan;
  font-weight: 500;
}

.blockTitleCard {
  width: 100%;
  display: flex;
  justify-content: center;
}

.textCardPrice {
  font-size: 0.9rem;
  text-align: right;
  font-weight: 600;
  color: #282828;
}

.spanTextCard {
  color: $textSpan;
}

.v-card-text {
  color: $text;
}

.textCardAvailability {
  color: $success;
  font-size: 0.8rem;
  font-weight: 600;
}

.vBtnBuy {
  color: $background;
  background: $primary;
}

.vBtnBuy:hover {
  color: $primary;
  background: $background;
  border: 1px solid $primary;
}


</style>
