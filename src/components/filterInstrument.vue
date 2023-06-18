<script setup="">
// - import
import {onMounted, ref, computed, watch} from 'vue'
import {useInstrumentStore} from '../stores/counter.js'
import _ from 'lodash'
import {ProcessingError} from '../notification/toasting.js'
// router
import {useRouter} from 'vue-router'

const router = useRouter()
const {fetchingInstrumentAll, filterByParams} = useInstrumentStore()

// Autocomplete
const products = ref([])

const instrumentTypeArray = ref([])
const instrumentTypeText = ref('') // string

const instrumentTypeThisArray = ref([])
const instrumentTypeThisText = ref('') // string

const instrumentBrandArray = ref([])
const instrumentBrandText = ref('') // string

const instrumentPriceText = ref(null)

const instrumentAvailability = ref('') // true or false

const disabledVAutocomplete = ref(true)
const disabledVAutocompleteSecond = ref(true)
// function

const filterTypeArray = () => {
  if (instrumentTypeText.value === '') {
    ProcessingError('Не выбран тип инструмента!')
  } else if (instrumentTypeText.value === 'Аккумуляторный инструмент') {
    const typeInstrument = ref(_.filter(products.value, {type: 'Аккумуляторный инструмент'}))
    instrumentTypeThisArray.value = _.uniqBy(typeInstrument.value, 'typeThis').map(instrument => instrument.typeThis)
    disabledVAutocomplete.value = false
  } else if (instrumentTypeText.value === 'Бензоинструмент') {
    const typeInstrument = ref(_.filter(products.value, {type: 'Бензоинструмент'}))
    instrumentTypeThisArray.value = _.uniqBy(typeInstrument.value, 'typeThis').map(instrument => instrument.typeThis)
    disabledVAutocomplete.value = false
  } else if (instrumentTypeText.value === 'Сетевой инструмент') {
    const typeInstrument = ref(_.filter(products.value, {type: 'Сетевой инструмент'}))
    instrumentTypeThisArray.value = _.uniqBy(typeInstrument.value, 'typeThis').map(instrument => instrument.typeThis)
    disabledVAutocomplete.value = false
  } else if (instrumentTypeText.value === 'Пневмоинструмент') {
    const typeInstrument = ref(_.filter(products.value, {type: 'Пневмоинструмент'}))
    instrumentTypeThisArray.value = _.uniqBy(typeInstrument.value, 'typeThis').map(instrument => instrument.typeThis)
    disabledVAutocomplete.value = false
  }
}
const filterTypeThisArray = () => {
  // Пусто
  if (instrumentTypeThisText.value === '') {
    ProcessingError('Не выбрана категория инструмента!')
  }
  // Cordless
  if (instrumentTypeThisText.value === 'Аккумуляторный перфоратор') {
    const brandInstrument = ref(_.filter(products.value, {typeThis: 'Аккумуляторный перфоратор'}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Аккумуляторная болгарка") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Аккумуляторная болгарка"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Аккумуляторная дрель-шуруповерт") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Аккумуляторная дрель-шуруповерт"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  }
  // Gasoline
  if (instrumentTypeThisText.value === "Бензиновый мотоблок") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Бензиновый мотоблок"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Бензогенератор") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Бензогенератор"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Бензопила") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Бензопила"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  }
  // Network
  if (instrumentTypeThisText.value === "Дрель") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Дрель"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Лобзик электрический") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Лобзик электрический"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Перфоратор") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Перфоратор"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  }
  // Pneumo
  if (instrumentTypeThisText.value === "Гвоздезабивной пистолет пневматический") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Гвоздезабивной пистолет пневматический"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Пневматическая отбойная молотковая машина") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Пневматическая отбойная молотковая машина"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  } else if (instrumentTypeThisText.value === "Компрессор") {
    const brandInstrument = ref(_.filter(products.value, {typeThis: "Компрессор"}))
    instrumentBrandArray.value = _.uniqBy(brandInstrument.value, 'brand').map(instrument => instrument.brand)
    disabledVAutocompleteSecond.value = false
  }
}
//

const minPrice = ref(0);
const maxPrice = ref(300000);

const clickToFilter = async () => {
  const data = ref({
    type: instrumentTypeText.value,
    typeThis: instrumentTypeThisText.value,
    brand: instrumentBrandText.value,
    price: instrumentPriceText.value,
    avalibilitySecond: instrumentAvailability.value
  })
  if (await filterByParams(data.value)) {
    await router.push({name: 'searchInstrumentByParams'})
    window.location.reload()
  } else {
  }


}

onMounted(async () => {
  if (await fetchingInstrumentAll()) {
    products.value = JSON.parse(localStorage.getItem("all_instrument"))
    instrumentTypeArray.value = JSON.parse(localStorage.getItem("all_instrument_type"))
  }
})
</script>

<template>
  <v-card
      width="500"
      height="600"
      color="background"
      class="mainBlock pa-4 ma-1"
      elevation="6">
    <h1 class="blockTitle">Фильтр</h1>
    <div class="blockForm">
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentTypeArray"
          v-model="instrumentTypeText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите тип инструмента"
          variant="filled"
      ></v-autocomplete>
      <div class="actionVBtn">
        <v-btn class="vBtnMain"
               @click="filterTypeArray()">Тип инструмента выбран
        </v-btn>
      </div>
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentTypeThisArray"
          v-model="instrumentTypeThisText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите под категорию инструмента"
          variant="filled"
          :disabled="disabledVAutocomplete"
      ></v-autocomplete>
      <div class="actionVBtn">
        <v-btn class="vBtnMain"
               @click="filterTypeThisArray()">Категория инструмента выбрана
        </v-btn>
      </div>
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentBrandArray"
          v-model="instrumentBrandText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите бренд инструмента"
          variant="filled"
          :disabled="disabledVAutocompleteSecond"
      ></v-autocomplete>
      <v-slider
          class="w-100"
          v-model="instrumentPriceText"
          min="0"
          label="Выберите стоимость"
          :max="maxPrice"
          :step="1"
      ></v-slider>
      <p class="textPriceFrom">{{ instrumentPriceText }} рублей</p>
      <v-switch
          v-model="instrumentAvailability"
          label="В наличии"></v-switch>
      <v-btn class="vBtnMain"
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
}

@media screen and (min-width: 376px) and (max-width: 600px) {
}

@media screen and (min-width: 600px) and (max-width: 960px) {
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
}

@media screen and (min-width: 2560px) {
  // Main
  .mainBlock {
  }

  // Title
  .blockTitle {
    font-size: 2rem;
    text-align: center;
    color: $primary;
  }

  // Form
  .blockForm {
    margin-top: 30px;
  }

  // v-autocomplete
  .vAutocompleteMain {

  }

  // v-btn
  .actionVBtn {
    display: flex;
    justify-content: center;
  }

  .vBtnMain {
  }

  // text price
  .textPriceFrom {
  }


}

</style>
