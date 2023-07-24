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
const productsFilterType = ref([])
const productsFilterTypeThis = ref([])
const productsFilterBrand = ref([])
const productsFilterPrice = ref([])

const instrumentTypeArray = ref([])
const instrumentTypeText = ref('') // string

const instrumentTypeThisArray = ref([])
const instrumentTypeThisText = ref('') // string

const instrumentBrandArray = ref([])
const instrumentBrandText = ref('') // string

const instrumentPriceArray = ref([])
const instrumentPriceText = ref('')

const instrumentAvailability = ref("") // true or false

const disabledVAutocomplete = ref(true)
const disabledVAutocompleteSecond = ref(true)
const disabledVAutocompleteThird = ref(true)


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
  if (productsFilterTypeThis.value.length >= 1) {
    disabledVAutocompleteSecond.value = false
  } else {
    disabledVAutocompleteSecond.value = true
  }

  instrumentBrandArray.value = _.uniq(productsFilterTypeThis.value.map(item => item.brand))
}
const filterBrandArray = (products, instrumentBrandText) => {
  productsFilterBrand.value = _.filter(products, item => item.brand === instrumentBrandText)
  if (productsFilterBrand.value.length >= 1) {
    disabledVAutocompleteThird.value = false
  } else {
    disabledVAutocompleteThird.value = true
  }

  instrumentPriceArray.value = _.uniq(productsFilterBrand.value.map(item => item.price))
}
const filterPriceArray = (products, instrumentPriceText) => {
  productsFilterPrice.value = _.filter(products, item => item.price === instrumentPriceText)
}

const clickToFilter = async () => {
  const data = ref({
    type: instrumentTypeText.value,
    typeThis: instrumentTypeThisText.value,
    brand: instrumentBrandText.value,
    price: instrumentPriceText.value,
    avalibilitySecond: instrumentAvailability.value
  })
  if (await filterByParams(data.value)) {
    // await router.push({name: 'searchInstrumentByParams'})
    // window.location.reload()
  } else {}


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
      height="800"
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
          @update:search="filterTypeArray(products, instrumentTypeText)"
      ></v-autocomplete>
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
          @update:search="filterTypeThisArray(productsFilterType, instrumentTypeThisText)"
      ></v-autocomplete>
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentBrandArray"
          v-model="instrumentBrandText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите бренд инструмента"
          variant="filled"
          :disabled="disabledVAutocomplete"
          @update:search="filterBrandArray(productsFilterTypeThis, instrumentBrandText)"
      ></v-autocomplete>

      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentPriceArray"
          v-model="instrumentPriceText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите стоимость инструмента"
          variant="filled"
          :disabled="disabledVAutocomplete"
          @update:search="filterPriceArray(productsFilterBrand, instrumentPriceText)"
      ></v-autocomplete>

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
