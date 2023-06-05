<script setup="">
// - import
import {onMounted, ref, computed, watch} from 'vue'
import {useInstrumentStore} from '../stores/counter.js'
import _ from 'lodash'
// router
import {useRouter} from 'vue-router'

const router = useRouter()
const {fetchingInstrumentAll, filterByParams} = useInstrumentStore()

// Autocomplete
const instrumentTypeArray = ref([])
const instrumentTypeText = ref('') // string

const instrumentTypeThisArray = ref([])
const instrumentTypeThisText = ref('') // string

const instrumentBrandArray = ref([])
const instrumentBrandText = ref('') // string

const instrumentPriceText = ref(null)

const instrumentAvailability = ref('') // true or false
//


const minPrice = ref(0);
const maxPrice = ref(300000);

const clickToFilter = async () => {
  const data = ref({
    type: instrumentTypeText.value,
    typeThis: instrumentTypeThisText.value,
    brand: instrumentBrandText.value,
    price: instrumentPriceText.value,
    avalibility: instrumentAvailability.value
  })
  console.log(`data`, data.value)
  await filterByParams(data.value)

}

onMounted(async () => {
  if (await fetchingInstrumentAll()) {
    instrumentBrandArray.value = JSON.parse(localStorage.getItem('all_instrument_brand'))
    const products = JSON.parse(localStorage.getItem("all_instrument"))


  }
})
</script>

<template>
  <v-card
      width="500"
      height="700"
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
      <v-autocomplete
          clearable
          class="vAutocompleteMain"
          type="text"
          :items="instrumentTypeThisArray"
          v-model="instrumentTypeThisText"
          prepend-icon="fa-solid fa-magnifying-glass"
          placeholder="Введите под категорию инструмента"
          variant="filled"
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
      ></v-autocomplete>
      <v-slider
          class="w-100"
          v-model="instrumentPriceText"
          min="0"
          label="Выберите стоимость"
          :max="maxPrice"
          :step="1"
      ></v-slider>
      <p>{{ instrumentPriceText }} рублей</p>
      <v-switch
          v-model="instrumentAvailability"
          label="В наличии"></v-switch>

      <v-btn
          @click="clickToFilter()"
      >Поиск
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
