<script setup="">
// core
import {ref} from 'vue'

//
import BasketComponentDynamic from "../../Basket/basketComponentDynamic.vue"
import {Promise} from "core-js";
import {ProccesingSuccessfuly} from "../../../notification/toasting";

// local
const gasolineMotoblockId = ref([])
const gasolineLocal = ref([])
const loadingComponent = ref(true)
//

const fetchingInstrumentFilterById = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/instruments/get/instrument-find-by-id');
    if (response.ok) {
      gasolineLocal.value = await response.json()
      gasolineMotoblockId.value = await gasolineLocal.value[0]
    } else {
      throw new Error(`Error fetching instrument: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
let trueOrFalsePhoto = ref(false)
const gasolineLocalCopyFun = async () => {
  try {
    await Promise.all([
      fetchingInstrumentFilterById()
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          })
    ])

    const isImgArrayValid = async () => {
      for (let i = 0; i < gasolineMotoblockId.value.imgArray.length; i++) {
        try {
          new URL(gasolineMotoblockId.value.imgArray[i].src);
        } catch (_) {
          trueOrFalsePhoto.value = false
          return false;
        }
      }
      trueOrFalsePhoto.value = true
      return true;
    }
    await isImgArrayValid()
  } catch (error) {
    console.log(error);
  }
};

gasolineLocalCopyFun();



const items = [
  {
    title: 'Главная',
    disabled: false,
    href: '/home/',
  },
  {
    title: 'Бензиновый инструмент',
    disabled: false,
    href: '/gasoline-instrument/catalog/',
  },
  {
    title: 'Мотоблоки',
    disabled: false,
    href: '/gasoline-instrument/motoblock/',
  },
]


let basketClick = ref(false)
setInterval(() => {
  basketClick.value = JSON.parse(localStorage.getItem("basket_click"))
})


let counterClick = ref(0)
let counterClickBasket = ref(false)

const buyInBasket = (id) => {
  counterClick.value = counterClick.value + 1
  counterClickBasket.value = !counterClickBasket.value
  localStorage.setItem("basket_click", JSON.stringify(counterClickBasket.value))
  basketClick.value = JSON.parse(localStorage.getItem("basket_click"))
  console.log(id)
  localStorage.setItem("basket_id", JSON.stringify(id))
}

</script>

<template>
  <v-container
      fluid
      class="cardMainShopSideContainer w-100"
      v-for="i in [gasolineMotoblockId]"
  >
    <div class="basketComponentDynamicBlockMain"
         v-if="basketClick">
      <BasketComponentDynamic></BasketComponentDynamic>
    </div>
    <div class="linkInPage">
      <v-breadcrumbs class="linkInPageVBreadcrumbs"
                     :items="items"></v-breadcrumbs>
    </div>
    <v-divider
        :thickness="3"
        color="error"
    ></v-divider>
    <br>
    <div class="cardMainShopSideTitle d-flex justify-start flex-wrap w-100">
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
              class="carouselMainComponent"
              hide-delimiters
              color="background"
              show-arrows="hover"
          >
            <v-carousel-item
                class="w-100"
                v-for="(item, i) in gasolineMotoblockId.imgArray"
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
      <div class="cardMainShopSideFeatureMain d-flex justify-start flex-nowrap align-start">
        <div class="cardMainShopSideFeature pa-4">
          <v-card-text class="textCardFeatureMain pa-0">
            Основные характеристики
          </v-card-text>
          <!--          -->
          <v-card-text v-for="item in gasolineMotoblockId.featureTopTitle"
                       key="item"
                       class="textCardFeature pa-0">{{ item.featureTopTitleInfoTitle }}
            <span class="spanTextCard">{{ item.featureTopTitleInfoText }}</span></v-card-text>
        </div>
        <div class="cardMainShopSidePrice pa-1">
          <v-card variant="tonal" height="320px">
            <v-card-item>
              <v-card-title class="vCardTitleShopPriceComponent">
                {{ i.price }} р.
                <v-icon icon="fa-solid fa-tag" size="ml" end></v-icon>
              </v-card-title>
            </v-card-item>
            <v-card-text class="vCardTextShopPriceComponent">
              Есть на складе в количестве {{ i.availability }} шт <br>
              <span class="vCardTextSpanShop">Можно забрать самоовывозом или вызвать курьера на дом бесплатно</span>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn class="vCardBtnShopPriceComponent"
                     @click="buyInBasket(i.id)">
                <v-icon icon="fa-solid fa-cart-shopping" start></v-icon>
                Купить
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>

    <div class="cardMainContainerShopSideFeature d-flex flex-wrap">
      <div class="cardMainContainerShopSideFeatureTop">
        <p class="cardMainContainerShopSideFeatureTopText">
          {{ i.featureTop }}
        </p>
      </div>

      <div class="cardMainContainerShopSideFeatureMiddle d-flex justify-start flex-wrap align-start">
        <div class="cardMainContainerShopSideFeatureMiddleTop d-flex justify-start flex-column align-start">
          <h1 class="titleContainerShopSideFeatureMiddle">Технические характеристики {{ i.name }}</h1>
          <v-table class="cardMainContainerShopSideFeatureMiddleTopVTable" density="compact">
            <tbody>
            <tr
                v-for="item in gasolineMotoblockId.featureMiddle"
                :key="item.feature"
            >
              <td class="cardMainContainerShopSideFeatureMiddleTopVTableText">{{ item.feature }}</td>
              <td class="cardMainContainerShopSideFeatureMiddleTopVTableText">{{ item.featureValue }}</td>
            </tr>
            </tbody>
          </v-table>
        </div>
      </div>

      <div class="cardMainContainerShopSideFeatureDown d-flex justify-start flex-column align-start">
        <div class="cardMainContainerShopSideFeatureDownTop d-flex justify-start flex-column">
          <h1 class="textCardFeatureDown">Преимущества {{ i.name }}</h1>
          <ul class="cardMainContainerShopSideFeatureDownTopUl">
            <li class="cardMainContainerShopSideFeatureDownTopLi"
                v-for="i in gasolineMotoblockId.featureDownArray"
                :key="i.featureDown">{{ i.featureDown }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <v-divider
        :thickness="3"
        color="error"
    ></v-divider>
    <div class="linkInPage">
      <v-breadcrumbs
          class="linkInPageVBreadcrumbs"
          :items="items"></v-breadcrumbs>
    </div>
  </v-container>


  <!--  <v-btn @click="back">Вернуться назад</v-btn>-->
</template>

<style lang="scss" scoped>
@import '../../../assets/mixins';

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

//

.linkInPageVBreadcrumbs {
  color: $textSpan;

}

//

// Container


.cardMainShopSideContainer {
  min-height: 1200px;
  position: relative;
  //background-color: rgba(0, 128, 0, 0.65);
}

// Card Side Photo Feature Price

.cardMainShopSidePhotoFeaturePrice {
  width: 100%;
  //border: 1px solid red;
  background-color: white;
}

// Card Side Photo

.cardMainShopSidePhoto {
  width: 100%;
  height: 450px;
  //background-color: red;
}

.carouselMainComponent {
  width: 100%;
  height: 400px;
  background-color: white;
}

// Card Side Feature

.cardMainContainerShopSideFeature {
  width: 100%;
  margin-top: 10px;
  min-height: 300px;
  //background-color: red;
}

// Card Side Feature Title

.cardMainShopSideFeatureMain {
  width: 100%;
}

.cardMainShopSideFeature {
  min-width: 60%;
  height: 350px;
  background-color: white;
}

// Card Side Feature Top

.cardMainContainerShopSideFeatureTop {
  width: 100%;
  min-height: 100px;
  //background-color: yellow;
}

.cardMainContainerShopSideFeatureTopText {
  font-size: 0.8rem;
  padding: 4px;
  color: $text;

}

// Card Side Feature Middle

.textCardFeatureMain {
  font-size: 1.5rem;
  text-align: center;
}

.textCardFeature {
  font-size: 0.9rem;
  font-weight: 500;
  color: $text;
}

.spanTextCard {
  font-weight: 600;
  color: $textSpan;
}

.cardMainContainerShopSideFeatureMiddle {
  width: 100%;
  min-height: 100px;
  //background-color: grey;
}

.cardMainContainerShopSideFeatureMiddleTop {
  width: 100%;
  min-height: 100px;
  //background-color: green;
}

.titleContainerShopSideFeatureMiddle, .textCardFeatureDown {
  font-size: 1.3rem;
  margin: 10px;
  color: $textSpan;
}

.cardMainContainerShopSideFeatureMiddleTopVTable {
  min-width: 40%;
}

.cardMainContainerShopSideFeatureMiddleTopVTableText {

  color: $text;
  background-color: white;
}

.textContainerShopSideFeatureMiddle {

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
}

.cardMainContainerShopSideFeatureDownTopUl {
  width: 100%;
  padding-left: 20px;
  min-height: 100px;
}

.cardMainContainerShopSideFeatureDownTopLi {
  font-size: 0.9rem;
  color: $text;
}

// Card Side Price

.cardMainShopSideTitle {
}

.cardMainShopSidePrice {
  width: 40%;
  height: 350px;
  //background-color: red;
}

// Card Main Shop

.cardTextTitleInMainShop {
  font-size: 1.4rem;
  font-weight: 600;
  padding: 4px;
  margin: 4px;
  color: $textSpan;
}

//

.cardMainShopSide {
  height: 1200px;
  background-color: white;
}

.vCardTitleShopPriceComponent {
  text-align: center;
  font-size: 1.5rem;
  color: $textSpan;
}

.vCardTextShopPriceComponent {
  color: $success;
  font-size: 0.7rem;
}

.vCardTextSpanShop {
  color: $info;
}

.vCardBtnShopPriceComponent {
  width: 70%;
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


// Media

@media screen and (max-width: 600px) {
  /* стили для xs-устройств */
  .cardMainShopSidePhoto {
    height: 500px;
  }
  .cardMainShopSidePhotoMain {
    height: 500px;
  }
  .cardMainShopSidePhotoFeaturePrice {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .cardMainShopSideFeatureMain {
    width: 100%;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  /* стили для sm-устройств */
  .cardMainShopSidePhoto {
    height: 500px;
  }
  .cardMainShopSidePhotoMain {
    height: 500px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  /* стили для md-устройств */
  .cardMainShopSidePhoto {
    height: 500px;
  }
  .cardMainShopSidePhotoMain {
    height: 500px;
  }
}

@media screen and (min-width: 1264px) and (max-width: 1904px) {
  /*  стили для lg-устройств */
  .cardMainShopSidePhotoMain {
    width: 100%;
  }
  .cardMainShopSidePhoto {
    height: 500px;
  }
  .cardMainShopSidePhotoMain {
    height: 500px;
  }
  /* done! */
}

@media screen and (min-width: 1904px) {
  /*  стили для xl-устройств */
  .cardMainShopSidePhoto {
    width: 100%;
    height: 500px;
  }
  .cardMainShopSidePhotoMain {
    width: 100%;
    height: 500px;
  }
  /* done! */
}
</style>
