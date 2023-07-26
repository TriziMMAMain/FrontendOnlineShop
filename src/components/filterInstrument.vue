<script setup="">
// - import
import {onMounted, ref, computed, watch} from 'vue'
import {useInstrumentStore} from '../stores/counter.js'
import _ from 'lodash'
import {ProcessingError} from '../notification/toasting.js'
import {useDisplay} from "vuetify";
// router
import {useRouter} from 'vue-router'


const {name} = useDisplay()
const router = useRouter()
const {fetchingInstrumentAll, filterByParams} = useInstrumentStore()

const heightVBtnMain = () => {
  if (name.value === 'xs') {
    return '36'
  } else if (name.value === 'sm') {
    return '36'
  } else if (name.value === 'md') {
    return '46'
  } else if (name.value === 'lg') {
    return '52'
  } else if (name.value === 'xl') {
    return '52'
  } else if (name.value === 'xxl') {
    return '52'
  }
}

// Autocomplete
const products = ref([])
const productsFilterType = ref([])
const productsFilterTypeThis = ref([])
const productsFilterBrand = ref([])
const productsFilterPrice = ref([])
const productsFilterMaxPrice = ref(1111)

const instrumentBrandMainArray = ref([])

const instrumentTypeArray = ref([])
const instrumentTypeText = ref('')

const instrumentTypeThisArray = ref([])
const instrumentTypeThisText = ref('')

const instrumentBrandArray = ref([])
const instrumentBrandText = ref([])

const instrumentPriceArray = ref([])
const instrumentPriceText = ref([])

const instrumentAvailabilitySecond = ref(false)

const disabledVAutocomplete = ref(true) // true
const disabledVAutocompleteSecond = ref(false) // false


const filterTypeArray = (products, instrumentTypeText) => {
  productsFilterType.value = _.filter(products, item => item.type === instrumentTypeText)
  if (productsFilterType.value.length >= 1) {
    disabledVAutocomplete.value = false
  } else {
    disabledVAutocomplete.value = true
  }
  instrumentTypeThisArray.value = _.uniq(productsFilterType.value.map(item => item.typeThis))
}
const filterTypeThisArray = (products, instrumentTypeThisText) => {
  productsFilterTypeThis.value = _.filter(products, item => item.typeThis === instrumentTypeThisText)
  productsFilterBrand.value = _.uniq(productsFilterTypeThis.value.map(item => item.brand))
  productsFilterPrice.value = _.uniq(productsFilterTypeThis.value.map(item => item.price))
  productsFilterMaxPrice.value = _.max(productsFilterPrice.value)


  if (productsFilterTypeThis.value.length >= 1) {
    disabledVAutocompleteSecond.value = true
  } else {
    disabledVAutocompleteSecond.value = false
  }
}

const clickToFilter = async () => {
  const data = ref({
    type: instrumentTypeText.value,
    typeThis: instrumentTypeThisText.value,
    brand: instrumentBrandText.value,
    price: instrumentPriceText.value,
    avalibilitySecond: instrumentAvailabilitySecond.value
  })
  if (await filterByParams(data.value)) {
    await router.push({name: 'searchInstrumentByParams'})
    window.location.reload()
  } else {}


}

const props = ref(null)

onMounted(async () => {
  if (await fetchingInstrumentAll()) {
    products.value = JSON.parse(localStorage.getItem("all_instrument"))
    instrumentTypeArray.value = JSON.parse(localStorage.getItem("all_instrument_type"))
    instrumentBrandMainArray.value = JSON.parse(localStorage.getItem("all_instrument_brand"))
  }
})

</script>

<template>
  <v-card
      width="500"
      min-height="800"
      color="background"
      class="mainBlock pa-4 ma-1"
      elevation="6">
    <h1 class="blockTitle">Фильтр</h1>
    <div class="blockForm">
      <h1 class="titleFilter">Выберите категорию инструмента</h1>
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentTypeArray"
          v-model="instrumentTypeText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите категорию инструмента"
          variant="filled"
          @update:search="filterTypeArray(products, instrumentTypeText)"
      ></v-autocomplete>
      <h1 class="titleFilter" v-if="!disabledVAutocomplete">Выберите тип инструмента</h1>
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentTypeThisArray"
          v-model="instrumentTypeThisText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите тип инструмента"
          variant="filled"

          v-if="!disabledVAutocomplete"
          @update:search="filterTypeThisArray(productsFilterType, instrumentTypeThisText)"
      ></v-autocomplete>



      <div class="blockFilterBrand" v-if="disabledVAutocompleteSecond">
        <h1 class="titleFilter">Производитель</h1>
        <div class="actionsBlockFilterBrand">
          <v-checkbox class="vCheckboxFilterBrand" v-model="instrumentBrandText" v-for="i in productsFilterBrand" :value="i" :label="i"></v-checkbox>
        </div>
      </div>

      <div class="blockFilterPrice" v-if="disabledVAutocompleteSecond">
        <h1 class="titleFilter">Цена</h1>
        <v-range-slider
            step="100"
            min="0"
            :max="productsFilterMaxPrice"
            v-model="instrumentPriceText"
            thumb-label="always"
            class="vRangeSliderFilterPrice"
            color="primary"
        ></v-range-slider>
      </div>

      <div class="blockFilterAvailabilitySecond" v-if="disabledVAutocompleteSecond">
        <v-checkbox class="vCheckboxFilterAvailabilitySecond" label="В наличии" v-model="instrumentAvailabilitySecond"></v-checkbox>
      </div>

      <v-btn class="vBtnMain"
             :height="heightVBtnMain()"
             v-if="disabledVAutocompleteSecond"
             @click="clickToFilter()"
      >Поиск
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
// - import
@import '../assets/mixins';


// Media

@media screen and (max-width: 376px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.3rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
  }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 100%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

@media screen and (min-width: 376px) and (max-width: 600px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.3rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
  }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 100%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

@media screen and (min-width: 600px) and (max-width: 960px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.3rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
  }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 50%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.3rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
  }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 50%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.3rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
  }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 50%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.7rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
  }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 50%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

@media screen and (min-width: 2560px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // Title

  .titleFilter {
    font-size: 1.7rem;
    margin-bottom: 30px;
    font-weight: 500;
    color: $text;
  }

  // v-autocomplete

  .vAutocompleteMain {}

  // Filter Brand

  .blockFilterBrand, .blockFilterPrice, .blockFilterAvailabilitySecond {
    width: 100%;
    margin-bottom: 30px;
  }

  .blockFilterBrand {}

  .actionsBlockFilterBrand {
    display: flex;
    flex-wrap: wrap;
   }

  .vCheckboxFilterBrand, .vCheckboxFilterAvailabilitySecond {
    width: 50%;
    color: $primary;
    font-weight: 600;
  }

  .vCheckboxFilterBrand {}

  // Filter Price

  .blockFilterPrice {}

  .vRangeSliderFilterPrice {
    margin-top: 50px;
  }

  // Filter Availability Second

  .blockFilterAvailabilitySecond {}

  // v-btn

  .vBtnMain {
    width: 300px;
    position: relative;
    font-size: 1.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $background;
    background-color: $primary;
    transition: all 0.3s ease-in-out;
  }
  .vBtnMain:hover {
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
    transition: all 0.3s ease-in-out;
  }

}

</style>
