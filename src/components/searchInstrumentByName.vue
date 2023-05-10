<script setup="">
// - Import
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useInstrumentStore} from '../stores/counter.js'
import {useBasketStore} from "../stores/counterBasket.js";
import {useDisplay} from 'vuetify'
import {Promise} from "core-js";

const {name} = useDisplay()
const {reloadWindow} = useInstrumentStore()
const {importBasketId} = useBasketStore()
const router = useRouter()

const heightFunc = () => {
  if (name.value === 'xs') {
    return '250'
  } else if (name.value === 'sm') {
    return '200'
  } else if (name.value === 'md') {
    return '250'
  } else if (name.value === 'lg') {
    return '250'
  } else if (name.value === 'xl') {
    return '250'
  } else if (name.value === 'xxl') {
    return '250'
  }
}

const weightFunc = () => {
  if (name.value === 'xs') {
    return '400'
  } else if (name.value === 'sm') {
    return '500'
  } else if (name.value === 'md') {
    return '750'
  } else if (name.value === 'lg') {
    return '750'
  } else if (name.value === 'xl') {
    return '900'
  } else if (name.value === 'xxl') {
    return '950'
  }
}

const firstColFunc = () => {
  if (name.value === 'xs') {
    return '3'
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
    return '6'
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
    return '3'
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

const weightFuncVBtn = () => {
  if (name.value === 'xs') {
    return '170'
  } else if (name.value === 'sm') {
    return '100'
  } else if (name.value === 'md') {
    return '170'
  } else if (name.value === 'lg') {
    return '170'
  } else if (name.value === 'xl') {
    return '170'
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
    return '48'
  } else if (name.value === 'xxl') {
    return '48'
  }
}

const instrumentFilterName = ref('')
const arrayLocalStorage = ref([])

const fetchingInstrumentFilterName = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instrument/get/filter/name');
    if (response.ok) {
      instrumentFilterName.value = await response.json();
      console.log(`instrument`, instrumentFilterName.value)
    } else {
      throw new Error(`Error fetching instrument: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchingInstrumentFilterName()
    .then(() => {
      console.log(`Fetching name good`);
      arrayLocalStorage.value.push(instrumentFilterName.value)
    })
    .catch((error) => {
      console.log(error);
    })




const viewDetails = async (id) => {
  console.log(`id`, id)
  console.log(`array`, arrayLocalStorage.value)
  if (arrayLocalStorage.value[0].typeThis === "Аккумуляторная дрель-шуруповерт") {
    localStorage.setItem("id_cordless", JSON.stringify(id))
    await router.push({name: 'cordlessInstrumentDrillsID', params: {id: id}}) // DRILL

  } else if (arrayLocalStorage.value[0].typeThis === "Аккумуляторная болгарка") {
    localStorage.setItem("id_cordless", JSON.stringify(id))
    await router.push({name: 'cordlessInstrumentGrindersID', params: {id: id}}) // GRINDERS

  } else if (arrayLocalStorage.value[0].typeThis === "Аккумуляторный перфоратор") {
    localStorage.setItem("id_cordless", JSON.stringify(id))
    await router.push({name: 'cordlessInstrumentScrewdriversID', params: {id: id}}) // SCREWDRIVERS

  } else if (arrayLocalStorage.value[0].typeThis === "Бензогенератор") {
    localStorage.setItem("id_gasoline", JSON.stringify(id))
    await router.push({name: 'gasolineInstrumentGeneratorId', params: {id: id}}) // GENERATOR

  } else if (arrayLocalStorage.value[0].typeThis === "Сетевая дрель") {
    localStorage.setItem("id_network", JSON.stringify(id))
    await router.push({name: 'networkInstrumentDrillId', params: {id: id}}) // NETWORK DRILL

  } else if (arrayLocalStorage.value[0].typeThis === "Компрессор") {
    localStorage.setItem("id_pneumotool", JSON.stringify(id))
    await router.push({name: 'pneumotoolInstrumentId', params: {id: id}}) // PNEUOMOTOOL COMPRESSOR
  }

}

// - Logical
let counterClick = ref(0)

const buyInBasket = (id) => {
  if (arrayLocalStorage[0].typeThis === "Аккумуляторная дрель-шуруповерт") {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_cordless", JSON.stringify(id))
    router.push({name: 'cordlessInstrumentDrillsID', params: {id: id}}) // DRILL

  } else if (arrayLocalStorage[0].typeThis === "Аккумуляторная болгарка") {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_cordless", JSON.stringify(id))
    router.push({name: 'cordlessInstrumentGrindersID', params: {id: id}}) // GRINDERS

  } else if (arrayLocalStorage[0].typeThis === "Аккумуляторный перфоратор") {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_cordless", JSON.stringify(id))
    router.push({name: 'cordlessInstrumentScrewdriversID', params: {id: id}}) // SCREWDRIVERS

  } else if (arrayLocalStorage[0].typeThis === "Бензогенератор") {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_gasoline", JSON.stringify(id))
    router.push({name: 'gasolineInstrumentGeneratorId', params: {id: id}}) // GENERATOR

  } else if (arrayLocalStorage[0].typeThis === "Сетевая дрель") {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_network", JSON.stringify(id))
    router.push({name: 'networkInstrumentDrillId', params: {id: id}}) // NETWORK DRILL

  } else if (arrayLocalStorage[0].typeThis === "Компрессор") {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_pneumotool", JSON.stringify(id))
    router.push({name: 'pneumotoolInstrumentId', params: {id: id}}) // PNEUOMOTOOL COMPRESSOR

  }


}
</script>

<template>
  <!--        CARD -->
  <v-card
      :width="weightFunc()"
      :height="heightFunc()"
      color="background"
      elevation="5"
      class="vCardMain pa-1 ma-1 d-flex justify-space-around"
      v-for="i in arrayLocalStorage">
    <v-row>
      <!--      FIRST COL-->
      <v-col :cols="firstColFunc()"
             class="d-flex justify-center align-center">
        <!--    CARD ITEM START-->
        <v-card-item>
          <div class="photoInCardBlock">
            <img class="photoInCard" :src="i.imgTitle" alt="">
          </div>
          <v-card-subtitle class="vCardSubtitleMain">Код: {{ i.id }}</v-card-subtitle>
        </v-card-item>
        <!--    CARD ITEM END-->
      </v-col>
      <!--      SECOND COL-->
      <v-col :cols="secondColFunc()"
             class="pa-1">
        <!--        TITLE-->
        <div class="blockTitleCard">
          <button @click="viewDetails(i.id)" class="cardTextHref mt-1">{{ i.name }}</button>
        </div>
        <!--        SPAN AND TEXT-->
        <div
            class="mt-1">
          <v-card-text v-for="item in arrayLocalStorage[i.numberInList].featureTopTitle"
                       key="item"
                       class="textCardFeature pa-0">{{ item.featureTopTitleInfoTitle }}
            <span class="spanTextCard">{{ item.featureTopTitleInfoText }}</span></v-card-text>
        </div>


      </v-col>
      <!--      THIRD COL-->
      <v-col :cols="thirdColFunc()"
             class="pa-1">
        <!--    CARD ACTIONS START-->

        <v-card-actions
            class="d-flex justify-center flex-wrap pa-0 pr-1">
          <p class="textCardPrice pt-3 pb-3">
            {{ i.price }} рублей
          </p>
          <v-btn
              @click="buyInBasket(i.id)"
              elevation="1"
              class="vBtnBuy"
              :width="weightFuncVBtn()"
              :height="heightFuncVBtn()"
              prepend-icon="fa-solid fa-cart-shopping"
          >
            Купить
          </v-btn>
        </v-card-actions>
        <p class="textCardAvailability">
          В наличии имеется > {{ i.availability }}
        </p>

        <!--    CARD ACTIONS END-->
      </v-col>
    </v-row>
  </v-card>
  <!--        END CARD-->
</template>

<style lang="scss" scoped>
// - import
@import './src/assets/mixins';



// Media

@media screen and (max-width: 600px)  {
  /*  стили для xl-устройств */
  .vCardMain {

  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.6rem;
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 80px;
    height: 80px;
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

  .textCardFeature {
    font-size: 0.6rem;
  }

  .spanTextCard {
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 0.8rem;
    text-align: right;
    font-weight: 600;
    color: $primary;
  }



  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    padding-top: 8px;
    font-size: 0.6rem;
    font-weight: 500;
    color: $success;
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
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /*  стили для xl-устройств */
  .vCardMain {

  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.6rem;
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 100px;
    height: 100px;
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

  .textCardFeature {
    font-size: 0.6rem;
  }

  .spanTextCard {
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 0.8rem;
    text-align: right;
    font-weight: 600;
    color: $primary;
  }



  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    padding-top: 8px;
    font-size: 0.6rem;
    font-weight: 500;
    color: $success;
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
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /*  стили для xl-устройств */
  .vCardMain {

  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 0.8rem;
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 160px;
    height: 160px;
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

  .textCardFeature {
    font-size: 0.8rem;
  }

  .spanTextCard {
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.2rem;
    text-align: right;
    font-weight: 600;
    color: $primary;
  }



  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    padding-top: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    color: $success;
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
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для xl-устройств */
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
    bottom: 0;
    right: 10px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 160px;
    height: 160px;
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

  .textCardFeature {
    font-size: 1rem;
  }

  .spanTextCard {
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.2rem;
    text-align: right;
    font-weight: 600;
    color: $primary;
  }



  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    padding-top: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: $success;
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
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */
  .vCardMain {

  }

  .v-btn {
    color: $primary;
    background-color: $background;
  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 200px;
    height: 200px;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.4rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 500;
  }

  .textCardFeature {
    font-size: 1.1rem;
  }

  .spanTextCard {
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.3rem;
    text-align: right;
    font-weight: 600;
    color: $primary;
  }



  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    padding-top: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    color: $success;
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
}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
  .vCardMain {

  }

  .v-btn {
    color: $primary;
    background-color: $background;
  }

  .vCardSubtitleMain {
    z-index: 1;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 200px;
    height: 200px;
  }

  .blockTitleCard {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cardTextHref {
    font-size: 1.4rem;
    text-decoration: none;
    text-align: center;
    color: $textSpan;
    font-weight: 500;
  }

  .textCardFeature {
    font-size: 1.1rem;
  }

  .spanTextCard {
    color: $textSpan;
  }

  .textCardPrice {
    font-size: 1.3rem;
    text-align: right;
    font-weight: 600;
    color: $primary;
  }



  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    padding-top: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    color: $success;
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
}

</style>
