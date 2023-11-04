<script setup="">
// core
import {onMounted, ref} from 'vue'
import {useInstrumentStore} from '../../../stores/counter'
import BasketComponentDynamic from "../../Basket/basketComponentDynamic.vue"
import {Promise} from "core-js";
import {ProccesingSuccessfuly, ProcessingError} from "../../../notification/toasting";
import {useDisplay} from 'vuetify'
import router from "../../../router/index.js";

const {name} = useDisplay()
const {fetchingInstrumentById, filterByIdInstrument} = useInstrumentStore()

const widthFuncInBtn = () => {
  if (name.value === 'xs') {
    return '220'
  } else if (name.value === 'sm') {
    return '150'
  } else if (name.value === 'md') {
    return '200'
  } else if (name.value === 'lg') {
    return '250'
  } else if (name.value === 'xl') {
    return '375'
  } else if (name.value === 'xxl') {
    return '375'
  }
}
const heightFuncInBtn = () => {
  if (name.value === 'xs') {
    return '50'
  } else if (name.value === 'sm') {
    return '50'
  } else if (name.value === 'md') {
    return '50'
  } else if (name.value === 'lg') {
    return '70'
  } else if (name.value === 'xl') {
    return '70'
  } else if (name.value === 'xxl') {
    return '70'
  }
}
const heightFuncInCarousel = () => {
  if (name.value === 'xs') {
    return '300'
  } else if (name.value === 'sm') {
    return '300'
  } else if (name.value === 'md') {
    return '500'
  } else if (name.value === 'lg') {
    return '500'
  } else if (name.value === 'xl') {
    return '500'
  } else if (name.value === 'xxl') {
    return '500'
  }
}
const navigationDrawerMenuBasket = () => {
  if (name.value === 'xxl') {
    return false
  } else if (name.value === 'xl') {
    return false
  } else if (name.value === 'lg') {
    return false
  } else if (name.value === 'md') {
    return false
  } else if (name.value === 'sm') {
    return false
  } else if (name.value === 'xs') {
    return true
  }
}
const navigationDrawerMenuBasketSecond = () => {
  if (name.value === 'xxl') {
    return true
  } else if (name.value === 'xl') {
    return true
  } else if (name.value === 'lg') {
    return true
  } else if (name.value === 'md') {
    return true
  } else if (name.value === 'sm') {
    return true
  } else if (name.value === 'xs') {
    return false
  }
}
// local
const networkInstruments = ref([])
const networkLocal = ref([])
const loadingComponent = ref(true)
const avalibilityTrue = ref(null)
let trueOrFalsePhoto = ref(false)
const items = ref( [
  {
    title: 'Главная',
  },
  {
    title: 'Сетевой инструмент',
    clickToBreadcrumbs: 'networkInstrumentAll'
  },
  {
    title: '',
    clickToBreadcrumbs: ''
  },
])

const updateLocalData = async () => {
  const currentUrl = ref(router.currentRoute.value.params);
  const currentUrlId = ref(currentUrl.value.id)

  networkLocal.value = await filterByIdInstrument(currentUrlId.value)
  networkInstruments.value = networkLocal.value[0]


  for (let i = 0; i < networkInstruments.value.imgArray.length; i++) {
    try {
      networkInstruments.value.imgArray[i].src
    } catch {
      trueOrFalsePhoto.value = false
      return
    }
  }

  trueOrFalsePhoto.value = true
}
onMounted(async () => {
  localStorage.setItem('fetching_instrument_by_id', JSON.stringify(false))

  try {
    await fetchingInstrumentById()
    loadingComponent.value = JSON.parse(localStorage.getItem('fetching_instrument_by_id'))

    if (loadingComponent.value) {
      await updateLocalData()
      if (networkInstruments.value.availability === 0) {
        avalibilityTrue.value = false
      } else {
        avalibilityTrue.value = true
      }
      if (networkInstruments.value.typeThis === 'Дрель') {
        items.value[2] = {
            title: 'Сетевые дрели',
            clickToBreadcrumbs: 'Дрель'
          }
      } else if (networkInstruments.value.typeThis === 'Лобзик электрический') {
        items.value[2] = {
          title: 'Сетевые лобзики',
          clickToBreadcrumbs: 'Лобзик электрический'
        }
      } else if (networkInstruments.value.typeThis === 'Перфоратор') {
        items.value[2] = {
          title: 'Сетевые перфораторы',
          clickToBreadcrumbs: 'Перфоратор'
        }
      } else if (networkInstruments.value.typeThis === 'Электрическая болгарка') {
        items.value[2] = {
          title: 'Сетевые болгарки',
          clickToBreadcrumbs: 'Электрическая болгарка'
        }
      } else if (networkInstruments.value.typeThis === 'Садовый пылесос') {
        items.value[2] = {
            title: 'Садовые пылесосы',
            clickToBreadcrumbs: 'Садовый пылесос'
          }
      } else if (networkInstruments.value.typeThis === 'Дрель-шуруповерт') {
        items.value[2] = {
          title: 'Дрели-шуруповерты',
          clickToBreadcrumbs: 'Дрель-шуруповерт'
        }
      }
      else if (networkInstruments.value.typeThis === 'Измельчитель') {
        items.value[2] = {
          title: 'Измельчители',
          clickToBreadcrumbs: 'Измельчитель'
        }
      }
      else if (networkInstruments.value.typeThis === 'Шлифмашина электрическая') {
        items.value[2] = {
          title: 'Электрические шлифмашины',
          clickToBreadcrumbs: 'Шлифмашина электрическая'
        }
      }
    } else {
      console.log('error 500')
      ProcessingError("Ошибка на сервере! Перезагрузите страницу!")
    }
    localStorage.setItem('fetching_instrument_by_id', JSON.stringify(false))
  } catch (err) {
    console.log(err);
  }
})

let basketClick = ref(false)
setInterval(() => {
  basketClick.value = JSON.parse(localStorage.getItem("basket_click"))
})


let counterClick = ref(0)
let counterClickBasket = ref(false)

const buyInBasket = (_id) => {
  counterClick.value = counterClick.value + 1
  counterClickBasket.value = true
  localStorage.setItem("basket_click", JSON.stringify(counterClickBasket.value))
  basketClick.value = JSON.parse(localStorage.getItem("basket_click"))
  localStorage.setItem("basket_id", JSON.stringify(_id))
}

const linkInPageByItems = (item) => {
  if (item.clickToBreadcrumbs === undefined) {
    router.push({name: 'homeComponent'})
  } else if (item.clickToBreadcrumbs === 'networkInstrumentAll') {
    localStorage.setItem("name_type_this", JSON.stringify(item.clickToBreadcrumbs))
    localStorage.setItem("name_type_this_true_or_false", JSON.stringify(false))
    router.push({name: 'networkInstrumentAll'})
  } else {
    localStorage.setItem("name_type_this", JSON.stringify(item.clickToBreadcrumbs))
    localStorage.setItem("name_type_this_true_or_false", JSON.stringify(true))
    router.push({name: `${item.clickToBreadcrumbs}`})
  }

}
</script>

<template>
  <div class="cardMainShopSideContainer w-100"
       v-for="i in [networkInstruments]"
  >
    <div class="basketComponentDynamicBlockMain"
         v-if="basketClick">
      <BasketComponentDynamic></BasketComponentDynamic>
    </div>
    <div class="linkInPage d-flex mt-4">
      <p class="linkInPageVBreadcrumbs pl-6"
         v-for="item in items"
         @click="linkInPageByItems(item)">{{ item.title }} <span class="pa-4">/</span></p>
    </div>
    <v-divider
        :thickness="3"
        color="error"
    ></v-divider>
    <br>
    <div class="cardMainShopSideTitle">
      <h1 class="cardTextTitleInMainShop">{{ i.name }}</h1>
    </div>
    <div class="cardMainShopSidePhotoFeaturePrice
    d-flex flex-wrap
    d-xl-flex flex-xl-row
    d-lg-flex flex-lg-row flex-lg-wrap
    d-md-flex flex-md-column flex-md-wrap
    d-sm-flex flex-sm-column
    ">
      <div class="cardMainShopSidePhotoMain">
        <div class="cardMainShopSidePhoto "
             v-if="trueOrFalsePhoto">
          <v-carousel
              cycle
              :height="heightFuncInCarousel()"
              class="carouselMainComponent"
              hide-delimiters
              color="background"
              show-arrows="hover"
          >
            <v-carousel-item
                class="w-100"
                v-for="(item, i) in networkInstruments.imgArray"
                :key="i"
                :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="d-flex justify-center align-center"
             v-else><v-progress-circular
            color="primary"
            indeterminate
            :size="128"
            :width="12"
        ></v-progress-circular></div>
      </div>
      <div class="cardMainShopSideFeatureMain mt-10">
        <div class="cardMainShopSideFeature">
          <h1 class="textCardFeatureMain">
            Основные характеристики
          </h1>
          <!--          -->
          <v-card-text v-for="item in networkInstruments.featureTopTitle"
                       key="item"
                       class="textCardFeature pa-0">{{ item.featureTopTitleInfoTitle }}
            <span class="spanTextCard">{{ item.featureTopTitleInfoText }}</span></v-card-text>
        </div>
        <div class="cardMainShopSidePrice">
          <div class="vCardFeature" v-if="avalibilityTrue">
            <div class="vCardFeatureTitle">
              <h1 class="vCardTitleShopPriceComponent">
                {{ i.price }} р.
                <v-icon icon="fa-solid fa-tag" size="ml" end></v-icon>
              </h1>
            </div>
            <p class="vCardTextShopPriceComponent">
              Есть на складе в количестве {{ i.availability }} шт
            </p>
            <p class="vCardTextShopPriceComponentDelivery">Можно забрать самоовывозом или вызвать курьера на дом
              бесплатно</p>
            <div class="vCardBtnShopPriceComponentMain d-flex justify-center">
              <v-btn class="vCardBtnShopPriceComponent"
                     :width="widthFuncInBtn()"
                     :height="heightFuncInBtn()"
                     @click="buyInBasket(i._id)">
                <v-icon icon="fa-solid fa-cart-shopping" start></v-icon>
                Купить
              </v-btn>
            </div>
          </div>
          <div class="vCardFeature" v-else>
            <div class="vCardFeatureTitle">
              <h1 class="vCardTitleShopPriceComponentFalse">
                Нет в наличии
              </h1>
            </div>
            <p class="vCardTextShopPriceComponentFalse">
              Последняя цена
              <br>
              <span class="vCardTextShopPriceComponentFalseSpan"> {{ i.price }} р.
                <v-icon icon="fa-solid fa-tag"
                        size="ml"
                        end></v-icon></span></p>
            <p class="vCardTextShopPriceComponentFalseOrder">
              Узнать о поступлении данного товара можно по телефону: <br> +7 (949) 412 91 53
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="cardMainContainerShopSideFeatureMain">
      <div class="cardMainContainerShopSideFeature d-flex flex-wrap">
        <div class="cardMainContainerShopSideFeatureTop">
          <p class="cardMainContainerShopSideFeatureTopText">
            {{ i.featureTop }}
          </p>
        </div>
        <div class="cardMainContainerShopSideFeatureMiddle">
          <div class="cardMainContainerShopSideFeatureMiddleTop d-flex justify-start flex-column align-start">
            <h1 class="titleContainerShopSideFeatureMiddle">Технические характеристики {{ i.name }}</h1>
            <v-table class="cardMainContainerShopSideFeatureMiddleTopVTable" density="compact">
              <tbody>
              <tr
                  v-for="item in networkInstruments.featureMiddle"
                  :key="item.feature"
              >
                <td class="cardMainContainerShopSideFeatureMiddleTopVTableText">{{ item.feature }}</td>
                <td class="cardMainContainerShopSideFeatureMiddleTopVTableText">{{ item.featureValue }}</td>
              </tr>
              </tbody>
            </v-table>
          </div>
        </div>
        <div class="blockHomeOfTheBrandEquipmentDown" v-if="navigationDrawerMenuBasket()">
          <div class="blockHomeOfTheBrandSecond">
            <h1 class="titleHomeOfTheBrandSecond">Инструмент бренда <span
                class="titleHomeOfTheBrandSpanSecond">{{ i.brand }}</span></h1>
            <p class="textHomeOfTheBrandSecond"><span class="titleHomeOfTheBrandSpanSecond">{{
                i.homeOfTheBrand
              }}</span> - родина бренда</p>
            <p class="textHomeOfTheBrandSecond"><span class="titleHomeOfTheBrandSpanSecond">{{
                i.countryOfOrigin
              }}</span> - страна производитель</p>
          </div>
          <div class="blockEquipmentSecond">
            <h1 class="titleEquipmentSecond">Комплектация</h1>
            <ul class="textEquipmentUlSecond">
              <li class="textEquipmentSecond" v-for="equipment in i.equipmentArray">{{ equipment }}</li>
            </ul>
          </div>
        </div>
        <div class="cardMainContainerShopSideFeatureDown mt-4">
          <div class="cardMainContainerShopSideFeatureDownTop d-flex justify-start flex-column">
            <h1 class="textCardFeatureDown">Преимущества {{ i.name }}</h1>
            <ul class="cardMainContainerShopSideFeatureDownTopUl">
              <li class="cardMainContainerShopSideFeatureDownTopLi"
                  v-for="i in networkInstruments.featureDownArray"
                  :key="i.featureDown">{{ i.featureDown }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blockHomeOfTheBrandEquipment" v-if="navigationDrawerMenuBasketSecond()">
        <div class="blockHomeOfTheBrand">
          <h1 class="titleHomeOfTheBrand">Инструмент бренда <span class="titleHomeOfTheBrandSpan">{{ i.brand }}</span>
          </h1>
          <p class="textHomeOfTheBrand"><span class="titleHomeOfTheBrandSpan">{{ i.homeOfTheBrand }}</span> - родина
            бренда</p>
          <p class="textHomeOfTheBrand"><span class="titleHomeOfTheBrandSpan">{{ i.countryOfOrigin }}</span> - страна
            производитель</p>
        </div>
        <div class="blockEquipment">
          <h1 class="titleEquipment">Комплектация</h1>
          <ul class="textEquipmentUl">
            <li class="textEquipment" v-for="equipment in i.equipmentArray">{{ equipment }}</li>
          </ul>
        </div>
      </div>
    </div>

    <br>
    <v-divider
        :thickness="3"
        color="error"
    ></v-divider>
    <div class="linkInPage d-flex mt-4">
      <p class="linkInPageVBreadcrumbs pl-6"
         v-for="item in items"
         @click="linkInPageByItems(item)">{{ item.title }} <span class="pa-4">/</span></p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import '../../../assets/mixins';

// Media

@media screen and (max-width: 376px) {
  /*  стили для xs-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $background;
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 0.8rem;
    font-weight: 450;
    color: $text;

  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 300px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 300px;
  }

  .carouselMainComponent {
    width: 100%;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-wrap: wrap;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 100%;
    min-height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 30px;
  }

  .textCardFeature {
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 100%;
    min-height: 350px;
    display: flex;
    justify-content: center;
    //background-color: red;
  }

  .vCardFeature {
    width: 300px;
    height: 350px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 1rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 1.4rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 0.9rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeature {
    width: 100%;
    padding: 0 12px 0 12px;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.3rem;
    margin-bottom: 30px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    width: 100%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 0.9rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 0.9rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 4px;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment


  .blockHomeOfTheBrandEquipmentDown {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .blockHomeOfTheBrandSecond {
    width: 45%;
    padding: 15px;
    border-radius: 10px;
    max-height: 180px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrandSecond {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color: $textSpan;
    margin-bottom: 10px;
  }

  .titleHomeOfTheBrandSpanSecond {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrandSecond {
    font-size: 0.8rem;
    color: $text;
  }

  .textHomeOfTheBrandSecond {

  }

  // Block Equipment

  .blockEquipmentSecond {
    width: 40%;
  }

  .titleEquipmentSecond {
    padding-top: 15px;
    font-size: 1rem;
    text-align: center;
  }

  .textEquipmentUlSecond {
    margin-top: 15px;
    line-height: 1.5;
  }

  .textEquipmentSecond {
    color: $text;
    font-size: 0.8rem;
  }

  .textEquipmentSecond::marker {
    color: $primary
  }

  //
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  /*  стили для xs-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $background;
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 0.8rem;
    font-weight: 450;
    color: $text;

  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 300px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 300px;
  }

  .carouselMainComponent {
    width: 100%;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-wrap: wrap;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 100%;
    min-height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 30px;
  }

  .textCardFeature {
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 100%;
    min-height: 350px;
    display: flex;
    justify-content: center;
    //background-color: red;
  }

  .vCardFeature {
    width: 300px;
    height: 350px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 1rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 1.4rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 0.9rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeatureMain {
    margin-top: 120px;
    width: 100%;
  }

  .cardMainContainerShopSideFeature {
    width: 100%;
    padding: 0 12px 0 12px;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.3rem;
    margin-bottom: 30px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    width: 100%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 0.9rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 0.9rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 4px;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment


  .blockHomeOfTheBrandEquipmentDown {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .blockHomeOfTheBrandSecond {
    width: 45%;
    padding: 15px;
    border-radius: 10px;
    max-height: 180px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrandSecond {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color: $textSpan;
    margin-bottom: 10px;
  }

  .titleHomeOfTheBrandSpanSecond {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrandSecond {
    font-size: 0.8rem;
    color: $text;
  }

  .textHomeOfTheBrandSecond {

  }

  // Block Equipment

  .blockEquipmentSecond {
    width: 40%;
  }

  .titleEquipmentSecond {
    padding-top: 15px;
    font-size: 1rem;
    text-align: center;
  }

  .textEquipmentUlSecond {
    margin-top: 15px;
    line-height: 1.5;
  }

  .textEquipmentSecond {
    color: $text;
    font-size: 0.8rem;
  }

  .textEquipmentSecond::marker {
    color: $primary
  }

  //

}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /*  стили для sm-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.09);
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 0.8rem;
    font-weight: 450;
    color: $text;

  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 300px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 300px;
  }

  .carouselMainComponent {
    width: 100%;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 60%;
    min-height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 30px;
  }

  .textCardFeature {
    font-size: 0.8rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 40%;
    min-height: 350px;
    display: flex;
    justify-content: end;
    //background-color: red;
  }

  .vCardFeature {
    width: 200px;
    height: 350px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 0.7rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 1.3rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 0.8rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 0.9rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeatureMain {
    margin-top: 120px;
    width: 100%;
    display: flex;
  }

  .cardMainContainerShopSideFeature {
    width: 100%;
    padding: 0 12px 0 12px;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.8;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.3rem;
    margin-bottom: 30px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    width: 100%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 0.8rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 0.8rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 4px;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment

  .blockHomeOfTheBrandEquipment {
    width: 30%;
    margin-top: 50px;
    margin-left: 30px;
  }

  .blockHomeOfTheBrand {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    min-height: 160px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrand {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color: $textSpan;
    margin-bottom: 10px;
  }

  .titleHomeOfTheBrandSpan {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrand {
    font-size: 0.7rem;
    color: $text;
  }

  // Block Equipment

  .blockEquipment {
    width: 100%;
  }

  .titleEquipment {
    margin-top: 30px;
    font-size: 1rem;
    text-align: center;
  }

  .textEquipmentUl {
    margin-top: 15px;
  }

  .textEquipment {
    color: $text;
    font-size: 0.7rem;
  }

  .textEquipment::marker {
    color: $primary
  }

  //
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  /*  стили для md-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.09);
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 1rem;
    font-weight: 500;
    color: $text;

  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 500px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 500px;
  }

  .carouselMainComponent {
    width: 100%;
    height: 400px;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 60%;
    min-height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.5rem;
    text-align: center;
  }

  .textCardFeature {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 40%;
    min-height: 350px;
    display: flex;
    justify-content: end;
    //background-color: red;
  }

  .vCardFeature {
    width: 300px;
    height: 350px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 0.8rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 1.5rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 1.1rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeatureMain {
    margin-top: 120px;
    width: 100%;
    display: flex;
  }

  .cardMainContainerShopSideFeature {
    width: 100%;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 1rem;
    font-weight: 400;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    width: 80%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 1rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 1rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment

  .blockHomeOfTheBrandEquipment {
    width: 30%;
    margin-left: 30px;
  }

  .blockHomeOfTheBrand {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    min-height: 160px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrand {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    color: $textSpan;
    margin-bottom: 10px;
  }

  .titleHomeOfTheBrandSpan {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrand {
    font-size: 0.8rem;
    color: $text;
  }

  // Block Equipment

  .blockEquipment {
    width: 100%;
    padding: 10px;
  }

  .titleEquipment {
    margin-top: 30px;
    font-size: 1.2rem;
    text-align: center;
  }

  .textEquipmentUl {
    margin-top: 15px;
  }

  .textEquipment {
    color: $text;
    font-size: 0.8rem;
  }

  .textEquipment::marker {
    color: $primary
  }

  //

}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  /*  стили для lg-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.09);
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 1rem;
    font-weight: 500;
    color: $text;

  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  //

  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 1.7rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 500px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 500px;
  }

  .carouselMainComponent {
    width: 100%;
    height: 400px;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 60%;
    min-height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.7rem;
    text-align: center;
  }

  .textCardFeature {
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 40%;
    min-height: 350px;
    display: flex;
    justify-content: end;
    //background-color: red;
  }

  .vCardFeature {
    width: 350px;
    height: 450px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 1.1rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1.3rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 1.7rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 1.3rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeatureMain {
    margin-top: 120px;
    width: 100%;
    display: flex;
  }

  .cardMainContainerShopSideFeature {
    width: 100%;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 0.9rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.7rem;
    margin-bottom: 30px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    margin-top: 20px;
    min-width: 80%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 1.1rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.1rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 1.1rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment

  .blockHomeOfTheBrandEquipment {
    width: 30%;
  }

  .blockHomeOfTheBrand {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    min-height: 160px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrand {
    width: 100%;
    font-size: 1.3rem;
    text-align: center;
    color: $textSpan;
    margin-bottom: 10px;
  }

  .titleHomeOfTheBrandSpan {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrand {
    font-size: 1rem;
    color: $text;
  }

  // Block Equipment

  .blockEquipment {
    width: 100%;
    padding: 25px;
  }

  .titleEquipment {
    margin-top: 30px;
    font-size: 1.3rem;
    text-align: center;
  }

  .textEquipmentUl {
    margin-top: 30px;
  }

  .textEquipment {
    color: $text;
    font-size: 1rem;
  }

  .textEquipment::marker {
    color: $primary
  }

  //


}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  /*  стили для xl-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.09);
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;

  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  //

  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 2rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 500px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 500px;
  }

  .carouselMainComponent {
    width: 100%;
    height: 400px;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: space-around;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 30%;
    height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.5rem;
    text-align: center;
  }

  .textCardFeature {
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 40%;
    min-height: 350px;
    display: flex;
    justify-content: end;
    //background-color: red;
  }

  .vCardFeature {
    width: 550px;
    height: 450px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 1.3rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1.6rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 2rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 1.6rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 1.5rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeatureMain {
    margin-top: 120px;
    width: 100%;
    display: flex;
  }

  .cardMainContainerShopSideFeature {
    width: 100%;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    display: flex;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.6rem;
    margin-bottom: 20px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    min-width: 80%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 1.5rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.5rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 1.4rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment

  .blockHomeOfTheBrandEquipment {
    width: 30%;
  }

  .blockHomeOfTheBrand {
    width: 100%;
    padding: 25px;
    border-radius: 10px;
    min-height: 180px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrand {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    color: $textSpan;
  }

  .titleHomeOfTheBrandSpan {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrand {
    font-size: 1.5rem;
    color: $text;
  }

  // Block Equipment

  .blockEquipment {
    width: 100%;
    padding: 25px;
  }

  .titleEquipment {
    margin-top: 30px;
    font-size: 2rem;
    text-align: center;
  }

  .textEquipmentUl {
    margin-top: 30px;
  }

  .textEquipment {
    color: $text;
    font-size: 1.5rem;
  }

  .textEquipment::marker {
    color: $primary
  }

  //


}

@media screen and (min-width: 2560px) {
  /*  стили для xxl-устройств */
  // Container
  .cardMainShopSideContainer {
    min-height: 100vh;
    position: relative;
  }
  // Basket Dynamic
  .basketComponentDynamicBlockMain {
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.09);
    position: fixed;
  }
  // Link
  .linkInPageVBreadcrumbs {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;
    transition: all 0.3s ease-in-out;
  }

  .linkInPageVBreadcrumbs:hover {
    color: $primary;
    transition: all 0.3s ease-in-out;
  }
  //

  // Card Side Title

  .cardMainShopSideTitle {
    width: 100%;
  }

  .cardTextTitleInMainShop {
    font-size: 2rem;
    font-weight: 500;
    padding: 4px;
    margin: 4px;
    color: $textSpan;
  }

  // Card Side Photo Feature Price
  .cardMainShopSidePhotoFeaturePrice {
    width: 100%;
    background-color: white;
  }

  // Card Side Photo

  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 500px;
  }

  .cardMainShopSidePhoto {
    width: 100%;
    height: 500px;
  }

  .carouselMainComponent {
    width: 100%;
    height: 400px;
    background-color: white;
  }

  // Feature top

  .cardMainShopSideFeatureMain {
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: space-around;
  }

  // Card Side Feature Middle Left

  .cardMainShopSideFeature {
    width: 20%;
    height: 350px;
    background-color: white;
  }

  .textCardFeatureMain {
    font-size: 1.5rem;
    text-align: center;
  }

  .textCardFeature {
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 500;
    color: $text;
  }

  .spanTextCard {
    font-weight: 600;
    color: $textSpan;
  }

  // Card Side Middle Price Right

  .cardMainShopSidePrice {
    width: 40%;
    min-height: 350px;
    display: flex;
    justify-content: end;
    //background-color: red;
  }

  .vCardFeature {
    width: 550px;
    height: 450px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .vCardFeatureTitle {
    width: 100%;
    height: auto;
  }

  .vCardTitleShopPriceComponent, .vCardTitleShopPriceComponentFalse {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: $primary;
  }

  .vCardTextShopPriceComponent, .vCardTextShopPriceComponentDelivery {
    padding-top: 10px;
    font-size: 1.3rem;
    color: $success;
  }

  .vCardTextShopPriceComponentDelivery {
    color: $info;
  }

  .vCardTitleShopPriceComponentFalse {

  }

  .vCardTextShopPriceComponentFalse {
    margin-top: 20px;
    font-size: 1.6rem;
    font-weight: 600;
    color: $textSpan;
  }

  .vCardTextShopPriceComponentFalseSpan {
    font-size: 2rem;
    color: $text;
  }

  .vCardTextShopPriceComponentFalseOrder {
    margin-top: 20px;
    font-size: 1.7rem;
    font-weight: 550;
    color: $info;
  }

  .vCardBtnShopPriceComponentMain {
    width: 100%;
    margin-top: 60px;
  }

  .vCardBtnShopPriceComponent {
    font-size: 1.5rem;
    border-radius: 10px;
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }

  .vCardBtnShopPriceComponent:hover {
    border: 1px solid $primary;
    color: $primary;
    background-color: $background;
    transition: all 0.3s ease-in-out;
  }

  // Card Side Feature

  .cardMainContainerShopSideFeatureMain {
    margin-top: 120px;
    width: 100%;
    display: flex;
  }

  .cardMainContainerShopSideFeature {
    width: 100%;
    min-height: 300px;
    margin-top: 60px;
    //background-color: red;
  }

  .cardMainContainerShopSideFeatureTop {
    width: 100%;
    min-height: 100px;
    //background-color: yellow;
  }

  .cardMainContainerShopSideFeatureTopText {
    font-size: 1.5rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureMiddle {
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    //background-color: grey;
  }

  .cardMainContainerShopSideFeatureMiddleTop {
    width: 100%;
    min-height: 100px;
    //background-color: green;
  }

  .titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
    font-size: 1.6rem;
    margin-bottom: 20px;
    color: $textSpan;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTable {
    min-width: 70%;
  }

  .cardMainContainerShopSideFeatureMiddleTopVTableText {
    color: $text;
    background-color: white;
  }

  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    font-size: 1.5rem;
    padding: 10px;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.5rem;
    padding: 10px;
  }

  // Card Side Feature Down

  .cardMainContainerShopSideFeatureDown {
    width: 100%;
    min-height: 100px;
    //background-color: blue;
  }

  .cardMainContainerShopSideFeatureDownTop {
    width: 100%;
    min-height: 100px;
    //background-color: red;
  }

  .textCardFeatureDown {
    margin-top: 20px;
  }

  .cardMainContainerShopSideFeatureDownTopUl {
    width: 100%;
    padding-left: 20px;
    min-height: 100px;
  }

  .cardMainContainerShopSideFeatureDownTopLi {
    font-size: 1.4rem;
    font-weight: 500;
    color: $text;
  }

  .cardMainContainerShopSideFeatureDownTopLi::marker {
    color: $primary;
  }

  // blockHomeOfTheBrandEquipment

  .blockHomeOfTheBrandEquipment {
    width: 20%;
  }

  .blockHomeOfTheBrand {
    width: 100%;
    padding: 25px;
    border-radius: 10px;
    min-height: 180px;
    box-shadow: 0 1.5px 5.7px rgba(0, 0, 0, 0.24),
    0 4.9px 19.2px rgba(0, 0, 0, 0.143),
    0 22px 86px rgba(0, 0, 0, 0.097);
  }

  .titleHomeOfTheBrand {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    color: $textSpan;
  }

  .titleHomeOfTheBrandSpan {
    color: $primary;
    font-weight: 600;
  }

  .textHomeOfTheBrand {
    font-size: 1.5rem;
    color: $text;
  }

  // Block Equipment

  .blockEquipment {
    width: 100%;
    padding: 25px;
  }

  .titleEquipment {
    margin-top: 30px;
    font-size: 2rem;
    text-align: center;
  }

  .textEquipmentUl {
    margin-top: 30px;
  }

  .textEquipment {
    color: $text;
    font-size: 1.5rem;
  }

  .textEquipment::marker {
    color: $primary
  }

  //

}
</style>