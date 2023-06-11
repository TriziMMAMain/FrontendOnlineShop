<script setup="">
// - Import
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import _ from 'lodash'
import {useInstrumentStore} from '../../stores/counter.js'
import {useDisplay} from 'vuetify'
import axios from "axios";

const {name} = useDisplay()
const {postAxiosInstrumentById} = useInstrumentStore()

const router = useRouter()


const heightFunc = () => {
  if (name.value === 'xs') {
    return '500'
  } else if (name.value === 'sm') {
    return '200'
  } else if (name.value === 'md') {
    return '250'
  } else if (name.value === 'lg') {
    return '300'
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

//
const gasolineGeneratorArray = ref([])
const gasolineLocal = ref([])

gasolineLocal.value = JSON.parse(localStorage.getItem("gasoline"))

const gasolineGenerator = async (gasoline) => {
  for (let i = 0; i < gasoline.length; i++) {
    if (gasoline[i].typeThis === 'Бензогенератор') {
      gasolineGeneratorArray.value.push(gasoline[i])
    }
  }
}
gasolineGenerator(gasolineLocal.value)

const viewDetails = async (id, _id) => {
  let dataInstrument = ref([])
  for (let i = 0; i < gasolineGeneratorArray.value.length; i++) {
    dataInstrument.value = _.filter(gasolineGeneratorArray.value, {"_id": _id})
  }
  postAxiosInstrumentById(dataInstrument.value)

  await router.push({name: 'gasolineInstrumentGeneratorId', params: {id: id}}) // /id/:id
  localStorage.setItem("id_gasoline", JSON.stringify(id))

}
// - Logical
let counterClick = ref(0)
const buyInBasket = async (id, _id) => {
  let dataInstrument = ref([])
  for (let i = 0; i < gasolineGeneratorArray.value.length; i++) {
    dataInstrument.value = _.filter(gasolineGeneratorArray.value, {"_id": _id})
  }
  postAxiosInstrumentById(dataInstrument.value)
  counterClick.value = counterClick.value + 1
  if (counterClick.value === 1) {
    localStorage.setItem("basket_id", JSON.stringify(id))
    localStorage.setItem("basket_click", JSON.stringify(true))
    localStorage.setItem("id_gasoline", JSON.stringify(id))
    await router.push({name: 'gasolineInstrumentGeneratorId', params: {id: id}})

  }
}

</script>

<template>
  <!--        CARD -->
  <v-card
      :width="widthFunc()"
      :height="heightFunc()"
      color="background"
      elevation="5"
      class="vCardMain pa-5 mr-10 mb-16"
      v-for="i in gasolineGeneratorArray">
    <v-row class="d-sm-flex">
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
             class="secondCol pa-1">
        <!--        TITLE-->
        <div class="blockTitleCard">
          <button @click="viewDetails(i.id, i._id)" class="cardTextHref mt-1">{{ i.name }}</button>
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
            class="d-flex justify-center flex-wrap flex-column pa-0 pr-1">
          <p class="textCardPrice pt-3 pb-3">
            {{ i.price }} рублей
          </p>
          <v-btn
              @click="buyInBasket(i.id, i._id)"
              elevation="1"
              class="vBtnBuy"
              :width="widthtFuncVBtn()"
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
@import '../../assets/mixins';


// Media

@media screen and (max-width: 376px) {
  /*  стили для xl-устройств */
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
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 120px;
    height: 120px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
    padding-top: 8px;
    font-size: 1rem;
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

@media screen and (min-width: 376px) and (max-width: 600px) {
  /*  стили для xl-устройств */
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
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 120px;
    height: 120px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
    padding-top: 8px;
    font-size: 0.8rem;
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
    bottom: 3px;
    right: 30px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 120px;
    height: 120px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
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
    bottom: 10px;
    right: 30px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
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
    bottom: 10px;
    right: 60px;
  }

  .photoInCardBlock {
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 230px;
    height: 230px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
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
  /*  стили для xxl-устройств */
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
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 300px;
    height: 300px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
    padding-top: 8px;
    font-size: 1.3rem;
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
    width: 100%;
    height: 100%;
  }

  .photoInCard {
    width: 250px;
    height: 250px;
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
    text-align: right;
    font-weight: 600;
    color: $primary;
  }


  .v-card-text {
    color: $text;
  }

  .textCardAvailability {
    text-align: center;
    padding-top: 8px;
    font-size: 1.3rem;
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